document.addEventListener('DOMContentLoaded', () => {
  // ── LocalStorage helpers ──
  const STORAGE_KEY_COMPLETED = 'rwwc_completed';
  const STORAGE_KEY_ACTIVITY = 'rwwc_activity';

  function getCompleted() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY_COMPLETED)) || {};
    } catch { return {}; }
  }

  function getActivity() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY_ACTIVITY)) || {};
    } catch { return {}; }
  }

  function saveCompleted(data) {
    localStorage.setItem(STORAGE_KEY_COMPLETED, JSON.stringify(data));
  }

  function saveActivity(data) {
    localStorage.setItem(STORAGE_KEY_ACTIVITY, JSON.stringify(data));
  }

  function todayStr() {
    return new Date().toISOString().split('T')[0];
  }

  // ── Toggle book completion ──
  function toggleBook(listKey, index) {
    const completed = getCompleted();
    const activity = getActivity();
    const key = `${listKey}_${index}`;
    const today = todayStr();

    if (completed[key]) {
      // Unmark
      const dateCompleted = completed[key];
      delete completed[key];
      if (activity[dateCompleted]) {
        activity[dateCompleted]--;
        if (activity[dateCompleted] <= 0) delete activity[dateCompleted];
      }
    } else {
      // Mark complete
      completed[key] = today;
      activity[today] = (activity[today] || 0) + 1;
    }

    saveCompleted(completed);
    saveActivity(activity);
    renderAll();
  }

  // ── Detect link source type ──
  function getLinkType(url) {
    if (url.includes('amazon') || url.includes('smile.amazon')) return 'Amazon';
    if (url.includes('.pdf')) return 'PDF';
    if (url.includes('lesswrong')) return 'LessWrong';
    if (url.includes('arxiv')) return 'ArXiv';
    if (url.includes('docs.google')) return 'GDocs';
    if (url.includes('gutenberg')) return 'Gutenberg';
    if (url.includes('distill.pub')) return 'Distill';
    return 'Article';
  }

  // ── Render book lists ──
  const lists = {
    first_entry: { data: typeof first_entry !== 'undefined' ? first_entry : [], el: 'list-first_entry' },
    ml: { data: typeof ml !== 'undefined' ? ml : [], el: 'list-ml' },
    ais: { data: typeof ais !== 'undefined' ? ais : [], el: 'list-ais' },
    scifi: { data: typeof scifi !== 'undefined' ? scifi : [], el: 'list-scifi' },
  };

  function renderBooks() {
    const completed = getCompleted();

    Object.entries(lists).forEach(([listKey, { data, el }]) => {
      const container = document.getElementById(el);
      if (!container) return;
      container.innerHTML = '';

      const items = data.slice(0, 20);
      let completedCount = 0;

      items.forEach((entry, i) => {
        if (!entry) return;
        const key = `${listKey}_${i}`;
        const isCompleted = !!completed[key];
        if (isCompleted) completedCount++;

        const row = document.createElement('div');
        row.className = `book-row${isCompleted ? ' completed' : ''}`;

        const check = document.createElement('div');
        check.className = 'check-box';
        check.title = isCompleted ? 'Mark as unread' : 'Mark as read';
        check.addEventListener('click', (e) => {
          e.stopPropagation();
          toggleBook(listKey, i);
        });

        const num = document.createElement('span');
        num.className = 'book-num';
        num.textContent = String(i + 1).padStart(2, '0');

        const title = document.createElement('span');
        title.className = 'book-title';
        const titleLink = document.createElement('a');
        titleLink.href = entry.Link;
        titleLink.target = '_blank';
        titleLink.rel = 'noopener';
        titleLink.textContent = entry.Name;
        title.appendChild(titleLink);

        const author = document.createElement('span');
        author.className = 'book-author';
        author.textContent = entry.Author;
        author.title = entry.Author;

        const type = document.createElement('span');
        type.className = 'book-type';
        type.textContent = getLinkType(entry.Link);

        const pages = document.createElement('span');
        pages.className = 'book-pages';
        pages.textContent = entry.page_count ? `${entry.page_count}p` : '';

        row.appendChild(check);
        row.appendChild(num);
        row.appendChild(title);
        row.appendChild(author);
        row.appendChild(type);
        row.appendChild(pages);
        container.appendChild(row);
      });

      // Update tab count
      const countEl = document.getElementById(`count-${listKey}`);
      if (countEl) {
        countEl.textContent = `${completedCount}/${items.length}`;
      }
    });
  }

  // ── Tab switching ──
  const tabs = document.querySelectorAll('.tab');
  const bookLists = document.querySelectorAll('.book-list');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.getAttribute('data-tab');
      tabs.forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      bookLists.forEach(l => {
        l.classList.toggle('active', l.id === `list-${target}`);
      });
    });
  });

  // ── Contribution Graph ──
  function renderGraph() {
    const activity = getActivity();
    const container = document.getElementById('contribution-graph');
    if (!container) return;

    const WEEKS = 26;
    const CELL = 11;
    const GAP = 3;
    const TOTAL_DAYS = WEEKS * 7;

    // Calculate date range ending today, starting from nearest Sunday
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // End date is today
    const endDate = new Date(today);

    // Start date: go back TOTAL_DAYS and find the Sunday
    const startDate = new Date(today);
    startDate.setDate(startDate.getDate() - TOTAL_DAYS + 1);
    // Adjust to previous Sunday
    const dayOfWeek = startDate.getDay();
    startDate.setDate(startDate.getDate() - dayOfWeek);

    // Recalculate total days
    const actualDays = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1;
    const actualWeeks = Math.ceil(actualDays / 7);

    // Month labels
    const months = [];
    let lastMonth = -1;
    for (let w = 0; w < actualWeeks; w++) {
      const d = new Date(startDate);
      d.setDate(d.getDate() + w * 7);
      const m = d.getMonth();
      if (m !== lastMonth) {
        months.push({ week: w, label: d.toLocaleDateString('en', { month: 'short' }) });
        lastMonth = m;
      }
    }

    const LEFT_PAD = 30;
    const TOP_PAD = 18;
    const svgWidth = LEFT_PAD + actualWeeks * (CELL + GAP);
    const svgHeight = TOP_PAD + 7 * (CELL + GAP);

    const colors = ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'];
    function getColor(count) {
      if (count === 0) return colors[0];
      if (count === 1) return colors[1];
      if (count === 2) return colors[2];
      if (count === 3) return colors[3];
      return colors[4];
    }

    // Build SVG
    let svg = `<svg width="${svgWidth}" height="${svgHeight}" xmlns="http://www.w3.org/2000/svg">`;

    // Month labels
    months.forEach(({ week, label }) => {
      const x = LEFT_PAD + week * (CELL + GAP);
      svg += `<text x="${x}" y="10" fill="#7d8590" font-size="10" font-family="'JetBrains Mono', monospace">${label}</text>`;
    });

    // Day labels
    const dayLabels = ['', 'Mon', '', 'Wed', '', 'Fri', ''];
    dayLabels.forEach((label, i) => {
      if (label) {
        const y = TOP_PAD + i * (CELL + GAP) + CELL - 1;
        svg += `<text x="0" y="${y}" fill="#7d8590" font-size="9" font-family="'JetBrains Mono', monospace">${label}</text>`;
      }
    });

    // Cells
    for (let w = 0; w < actualWeeks; w++) {
      for (let d = 0; d < 7; d++) {
        const cellDate = new Date(startDate);
        cellDate.setDate(cellDate.getDate() + w * 7 + d);

        // Skip future dates
        if (cellDate > today) continue;

        const dateStr = cellDate.toISOString().split('T')[0];
        const count = activity[dateStr] || 0;
        const x = LEFT_PAD + w * (CELL + GAP);
        const y = TOP_PAD + d * (CELL + GAP);

        const dateFormatted = cellDate.toLocaleDateString('en', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
        const tooltip = count === 0 ? `No readings on ${dateFormatted}` : `${count} reading${count > 1 ? 's' : ''} on ${dateFormatted}`;

        svg += `<rect x="${x}" y="${y}" width="${CELL}" height="${CELL}" rx="2" ry="2" fill="${getColor(count)}" data-tooltip="${tooltip}" class="graph-cell"/>`;
      }
    }

    svg += '</svg>';
    container.innerHTML = svg;

    // Tooltip handling
    let tooltipEl = document.querySelector('.graph-tooltip');
    if (!tooltipEl) {
      tooltipEl = document.createElement('div');
      tooltipEl.className = 'graph-tooltip';
      tooltipEl.style.display = 'none';
      document.body.appendChild(tooltipEl);
    }

    container.addEventListener('mouseover', (e) => {
      if (e.target.classList.contains('graph-cell')) {
        tooltipEl.textContent = e.target.getAttribute('data-tooltip');
        tooltipEl.style.display = 'block';
      }
    });

    container.addEventListener('mousemove', (e) => {
      if (tooltipEl.style.display === 'block') {
        tooltipEl.style.left = (e.pageX + 12) + 'px';
        tooltipEl.style.top = (e.pageY - 28) + 'px';
      }
    });

    container.addEventListener('mouseout', (e) => {
      if (e.target.classList.contains('graph-cell')) {
        tooltipEl.style.display = 'none';
      }
    });
  }

  // ── Stats ──
  function renderStats() {
    const completed = getCompleted();
    const activity = getActivity();
    const statsEl = document.getElementById('stats');
    if (!statsEl) return;

    const totalCompleted = Object.keys(completed).length;
    const totalBooks = Object.values(lists).reduce((sum, l) => sum + Math.min(l.data.length, 20), 0);

    // Calculate streak
    let streak = 0;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const checkDate = new Date(today);

    // Check if today has activity; if not, start from yesterday
    const todayKey = checkDate.toISOString().split('T')[0];
    if (!activity[todayKey]) {
      checkDate.setDate(checkDate.getDate() - 1);
    }

    while (true) {
      const key = checkDate.toISOString().split('T')[0];
      if (activity[key] && activity[key] > 0) {
        streak++;
        checkDate.setDate(checkDate.getDate() - 1);
      } else {
        break;
      }
    }

    // Last activity
    const dates = Object.keys(activity).filter(d => activity[d] > 0).sort();
    const lastDate = dates.length > 0 ? dates[dates.length - 1] : null;
    let lastStr = 'never';
    if (lastDate) {
      const ld = new Date(lastDate + 'T00:00:00');
      const diff = Math.floor((today - ld) / (1000 * 60 * 60 * 24));
      if (diff === 0) lastStr = 'today';
      else if (diff === 1) lastStr = 'yesterday';
      else lastStr = `${diff}d ago`;
    }

    statsEl.innerHTML = `
      <span><span class="stat-value">${totalCompleted}</span> / ${totalBooks} completed</span>
      <span><span class="stat-value">${streak}</span> day streak</span>
      <span>last: <span class="stat-value">${lastStr}</span></span>
    `;
  }

  // ── Render all ──
  function renderAll() {
    renderBooks();
    renderGraph();
    renderStats();
  }

  // Initial render
  renderAll();
});
