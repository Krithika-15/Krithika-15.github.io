/* ============================================================
   YOUR CONTENT — edit this file and nothing else to update the site.
   Everything on the home page is rendered from this object.
   ============================================================ */

const CONTENT = {
  // ---- Basics -------------------------------------------------
  name: "Krithika Ravichandran",
  role: "Junior Python & AI Developer",
  // The big statement at the top. `highlight` gets the coloured underline.
  headline: {
    before: "Python backends, and AI output ",
    highlight: "you can trust",
    after: ".",
  },
  // Shown after "Hi, I'm <name>, " under the headline.
  tagline:
    "a Python & AI developer in Stockholm. For five years I trained, evaluated and delivered document-AI models at LTIMindtree. Now I build the backends around them.",
  location: "Stockholm, Sweden",
  email: "krithikakrs96@gmail.com",
  // Phone is deliberately left off the public site to avoid scrapers.
  // It's on the resume PDF for anyone who asks.
  resume: "assets/resume.pdf?v=3", // raise the number after replacing the PDF

  // ---- Hero extras ----------------------------------------------
  status: "Open to Python & AI roles from June 2027",
  // The API card beside the headline: a request to "my" API and its JSON reply.
  // Values can be text, a list of text, or true/false.
  apiCard: {
    request: "GET /about",
    status: "200 OK",
    body: {
      name: "Krithika Ravichandran",
      role: "Python & AI Developer",
      based_in: "Stockholm",
      stack: ["Python", "FastAPI", "SQL", "LLMs"],
      built: ["Book Club API", "Match Point"],
      experience: "5 yrs in document AI",
      open_to_work: true,
    },
  },

  // ---- Now ------------------------------------------------------
  now: {
    updated: "November 2026",
    items: [
      "Training full-time at Lexicon: Python, SQL and FastAPI done, machine learning and LLMs next",
      "Getting ready for my APL internship in March 2027",
    ],
  },

  // Set to true once you have written your first real blog post.
  // While false, the Blog link and the Writing section are hidden.
  blog: false,

  // ---- Social links -------------------------------------------
  socials: [
    { label: "GitHub",   url: "https://github.com/Krithika-15",                        icon: "github" },
    { label: "LinkedIn", url: "https://linkedin.com/in/krithika-ravichandran-657050140", icon: "linkedin" },
    { label: "Email",    url: "mailto:krithikakrs96@gmail.com",                        icon: "mail" },
  ],

  // ---- About --------------------------------------------------
  about: [
    "I'm a Python developer in training with a background in AI. For five years at LTIMindtree I worked on Fosfor Aspect, an AI platform that reads unstructured documents: it finds entities, classifies documents and extracts tables. For client use cases I labelled training documents, trained custom models, compared their accuracy and delivered the best one as a proof of concept.",
    "That work showed me how much I enjoy the building side, so I'm now training full-time as a Python & AI developer at Lexicon in Stockholm. So far I've built an OOP booking system on my own and a FastAPI + SQLite REST API in a four-person Scrum team. Next up are machine learning, LLM APIs, RAG, AI agents, Docker and Azure.",
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
        "A 20-endpoint REST API with FastAPI and SQLite that replaces a volunteer library's notebook-based loan tracking. Built by a four-person Scrum team over two sprints: I was a Developer in both sprints and Product Owner in sprint 2.",
      built: [
        "Open Library search and import, with a timeout, 400 for an empty search and 503 when the service is down",
        "Overdue, most-borrowed and never-borrowed report endpoints",
        "API-key protection on the write routes, as one reusable FastAPI dependency",
        "The client's register, login and return menus, in 12 reviewed pull requests",
      ],
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
        "A command-line booking system for a sports centre's tennis and padel courts and yoga classes, built on my own.",
      built: [
        "Court and GroupClass inherit from a shared Resource class",
        "All booking rules in one BookingSystem class, kept apart from the menu",
        "has_booking_at() stops a court and a class at the same hour",
      ],
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
        "A Python to-do CLI with a pytest suite, and a written record of three silent bugs I found in my own code.",
      built: [
        "Marking a missing task now gives an error instead of doing nothing",
        "Fixed duplicate ids after a removal, and done tasks resetting on restart",
        "Each fix pinned by a regression test",
      ],
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
        "LTIMindtree's AI platform for unstructured documents: named entity recognition, classification, object detection and table extraction.",
      built: [
        "Labelled training documents for client use cases such as invoices",
        "Trained custom models on the data science team's base models",
        "Compared accuracy and picked the best model for the POC",
      ],
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
      role: "Career break: relocation and Python retraining",
      org: "Stockholm, Sweden",
      period: "Nov 2024 — Aug 2026",
      points: [
        "Relocated to Stockholm and cared for my young child while retraining for software development.",
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
      period: "Sep 2019 — Sep 2020",
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
    body: "I finish my Lexicon training in February 2027 and my internship in May 2027. After that I'm looking for a Python or AI developer role in Stockholm or remote. Email is the fastest way to reach me.",
  },
};
