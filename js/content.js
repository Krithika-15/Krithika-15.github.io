/* ============================================================
   YOUR CONTENT — edit this file and nothing else to update the site.
   Everything on the home page is rendered from this object.
   ============================================================ */

const CONTENT = {
  // ---- Basics -------------------------------------------------
  name: "Krithika Ravichandran",
  role: "Python & AI Developer",
  tagline:
    "I build Python backends and connect them to AI. I bring five years of experience making AI output reliable: training, evaluating and delivering document-AI models for clients at LTIMindtree.",
  location: "Stockholm, Sweden",
  email: "krithikakrs96@gmail.com",
  // Phone is deliberately left off the public site to avoid scrapers.
  // It's on the resume PDF for anyone who asks.
  resume: "assets/resume.pdf",

  // Set to true once you have written your first real blog post.
  // While false, the Blog link and the Writing section are hidden.
  blog: false,

  // ---- Social links -------------------------------------------
  socials: [
    { label: "GitHub",   url: "https://github.com/Krithika-15",                        icon: "github" },
    { label: "LinkedIn", url: "https://linkedin.com/in/krithika-ravichandran",         icon: "linkedin" },
    { label: "Email",    url: "mailto:krithikakrs96@gmail.com",                        icon: "mail" },
  ],

  // ---- About --------------------------------------------------
  about: [
    "I'm a Python developer in training with a background in AI. For five years at LTIMindtree I worked on Fosfor Aspect, an AI platform that reads unstructured documents: it finds entities, classifies documents and extracts tables. For client use cases I labelled training documents, trained custom models, compared their accuracy and delivered the best one as a proof of concept.",
    "That work showed me how much I enjoy the building side, so I'm now training full-time as a Python & AI developer at Lexicon in Stockholm. So far I've built an OOP booking system on my own and a FastAPI + SQLite REST API in a four-person Scrum team. Next up are machine learning, LLM APIs, RAG, AI agents, Docker and Azure. Alongside the course, I'm taking Udemy courses on LLM engineering and AI agents.",
    "What I bring to a team: clean, tested Python, and the habit of checking that AI output is actually good enough, not just that the code runs.",
  ],

  facts: [
    { label: "Based in",   value: "Stockholm, Sweden" },
    { label: "Focus",      value: "Python backend · AI integrations" },
    { label: "Training",   value: "Lexicon Python & AI, to Feb 2027" },
    { label: "Experience", value: "5 years in document AI" },
  ],

  // ---- Skills -------------------------------------------------
  skills: [
    {
      group: "Python & Backend",
      items: [
        "Python",
        "OOP",
        "FastAPI",
        "REST APIs",
        "SQLite",
        "SQL / PostgreSQL",
        "pytest",
      ],
    },
    {
      group: "AI & Data",
      items: [
        "Custom model training",
        "Model evaluation & selection",
        "Data labelling",
        "NER & document classification",
        "Testing AI output",
        "pandas",
      ],
    },
    {
      group: "Learning now",
      items: ["LLM APIs", "Prompt engineering", "RAG", "AI agents", "Docker", "CI/CD"],
    },
    {
      group: "Tools & Workflow",
      items: [
        "Git & GitHub (branches, PRs, reviews)",
        "Agile / Scrum",
        "Postman",
        "Jira",
        "UiPath (certified)",
      ],
    },
  ],

  // ---- Projects -----------------------------------------------
  // Add `demo:` to any project to get a "Live demo" button alongside "Source".
  projects: [
    {
      title: "Book Club Library API",
      blurb:
        "A REST API for a book club's library, built with FastAPI and SQLite by a four-person Scrum team over two sprints. My part: the Open Library integration, so members can search real books by title (with a timeout, 400 for an empty search and 503 when Open Library is down). I also built the report endpoints (never-borrowed books, most-borrowed books, overdue loans), the author filter, the remove-book endpoint and API-key protection on every route.",
      tags: ["FastAPI", "SQLite", "REST API", "External API", "Scrum"],
      repo: "https://github.com/delarge77/Book-Club-Library",
      demo: null,
      image: null,
      featured: true,
      year: "2026",
    },
    {
      title: "Match Point booking system",
      blurb:
        "A booking system for a sports centre, built on my own: tennis and padel courts plus yoga classes. Court and GroupClass inherit from Resource, and all booking rules live in one BookingSystem class, kept apart from the menu. The rules: one booking per court per hour, a 12-person cap on classes, no double joining, no court and class at the same hour, and you can only cancel your own bookings.",
      tags: ["Python", "OOP", "Inheritance", "Validation"],
      repo: "https://github.com/Krithika-15/matchpoint-booking",
      demo: null,
      image: null,
      featured: false,
      year: "2026",
    },
    {
      title: "todo-cli",
      blurb:
        "A Python to-do CLI with a pytest suite, plus a written record of three silent bugs I found in my own code. Marking a missing task did nothing and said nothing. Removing a task could create duplicate ids, so some tasks could never be reached again. Completed tasks became undone after every restart, because a string was compared to a boolean. Each fix has a regression test.",
      tags: ["Python", "pytest", "CLI", "File storage"],
      repo: "https://github.com/Krithika-15/todo-cli",
      demo: null,
      image: null,
      featured: false,
      year: "2026",
    },
    {
      title: "Fosfor Aspect: document AI",
      blurb:
        "Fosfor Aspect is LTIMindtree's AI platform for unstructured documents: named entity recognition, document classification, object detection and table extraction. For client use cases such as invoices, I labelled training documents, trained custom models on top of the data science team's base models, compared accuracy and picked the best model for the proof of concept.",
      tags: ["NER", "Model training", "Model evaluation", "Client delivery"],
      repo: null, // Client work, no public repository.
      note: "Client work at LTIMindtree, so the code isn't public.",
      demo: null,
      image: null,
      featured: false,
      year: "2019 – 2024",
    },
    {
      title: "logicgym",
      blurb:
        "Five classic katas (FizzBuzz, primality, factorial, digit sum and GCD) written with type hints and covered by 15 pytest tests, including the error cases. A CLI runs any of them.",
      tags: ["Python", "pytest", "Type Hints", "CLI"],
      repo: "https://github.com/Krithika-15/logicgym",
      demo: null,
      image: null,
      featured: false,
      year: "2026",
    },
    {
      title: "Lexicon coursework",
      blurb:
        "My own solutions to the labs from Lexicon's Python & AI training, organised by course: Python foundations, databases and more as the course goes on.",
      tags: ["Python", "SQL", "Labs"],
      repo: "https://github.com/Krithika-15/Lexicon",
      demo: null,
      image: null,
      featured: false,
      year: "2026",
    },
    {
      title: "UiPath invoice bot",
      blurb:
        "An RPA bot that extracts invoice details and work items from the ACME web portal into Excel. It has eight modular workflows, and credentials are asked for at run time.",
      tags: ["UiPath", "RPA", "Web Automation", "Excel"],
      repo: "https://github.com/Krithika-15/uipath-acme-invoice-workitem-bot",
      demo: null,
      image: null,
      featured: false,
      year: "2026",
    },
    {
      title: "UiPath sales report bot",
      blurb:
        "An RPA bot that combines sales data from several workbooks. It removes duplicates, uses VLookup, builds a pivot table and chart, and protects the finished sheets.",
      tags: ["UiPath", "RPA", "Excel"],
      repo: "https://github.com/Krithika-15/uipath-sales-acquisitions-report-bot",
      demo: null,
      image: null,
      featured: false,
      year: "2026",
    },
  ],

  // ---- Experience ---------------------------------------------
  experience: [
    {
      role: "Python & AI Developer Training",
      org: "Lexicon · Stockholm, Sweden",
      period: "Sep 2026 — Feb 2027",
      points: [
        "Full-time, six-month course: Python, OOP, SQL, REST APIs with FastAPI, Git and Scrum, and data analysis with pandas.",
        "Coming next: machine learning, LLM APIs and prompt engineering, RAG, AI agents, Docker, Azure and CI/CD.",
        "Built Match Point on my own, and Book Club Library as a Developer in a four-person Scrum team.",
        "Internship (APL) from March to May 2027.",
      ],
    },
    {
      role: "Career break and upskilling",
      org: "Stockholm, Sweden",
      period: "Jan 2025 — Aug 2026",
      points: [
        "Earned the UiPath Automation Developer Associate certification and built two RPA bots.",
        "Started Python with small tested projects: todo-cli and logicgym, both with pytest.",
      ],
    },
    {
      role: "Senior Product Engineer",
      org: "LTIMindtree · India",
      period: "Apr 2022 — Oct 2024",
      points: [
        "Built client solutions on Fosfor Aspect: labelled training documents, trained custom extraction and classification models, and picked the most accurate one.",
        "Met clients to gather requirements and defined acceptance criteria for tailored AI solutions.",
        "Validated solutions against client accuracy thresholds before deployment, working with developers to reproduce and fix issues.",
        "Served as liaison across 5 cross-functional teams, improving requirement clarity and reducing deployment rework by 40%.",
      ],
    },
    {
      role: "Product Engineer",
      org: "LTIMindtree · India",
      period: "Nov 2020 — Mar 2022",
      points: [
        "Designed and delivered proof-of-concept solutions on real client data.",
        "Ran regression and functional checks on Fosfor Aspect features during POCs.",
        "Documented defects and client feedback for the product team.",
      ],
    },
    {
      role: "Graduate Engineer Trainee",
      org: "LTIMindtree · India",
      period: "Sep 2019 — Oct 2020",
      points: [
        "Tested every new feature and release of Fosfor Aspect: functional, regression and sanity testing.",
        "Validated AI model output, where the same input can give different results.",
        "Wrote test cases and user documentation for product features.",
      ],
    },
    {
      role: "UiPath Certified Professional — Automation Developer Associate",
      org: "UiPath · Valid through Jun 2029",
      period: "Jun 2026",
      points: [],
      link: "https://credentials.uipath.com/ccbfd29c-6932-4c49-8c89-4a836b681235#acc.x4IeuTGY",
      linkLabel: "Verify credential",
    },
    {
      role: "B.Tech, Information Technology",
      org: "Sri Ramakrishna Institute of Technology, Coimbatore",
      period: "2015 — 2019",
      points: [],
    },
  ],

  // ---- Contact ------------------------------------------------
  contact: {
    heading: "Open to Python & AI developer roles",
    body: "I finish my Lexicon training in February 2027 and my internship in May 2027. After that I'm looking for a junior Python or AI developer role in Stockholm or remote. Email is the fastest way to reach me.",
  },
};
