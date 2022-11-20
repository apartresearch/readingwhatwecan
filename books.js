const books = [
  {
    Name: "Eliciting Latent Knowledge",
    Slug: "eliciting-latent-knowledge",
    Link: "https://docs.google.com/document/d/1WwsnJQstPq91_Yh-Ch2XRL8H_EpsnjrC1dwZXR37PC8/edit",
    Author: "Alignment Research Center",
    coming_from: "ML engineering,First entry",
    Prior: 13,
    "Book rating": 5,
    page_count: 106,
    "Last Modified": "14/4/2022 12:26am",
    Draft: "",
    Archived: "",
    image_url: "",
  },
  {
    Name: "Risks from Learned Optimization",
    Slug: "risks-from-learned-optimization",
    Link: "https://arxiv.org/pdf/1906.01820.pdf",
    Author: "Evan Hubinger et al.",
    coming_from: "AI safety upskill to ML,ML engineering,First entry",
    Prior: 9,
    "Book rating": 5,
    page_count: 39,
    "Last Modified": "14/4/2022 12:26am",
    Draft: "",
    Archived: "",
    image_url: "",
  },
  {
    Name: "Research agenda for AI alignment",
    Slug: "research-agenda-for-ai-alignment",
    Link: "https://intelligence.org/files/TechnicalAgenda.pdf",
    Author: "David Soares, Benya Fallenstein",
    coming_from: "",
    Prior: null,
    "Book rating": null,
    page_count: 11,
    "Last Modified": "13/4/2022 7:22pm",
    Draft: "",
    Archived: "",
    image_url: "",
  },
  {
    Name: "Research priorities for robust and beneficial AI",
    Slug: "research-priorities-for-robust-and-beneficial-ai",
    Link: "https://arxiv.org/abs/1602.03506",
    Author: "Stuart Russell, Daniel Dewey, Max Tegmark",
    coming_from: "First entry",
    Prior: 6,
    "Book rating": 4,
    page_count: 9,
    "Last Modified": "14/4/2022 10:04am",
    Draft: "",
    Archived: "",
    image_url: "",
  },
  {
    Name: "Alignment for advanced machine learning systems",
    Slug: "alignment-for-advanced-machine-learning-systems",
    Link: "https://intelligence.org/files/AlignmentMachineLearning.pdf",
    Author: "Jessica Taylor et al.",
    coming_from: "First entry,ML engineering",
    Prior: 12,
    "Book rating": 4.5,
    page_count: 25,
    "Last Modified": "14/4/2022 9:35am",
    Draft: "",
    Archived: "",
    image_url: "",
  },
  {
    Name: "Training a Helpful and Harmless Assistant with RLHF",
    Slug: "helpful-harmless-assistant",
    Link: "https://arxiv.org/pdf/2204.05862.pdf",
    Author: "Anthropic",
    coming_from: "ML engineering,First entry,AI safety upskill to ML",
    Prior: 9,
    "Book rating": null,
    page_count: 74,
    "Last Modified": "",
    Draft: "",
    Archived: "",
    image_url: "",
  },
  {
    Name: "AI as positive and negative risk factors",
    Slug: "ai-as-positive-and-negative-risk-factors",
    Link: "https://intelligence.org/files/AIPosNegFactor.pdf",
    Author: "Eliezer Yudkowsky",
    coming_from: "First entry,ML engineering",
    Prior: 7,
    "Book rating": 4,
    page_count: 45,
    "Last Modified": "14/4/2022 12:26am",
    Draft: "",
    Archived: "",
    image_url: "",
  },
  {
    Name: "AGI safety from first principles",
    Slug: "agi-safety-from-first-principles",
    Link: "https://www.lesswrong.com/s/mzgtmmTKKn5MuCzFJ",
    Author: "Richard Ngo",
    coming_from: "First entry,ML engineering",
    Prior: 7,
    "Book rating": 5,
    page_count: 35,
    "Last Modified": "14/4/2022 12:26am",
    Draft: "",
    Archived: "",
    image_url: "",
  },
  {
    Name: "Smarter Than Us",
    Slug: "smarter-than-us",
    Link: "https://smarterthan.us/toc/",
    Author: "Stuart Armstrong",
    coming_from: "",
    Prior: 2,
    "Book rating": 3.5,
    page_count: 64,
    "Last Modified": "14/4/2022 12:26am",
    Draft: "",
    Archived: "",
    image_url: "",
  },
  {
    Name: "GopherCite",
    Slug: "gopher-cite",
    Link: "https://storage.googleapis.com/deepmind-media/Teaching%20language%20models%20to%20support%20answers%20with%20verified%20quotes/Teaching%20language%20models%20to%20support%20answers%20with%20verified%20quotes.pdf",
    Author: "Deepmind",
    coming_from: "AI safety upskill to ML",
    Prior: 12,
    "Book rating": 4,
    page_count: 40,
    "Last Modified": "",
    Draft: "",
    Archived: "",
    image_url: "",
  },
  {
    Name: "The Singularity is Near",
    Slug: "the-singularity-is-near",
    Link: "https://smile.amazon.com/The-Singularity-Is-Near-audiobook/dp/B07XPFT63D/ref=sr_1_1?crid=1CDY6DV8VCXWR&keywords=the+singularity+is+near&qid=1645680963&s=audible&sprefix=the+singularity+is+nea%2Caudible%2C118&sr=1-1\n",
    Author: "Ray Kurzweil",
    coming_from: "First entry",
    Prior: 5,
    "Book rating": 4,
    page_count: 652,
    "Last Modified": "14/4/2022 12:26am",
    Draft: "",
    Archived: "",
    image_url: "",
  },
  {
    Name: "Superintelligence",
    Slug: "superintelligence",
    Link: "https://smile.amazon.com/Superintelligence-Nick-Bostrom-audiobook/dp/B00LPMFE9Y/ref=sr_1_1?crid=34KP1XN41F9GE&keywords=superintelligence&qid=1645680946&sprefix=superintelligenc%2Caps%2C135&sr=8-1",
    Author: "Nick Bostrom",
    coming_from: "ML engineering,First entry",
    Prior: 5,
    "Book rating": 5,
    page_count: 352,
    "Last Modified": "14/4/2022 12:43am",
    Draft: "",
    Archived: "",
    image_url: "",
  },
  {
    Name: "Instruct-GPT-3",
    Slug: "igpt-3",
    Link: "https://arxiv.org/pdf/2203.02155.pdf",
    Author: "OpenAI",
    coming_from: "ML engineering,First entry,AI safety upskill to ML",
    Prior: 13,
    "Book rating": 4.5,
    page_count: 68,
    "Last Modified": "",
    Draft: "",
    Archived: "",
    image_url: "",
  },
  {
    Name: "Concrete problems in AI safety",
    Slug: "concrete-problems-in-ai-safety",
    Link: "https://arxiv.org/abs/1606.06565",
    Author: "Dario Amodei et al.",
    coming_from: "",
    Prior: null,
    "Book rating": null,
    page_count: 26,
    "Last Modified": "13/4/2022 11:57pm",
    Draft: "",
    Archived: "",
    image_url: "",
  },
  {
    Name: "Managing to Change the World",
    Slug: "managing-to-change-the-world",
    Link: "https://www.goodreads.com/book/show/13044641-managing-to-change-the-world?from_search=true&from_srp=true&qid=yY0zmXuJvd&rank=1",
    Author: "Alison Green",
    coming_from: "Management",
    Prior: null,
    "Book rating": 4.31,
    page_count: 240,
    "Last Modified": "",
    Draft: "",
    Archived: "",
    image_url:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348712807l/13044641.jpg",
  },
  {
    Name: "Whole Brain Emulation",
    Slug: "whole-brain-emulation",
    Link: "https://www.fhi.ox.ac.uk/brain-emulation-roadmap-report.pdf",
    Author: "Anders Sandberg, Nick Bostrom",
    coming_from: "AI safety upskill to ML,First entry",
    Prior: 14,
    "Book rating": 4.5,
    page_count: 130,
    "Last Modified": "14/4/2022 12:26am",
    Draft: "",
    Archived: "",
    image_url: "",
  },
  {
    Name: "The Circuits Series 1",
    Slug: "the-circuits-series-1",
    Link: "https://transformer-circuits.pub/2021/framework/index.html",
    Author: "Anthropic",
    coming_from: "ML engineering,First entry,AI safety upskill to ML",
    Prior: 15,
    "Book rating": 5,
    page_count: 49,
    "Last Modified": "14/4/2022 12:26am",
    Draft: "",
    Archived: "",
    image_url: "",
  },
  {
    Name: "The Circuits Series 2",
    Slug: "the-circuits-series-2",
    Link: "https://transformer-circuits.pub/2022/in-context-learning-and-induction-heads/index.html",
    Author: "Anthropic",
    coming_from: "ML engineering,First entry,AI safety upskill to ML",
    Prior: 16,
    "Book rating": 5,
    page_count: 60,
    "Last Modified": "14/4/2022 12:26am",
    Draft: "",
    Archived: "",
    image_url: "",
  },
  {
    Name: "The Age of Em",
    Slug: "age-of-em",
    Link: "https://smile.amazon.co.uk/Age-Em-Work-Robots-Earth/dp/0198754620?sa-no-redirect=1",
    Author: "Robin Hanson",
    coming_from: "First entry,ML engineering",
    Prior: 4,
    "Book rating": 3.6,
    page_count: 448,
    "Last Modified": "",
    Draft: "",
    Archived: "",
    image_url: "",
  },
  {
    Name: "The Circuits Series 0",
    Slug: "the-circuits-series-0",
    Link: "https://distill.pub/2020/circuits/",
    Author: "OpenAI",
    coming_from: "ML engineering,First entry,AI safety upskill to ML",
    Prior: 14,
    "Book rating": null,
    page_count: 72,
    "Last Modified": "",
    Draft: "",
    Archived: "",
    image_url: "",
  },
  {
    Name: "World Models",
    Slug: "world-models",
    Link: "\nhttps://worldmodels.github.io/",
    Author: "Jürgen Schmidhuber",
    coming_from: "First entry,AI safety upskill to ML",
    Prior: 10,
    "Book rating": 4,
    page_count: 21,
    "Last Modified": "14/4/2022 12:26am",
    Draft: "",
    Archived: "",
    image_url: "",
  },
  {
    Name: "The AI Revolution\n",
    Slug: "the-ai-revolution",
    Link: "https://waitbutwhy.com/2015/01/artificial-intelligence-revolution-1.html",
    Author: "Tim Urban",
    coming_from: "First entry",
    Prior: 3,
    "Book rating": 4.5,
    page_count: 84,
    "Last Modified": "14/4/2022 12:26am",
    Draft: "",
    Archived: "",
    image_url: "",
  },
  {
    Name: "Human Compatible",
    Slug: "human-compatible",
    Link: "https://smile.amazon.com/Human-Compatible-Stuart-Russell-audiobook/dp/B07RLSGS2W/ref=sr_1_1?crid=2RT2LOPCCPXAH&keywords=human+compatible&qid=1645681009&s=audible&sprefix=human+compatible%2Caudible%2C108&sr=1-1",
    Author: "Stuart Russell",
    coming_from: "First entry,ML engineering",
    Prior: 8,
    "Book rating": 4,
    page_count: 352,
    "Last Modified": "14/4/2022 12:26am",
    Draft: "",
    Archived: "",
    image_url: "",
  },
  {
    Name: "General intelligence from AI services",
    Slug: "general-intelligence-from-ai-services",
    Link: "https://www.fhi.ox.ac.uk/wp-content/uploads/Reframing_Superintelligence_FHI-TR-2019-1.1-1.pdf",
    Author: "K. Eric Drexler",
    coming_from: "First entry,ML engineering",
    Prior: 10,
    "Book rating": null,
    page_count: 210,
    "Last Modified": "13/4/2022 7:21pm",
    Draft: "",
    Archived: "",
    image_url: "",
  },
  {
    Name: "The Alignment Problem",
    Slug: "the-alignment-problem",
    Link: "https://smile.amazon.com/Alignment-Problem-Machine-Learning-Values/dp/0393635821?sa-no-redirect=1",
    Author: "Brain Christian",
    coming_from: "First entry",
    Prior: 4,
    "Book rating": 4.5,
    page_count: 496,
    "Last Modified": "14/4/2022 12:26am",
    Draft: "",
    Archived: "",
    image_url: "",
  },
];
