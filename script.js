const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const body = document.body;
const page = document.getElementById("page");
const intro = document.getElementById("intro");
const introCard = document.getElementById("introCard");
const qrImage = document.getElementById("qrImage");
const particlesRoot = document.getElementById("particles");
const navToggle = document.getElementById("navToggle");
const downloadResumeBtn = document.getElementById("downloadResumeBtn");

const vaultModal = document.getElementById("vaultModal");
const vaultModalEyebrow = document.getElementById("vaultModalEyebrow");
const vaultModalTitle = document.getElementById("vaultModalTitle");
const vaultModalIntro = document.getElementById("vaultModalIntro");
const vaultModalOverview = document.getElementById("vaultModalOverview");
const vaultModalSectionTitle = document.getElementById("vaultModalSectionTitle");
const vaultModalDetails = document.getElementById("vaultModalDetails");
const vaultPdfBlock = document.getElementById("vaultPdfBlock");
const vaultPdfFrame = document.getElementById("vaultPdfFrame");
const vaultModalMeta = document.getElementById("vaultModalMeta");
const vaultModalActions = document.getElementById("vaultModalActions");

const skillCategories = [
  {
    title: "Programming",
    subtitle: "Core coding foundations",
    description: "Strong working familiarity with Python, JavaScript, HTML, CSS, and C++ for problem solving and application development.",
    tools: ["Python", "JavaScript", "HTML", "CSS", "C++"],
    level: "Intermediate to advanced",
    relatedProjects: ["Random Password Generator", "Heart Disease Prediction", "BBQ Nation Clone"],
  },
  {
    title: "Data Analytics",
    subtitle: "Analysis and reporting",
    description: "Hands-on experience cleaning, analyzing, and presenting data using spreadsheets and BI workflows.",
    tools: ["Excel", "SQL", "Power BI", "Tableau", "SSMS"],
    level: "Intermediate",
    relatedProjects: ["Queue Modelling (SIH)", "Heart Disease Prediction"],
  },
  {
    title: "Visualization",
    subtitle: "Dashboards and storytelling",
    description: "Building clear visual narratives through dashboards, charts, and structured reporting.",
    tools: ["Power BI", "Tableau", "Excel", "Data Charts"],
    level: "Intermediate",
    relatedProjects: ["Data Analytics Internship", "Queue Modelling (SIH)"],
  },
  {
    title: "AI & Machine Learning",
    subtitle: "Intelligent systems",
    description: "Exploring supervised learning, computer vision, and generative AI for real-world problem solving.",
    tools: ["Machine Learning", "Generative AI", "NumPy", "Pandas", "Computer Vision"],
    level: "Intermediate",
    relatedProjects: ["SignSpeak AI", "VerdantX", "Heart Disease Prediction"],
  },
  {
    title: "Web Development",
    subtitle: "Modern interfaces",
    description: "Building responsive websites with semantic HTML, premium CSS layouts, and vanilla JavaScript interactions.",
    tools: ["HTML", "CSS", "JavaScript"],
    level: "Intermediate",
    relatedProjects: ["BBQ Nation Clone", "Random Password Generator"],
  },
  {
    title: "Mobile Development",
    subtitle: "Cross-platform apps",
    description: "Developing mobile-first experiences with React Native and app-centric UI patterns.",
    tools: ["React Native", "JavaScript"],
    level: "Intermediate",
    relatedProjects: ["Offline AI Wellness Assistant", "SignSpeak AI"],
  },
  {
    title: "Database",
    subtitle: "Structured data systems",
    description: "Working with relational database design, SQL queries, and data retrieval workflows.",
    tools: ["MySQL", "PostgreSQL", "SSMS", "SQL"],
    level: "Intermediate",
    relatedProjects: ["Heart Disease Prediction", "Data Analytics Internship"],
  },
  {
    title: "Computer Vision",
    subtitle: "Image intelligence",
    description: "Applying image processing and vision-based pipelines to translate visual input into useful outcomes.",
    tools: ["Computer Vision", "Image Processing", "OpenCV concepts"],
    level: "Exploring",
    relatedProjects: ["SignSpeak AI", "VerdantX"],
  },
  {
    title: "Professional Skills",
    subtitle: "Collaboration and execution",
    description: "Strong problem solving, communication, teamwork, and project management habits developed through academic and internship work.",
    tools: ["Problem Solving", "Team Collaboration", "Communication", "Project Management"],
    level: "Strong",
    relatedProjects: ["All projects and internships"],
  },
];

const projectData = [
  {
    title: "SignSpeak AI",
    subtitle: "Offline Indian Sign Language to Text and Voice Translation System",
    overview: "An AI-powered website and mobile application that converts Indian Sign Language into text and speech using computer vision and React Native.",
    problemStatement: "Improve accessibility for hearing and speech-impaired users with an offline-friendly translation workflow.",
    features: [
      "Sign gesture detection and translation",
      "Text and speech output pipeline",
      "Offline-ready interaction model",
      "Web and mobile interface",
    ],
    techStack: ["Computer Vision", "React Native", "JavaScript", "AI"],
    screenshots: ["Camera Flow", "Translation Output", "Mobile View"],
    challenges: "Balancing recognition reliability with a lightweight and responsive interface.",
    github: "",
    live: "",
    tags: ["Computer Vision", "React Native", "Accessibility"],
  },
  {
    title: "Offline AI Wellness Assistant",
    subtitle: "Chatbot and gamified wellness experience",
    overview: "An offline AI assistant with chatbot, voice commands, MindGarden therapy game, and Stress Eater Snake game.",
    problemStatement: "Create a supportive wellness experience that still feels engaging without depending on always-on internet access.",
    features: [
      "Voice-enabled assistant",
      "Offline chatbot experience",
      "Therapy-inspired mini game",
      "Stress relief game mechanics",
    ],
    techStack: ["React Native", "JavaScript", "Voice UI", "Offline AI"],
    screenshots: ["Assistant UI", "MindGarden", "Snake Game"],
    challenges: "Designing a calm, usable interface with multiple interaction modes.",
    github: "",
    live: "",
    tags: ["Offline AI", "Voice Commands", "Wellness"],
  },
  {
    title: "VerdantX",
    subtitle: "AI Based Smart Plant Health Monitoring System",
    overview: "A plant monitoring system using machine learning, image analysis, and sensor data to help identify plant health issues.",
    problemStatement: "Provide early plant health insights through a smart, AI-assisted monitoring layer.",
    features: [
      "Plant image analysis",
      "Sensor data interpretation",
      "Health monitoring insights",
      "Decision-support output",
    ],
    techStack: ["Machine Learning", "Image Processing", "Data Analytics"],
    screenshots: ["Plant Scan", "Health Result", "Dashboard"],
    challenges: "Combining image and sensor signals into a useful summary.",
    github: "",
    live: "",
    tags: ["Machine Learning", "IoT", "Plant Health"],
  },
  {
    title: "Random Password Generator",
    subtitle: "Secure password generation web application",
    overview: "A secure password generation web app for quickly creating strong passwords.",
    problemStatement: "Help users generate safe credentials with minimal friction.",
    features: ["Custom password length", "Instant generation", "Simple UI"],
    techStack: ["HTML", "CSS", "JavaScript"],
    screenshots: ["Generator UI", "Password Output"],
    challenges: "Keeping the interface compact while still feeling polished.",
    github: "https://github.com/MukeshK18012006/random_password_generator",
    live: "https://mukeshk18012006.github.io/random_password_generator/",
    tags: ["Security", "Utility", "Web App"],
  },
  {
    title: "Heart Disease Prediction",
    subtitle: "Machine learning risk prediction project",
    overview: "A machine learning project that predicts heart disease risk from patient data.",
    problemStatement: "Use health data to provide a predictive risk indicator for early awareness.",
    features: ["Prediction workflow", "Structured input", "Risk output"],
    techStack: ["Machine Learning", "Python", "Data Analysis"],
    screenshots: ["Input Form", "Prediction Result"],
    challenges: "Building a clean flow for model-driven feedback.",
    github: "https://github.com/MukeshK18012006/heart_disease_prediction",
    live: "https://mukeshk18012006.github.io/heart_disease_prediction/",
    tags: ["ML", "Prediction", "Healthcare"],
  },
  {
    title: "Queue Modelling (SIH)",
    subtitle: "Research and analytics project",
    overview: "Queue modelling research and analytics work focused on flow analysis and optimization concepts.",
    problemStatement: "Understand queue patterns and derive practical operational insights.",
    features: ["Flow analysis", "Research-driven insights", "Optimization thinking"],
    techStack: ["Analytics", "Research", "Excel"],
    screenshots: ["Queue Map", "Analysis View"],
    challenges: "Translating theoretical modelling into actionable results.",
    github: "",
    live: "",
    tags: ["Research", "Analytics", "SIH"],
  },
  {
    title: "Tech Trek Hackathon App Development",
    subtitle: "Hackathon-focused mobile application development",
    overview: "A hackathon participation project centered on mobile application development and rapid problem solving.",
    problemStatement: "Design a functional mobile solution under hackathon constraints.",
    features: ["Hackathon prototyping", "App workflow design", "Team execution"],
    techStack: ["React Native", "JavaScript"],
    screenshots: ["Hackathon Build", "App Flow"],
    challenges: "Making progress quickly while keeping the app coherent.",
    github: "",
    live: "",
    tags: ["Hackathon", "Mobile App", "Teamwork"],
  },
  {
    title: "BBQ Nation Clone Website",
    subtitle: "Responsive clone inspired by BBQ Nation",
    overview: "A responsive front-end clone inspired by BBQ Nation, focused on layout fidelity and polished interaction.",
    problemStatement: "Recreate a premium restaurant-style browsing experience with responsive behavior.",
    features: ["Responsive layout", "Menu-inspired sections", "Polished UI"],
    techStack: ["HTML", "CSS", "JavaScript"],
    screenshots: ["Landing Page", "Menu Grid", "Mobile View"],
    challenges: "Preserving visual balance across desktop and mobile breakpoints.",
    github: "",
    live: "",
    tags: ["Clone", "Responsive", "Frontend"],
  },
];

const certificationData = [
  {
    title: "Career Essentials in Generative AI",
    org: "Microsoft & LinkedIn Learning",
    logo: "MS",
    badge: "Completed",
    overview: "A foundational certification covering practical generative AI concepts and workflows.",
    skills: ["Generative AI", "Prompt Thinking", "Responsible AI"],
    description: "Completed with an emphasis on modern AI productivity and application awareness.",
    pdf: "public/certificates/GEN_AI.pdf",
  },
  {
    title: "Hugging Face Projects Course",
    org: "Simplilearn SkillUp",
    logo: "HF",
    badge: "Completed",
    overview: "Project-oriented learning around Hugging Face tools and applied AI workflows.",
    skills: ["NLP", "Model Usage", "AI Projects"],
    description: "Completed with hands-on exposure to AI project building patterns.",
    pdf: "public/certificates/HUGGING_FACE.pdf",
  },
  {
    title: "Explore Generative AI with Copilot in Bing",
    org: "Microsoft",
    logo: "MI",
    badge: "Completed",
    overview: "Introduction to copilots and generative AI-assisted search experiences.",
    skills: ["Copilot", "Gen AI", "Productivity"],
    description: "Focused on practical use of generative assistance in browsing and discovery.",
    pdf: "public/certificates/COPILOT.pdf",
  },
  {
    title: "IBM Artificial Intelligence Fundamentals",
    org: "IBM",
    logo: "IBM",
    badge: "Completed",
    overview: "Core artificial intelligence fundamentals with an applied learning structure.",
    skills: ["AI Foundations", "Machine Learning", "Concepts"],
    description: "Built a strong base for AI vocabulary and problem framing.",
    pdf: "public/certificates/IBM_AI.pdf",
  },
  {
    title: "IBM Cybersecurity Fundamentals",
    org: "IBM",
    logo: "IBM",
    badge: "Completed",
    overview: "Cybersecurity learning for understanding security principles and risk awareness.",
    skills: ["Security Basics", "Risk Awareness", "Digital Safety"],
    description: "Introduced the mindset required for secure digital systems.",
    pdf: "public/certificates/IBM_CYBER.pdf",
  },
  {
    title: "IBM Data Fundamentals",
    org: "IBM",
    logo: "IBM",
    badge: "Completed",
    overview: "Data fundamentals covering the lifecycle and practical value of data systems.",
    skills: ["Data Concepts", "Analytics Thinking", "Data Lifecycle"],
    description: "Reinforced the importance of structured data work.",
    pdf: "public/certificates/IBM_DATA.pdf",
  },
  {
    title: "Process Mining Rising Star",
    org: "Celonis Academy",
    logo: "CE",
    badge: "Completed",
    overview: "A certification recognizing process mining learning and analytical thinking.",
    skills: ["Process Mining", "Workflow Analysis", "Insight Generation"],
    description: "Learned how process-centric analysis can improve decision making.",
    pdf: "public/certificates/CELONIS.pdf",
  },
  {
    title: "Introduction to MongoDB, AI and Vector Search",
    org: "MongoDB",
    logo: "MO",
    badge: "Completed",
    overview: "Learning on modern data search patterns and vector-based retrieval concepts.",
    skills: ["MongoDB", "Vector Search", "AI Data Systems"],
    description: "Expanded understanding of AI-adjacent search and data architecture.",
    pdf: "public/certificates/MONGODB.pdf",
  },
  {
    title: "LetsUpgrade Bootcamps",
    org: "LetsUpgrade",
    logo: "LU",
    badge: "Completed",
    overview: "Bootcamp-style certifications in programming and data science topics.",
    skills: ["Python", "JavaScript", "SQL", "Data Science"],
    description: "Practical bootcamp exposure across several foundational technologies.",
    pdf: "public/certificates/LETSUPGRADE.pdf",
  },
  {
    title: "AWS Workshop Certification",
    org: "AWS",
    logo: "AW",
    badge: "Completed",
    overview: "Workshop exposure to cloud concepts and modern infrastructure learning.",
    skills: ["Cloud Basics", "Infrastructure", "Workshop Learning"],
    description: "Introductory workshop experience for cloud awareness.",
    pdf: "public/certificates/AWS.pdf",
  },
  {
    title: "Codex Event Exotica 2K24",
    org: "Exotica 2K24",
    logo: "CX",
    badge: "Completed",
    overview: "Event participation certificate recognizing involvement in the Codex event.",
    skills: ["Event Participation", "Learning", "Community"],
    description: "Recognition for active participation in a technical event setting.",
    pdf: "public/certificates/CODEX.pdf",
  },
];

const internshipData = [
  {
    role: "Data Analytics Intern",
    company: "Code Core Global Hitech Solutions",
    duration: "6 Months",
    responsibilities: [
      "Built dashboard and reporting workflows",
      "Worked on data preparation and analysis",
      "Supported business intelligence tasks",
    ],
    technologies: ["Power BI", "SQL (SSMS)", "Tableau", "Dashboard Development"],
    learnings: ["Data storytelling", "Dashboard design", "Query-based analysis"],
    contributions: ["Analytics reporting", "Visualization support"],
    pdf: "public/internships/CC.pdf",
  },
  {
    role: "Full Stack Development Intern",
    company: "Tech Volt",
    duration: "30 Days",
    responsibilities: [
      "Learned full stack development workflows",
      "Contributed to interface and application tasks",
    ],
    technologies: ["Web Development", "JavaScript"],
    learnings: ["Full stack workflow", "UI implementation"],
    contributions: ["Development support"],
    pdf: "public/internships/TECHVOLT.pdf",
  },
  {
    role: "Cyber Security Intern",
    company: "Adhoc Softwares",
    duration: "30 Days",
    responsibilities: [
      "Studied foundational security concepts",
      "Observed common attack and defense patterns",
    ],
    technologies: ["Cybersecurity Basics"],
    learnings: ["Security awareness", "Risk thinking"],
    contributions: ["Learning-focused internship"],
    pdf: "public/internships/ADHOC.pdf",
  },
  {
    role: "Data Analytics Intern",
    company: "Tamizhan Skills (TRSE Internship Program)",
    duration: "1 Month",
    responsibilities: [
      "Worked on introductory analytics tasks",
      "Practiced reporting and insight building",
    ],
    technologies: ["Analytics", "Reporting"],
    learnings: ["Practical analysis", "Documentation"],
    contributions: ["Analytics exercises"],
    pdf: "public/internships/TRSE.pdf",
  },
];

const achievementsData = [
  "SignSpeak AI Project",
  "VerdantX Project",
  "SIH Participation",
  "Tech Trek Hackathon Participation",
  "Multiple Industry Certifications",
  "Internship Experience",
];

const languagesData = [
  { language: "English", level: "Professional working proficiency" },
  { language: "Tamil", level: "Native proficiency" },
];

function createParticles() {
  const count = prefersReducedMotion ? 10 : 28;
  for (let i = 0; i < count; i += 1) {
    const particle = document.createElement("span");
    particle.className = "particle";
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${100 + Math.random() * 50}%`;
    particle.style.opacity = `${0.18 + Math.random() * 0.2}`;
    particle.style.width = `${3 + Math.random() * 6}px`;
    particle.style.height = particle.style.width;
    particle.style.animationDuration = `${14 + Math.random() * 18}s`;
    particle.style.animationDelay = `${Math.random() * 12}s`;
    particlesRoot.appendChild(particle);
  }
}

function createChipList(items) {
  return items.map((item) => `<span class="chip">${item}</span>`).join("");
}

function renderSkills() {
  const grid = document.getElementById("skillsGrid");
  grid.innerHTML = skillCategories.map((item, index) => `
    <article class="skill-card glass" tabindex="0" role="button" aria-expanded="false" data-kind="skill" data-index="${index}">
      <div class="skill-card__head">
        <h3>${item.title}</h3>
        <span class="vault-card__badge">Open</span>
      </div>
      <div class="skill-card__body">
        <p>${item.subtitle}</p>
        <div class="skill-card__details">
          <p>${item.description}</p>
        </div>
      </div>
    </article>
  `).join("");
}

function renderProjects() {
  const grid = document.getElementById("projectGrid");
  grid.innerHTML = projectData.map((project, index) => `
    <article class="project-card glass" tabindex="0" role="button" data-kind="project" data-index="${index}" aria-label="Open details for ${project.title}">
      <div class="project-card__head">
        <span class="project-card__index">${String(index + 1).padStart(2, "0")}</span>
        <span class="eyebrow">Project</span>
      </div>
      <h3>${project.title}</h3>
      <p>${project.subtitle}</p>
      <div class="project-card__chips">
        ${createChipList(project.tags)}
      </div>
      <div class="project-card__footer">
        <span>Click to explore</span>
        <span>Open modal</span>
      </div>
    </article>
  `).join("");
}

function renderCertificates() {
  const grid = document.getElementById("certAccordion");
  grid.innerHTML = certificationData.map((item, index) => `
    <article class="vault-card glass" tabindex="0" role="button" data-kind="certification" data-index="${index}" aria-label="Open certificate ${item.title}">
      <div class="vault-card__head">
        <div class="vault-card__logo" aria-hidden="true">${item.logo}</div>
        <span class="vault-card__badge">${item.badge}</span>
      </div>
      <div class="vault-card__body">
        <h3>${item.title}</h3>
        <small>${item.org}</small>
      </div>
      <div class="vault-card__footer">
        <span class="eyebrow">${item.org}</span>
      </div>
    </article>
  `).join("");
}

function renderInternships() {
  const grid = document.getElementById("internAccordion");
  grid.innerHTML = internshipData.map((item, index) => `
    <article class="vault-card glass" tabindex="0" role="button" data-kind="internship" data-index="${index}" aria-label="Open internship ${item.role}">
      <div class="vault-card__head">
        <div class="vault-card__logo" aria-hidden="true">IN</div>
        <span class="vault-card__badge">${item.duration}</span>
      </div>
      <div class="vault-card__body">
        <h3>${item.role}</h3>
        <small>${item.company}</small>
      </div>
      <div class="vault-card__footer">
        <span class="eyebrow">Experience</span>
      </div>
    </article>
  `).join("");
}

function renderAchievements() {
  const container = document.getElementById("achievementsTimeline");
  container.innerHTML = achievementsData.map((item, index) => `
    <article class="achievement-card glass">
      <span class="eyebrow">0${index + 1}</span>
      <h3>${item}</h3>
    </article>
  `).join("");
}

function renderLanguages() {
  const container = document.getElementById("languageGrid");
  container.innerHTML = languagesData.map((item) => `
    <article class="language-card glass">
      <span class="eyebrow">Language</span>
      <h3>${item.language}</h3>
      <p>${item.level}</p>
    </article>
  `).join("");
}

function setupRevealObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.16 });

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

function setupSkillCards() {
  document.querySelectorAll(".skill-card").forEach((card) => {
    const toggle = () => {
      const isOpen = card.classList.toggle("is-open");
      card.setAttribute("aria-expanded", String(isOpen));
    };
    card.addEventListener("click", toggle);
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggle();
      }
    });
  });
}

function openVaultModal(kind, item) {
  vaultModal.classList.add("is-open");
  vaultModal.setAttribute("aria-hidden", "false");
  vaultModalEyebrow.textContent = kind.charAt(0).toUpperCase() + kind.slice(1);

  const actionButtons = [];
  let pdfUrl = "";
  let showPdf = false;

  if (kind === "skill") {
    vaultModalTitle.textContent = item.title;
    vaultModalIntro.textContent = item.subtitle;
    vaultModalOverview.textContent = item.description;
    vaultModalSectionTitle.textContent = "Tools Used";
    vaultModalDetails.innerHTML = `
      <div class="vault-grid">
        <p><strong>Experience level:</strong> ${item.level}</p>
        <p><strong>Related projects:</strong> ${item.relatedProjects.join(", ")}</p>
        <div>
          <strong>Tools</strong>
          <div class="vault-badges">${createChipList(item.tools)}</div>
        </div>
      </div>
    `;
    vaultModalMeta.innerHTML = createChipList([item.level, "Skill category"]);
  }

  if (kind === "project") {
    vaultModalTitle.textContent = item.title;
    vaultModalIntro.textContent = item.subtitle;
    vaultModalOverview.textContent = item.overview;
    vaultModalSectionTitle.textContent = "Project Details";
    vaultModalDetails.innerHTML = `
      <div class="vault-grid">
        <p><strong>Problem statement:</strong> ${item.problemStatement}</p>
        <div>
          <strong>Features</strong>
          <div class="vault-badges">${createChipList(item.features)}</div>
        </div>
        <div>
          <strong>Technology stack</strong>
          <div class="vault-badges">${createChipList(item.techStack)}</div>
        </div>
        <div>
          <strong>Screenshots</strong>
          <div class="vault-screens">
            ${item.screenshots.map((shot) => `<div class="vault-shot">${shot}</div>`).join("")}
          </div>
        </div>
        <p><strong>Challenges solved:</strong> ${item.challenges}</p>
      </div>
    `;
    vaultModalMeta.innerHTML = createChipList(item.tags);
    actionButtons.push(item.github
      ? `<a class="btn btn--ghost" href="${item.github}" target="_blank" rel="noopener noreferrer">Github Repository</a>`
      : `<span class="btn btn--ghost is-disabled" aria-disabled="true">Github Repository Coming Soon</span>`);
    actionButtons.push(item.live
      ? `<a class="btn btn--ghost" href="${item.live}" target="_blank" rel="noopener noreferrer">Live Website Link</a>`
      : `<span class="btn btn--ghost is-disabled" aria-disabled="true">Live Website Coming Soon</span>`);
    vaultPdfBlock.style.display = "none";
  }

  if (kind === "certification") {
    vaultModalTitle.textContent = item.title;
    vaultModalIntro.textContent = item.org;
    vaultModalOverview.textContent = item.overview;
    vaultModalSectionTitle.textContent = "Skills Learned";
    vaultModalDetails.innerHTML = `
      <div class="vault-grid">
        <p><strong>Issuing organization:</strong> ${item.org}</p>
        <p><strong>Certificate description:</strong> ${item.description}</p>
        <div>
          <strong>Skills learned</strong>
          <div class="vault-badges">${createChipList(item.skills)}</div>
        </div>
      </div>
    `;
    vaultModalMeta.innerHTML = createChipList([item.badge, item.logo]);
    pdfUrl = item.pdf;
    showPdf = true;
    actionButtons.push(`<a class="btn btn--ghost" href="${pdfUrl}" download>Download Certificate</a>`);
    actionButtons.push(`<a class="btn btn--ghost" href="${pdfUrl}" target="_blank" rel="noopener noreferrer">Full Screen Preview</a>`);
  }

  if (kind === "internship") {
    vaultModalTitle.textContent = item.role;
    vaultModalIntro.textContent = item.company;
    vaultModalOverview.textContent = `Duration: ${item.duration}`;
    vaultModalSectionTitle.textContent = "Responsibilities";
    vaultModalDetails.innerHTML = `
      <div class="vault-grid">
        <p><strong>Role:</strong> ${item.role}</p>
        <p><strong>Company:</strong> ${item.company}</p>
        <p><strong>Duration:</strong> ${item.duration}</p>
        <div>
          <strong>Responsibilities</strong>
          <div class="vault-badges">${createChipList(item.responsibilities)}</div>
        </div>
        <div>
          <strong>Technologies used</strong>
          <div class="vault-badges">${createChipList(item.technologies)}</div>
        </div>
        <div>
          <strong>Key learnings</strong>
          <div class="vault-badges">${createChipList(item.learnings)}</div>
        </div>
        <div>
          <strong>Project contributions</strong>
          <div class="vault-badges">${createChipList(item.contributions)}</div>
        </div>
      </div>
    `;
    vaultModalMeta.innerHTML = createChipList([item.duration, "Internship"]);
    pdfUrl = item.pdf;
    showPdf = true;
    actionButtons.push(`<a class="btn btn--ghost" href="${pdfUrl}" download>Download PDF</a>`);
    actionButtons.push(`<a class="btn btn--ghost" href="${pdfUrl}" target="_blank" rel="noopener noreferrer">Full Screen Preview</a>`);
  }

  vaultPdfBlock.style.display = showPdf ? "block" : "none";
  vaultPdfFrame.src = showPdf ? pdfUrl : "";
  vaultModalActions.innerHTML = actionButtons.join("");
}

function closeVaultModal() {
  vaultModal.classList.remove("is-open");
  vaultModal.setAttribute("aria-hidden", "true");
  vaultPdfFrame.src = "";
}

function setupVaultBehavior() {
  document.querySelectorAll("[data-kind]").forEach((card) => {
    const open = () => {
      const kind = card.dataset.kind;
      const index = Number(card.dataset.index);
      let item = null;

      if (kind === "skill") item = skillCategories[index];
      if (kind === "project") item = projectData[index];
      if (kind === "certification") item = certificationData[index];
      if (kind === "internship") item = internshipData[index];
      if (!item) return;
      openVaultModal(kind, item);
    };

    card.addEventListener("click", open);
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        open();
      }
    });
  });

  vaultModal.addEventListener("click", (event) => {
    if (event.target.matches("[data-close-modal]")) {
      closeVaultModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && vaultModal.classList.contains("is-open")) {
      closeVaultModal();
    }
  });
}

function setupMobileNav() {
  navToggle.addEventListener("click", () => {
    const isOpen = body.classList.toggle("is-mobile-nav-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  document.querySelectorAll(".nav a").forEach((link) => {
    link.addEventListener("click", () => {
      body.classList.remove("is-mobile-nav-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

function downloadResume() {
  const resumeHtml = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Mukesh K Resume</title>
    <style>
      body { font-family: Arial, sans-serif; margin: 40px; color: #111; line-height: 1.6; }
      h1, h2 { margin-bottom: 8px; }
      .muted { color: #555; }
      .section { margin-top: 24px; }
      a { color: inherit; }
    </style>
  </head>
  <body>
    <h1>Mukesh K</h1>
    <p class="muted">Artificial Intelligence & Data Science Student | Data Analyst | AI Enthusiast | Machine Learning Explorer</p>
    <p>Mail: mukesh4718012006@gmail.com | Phone: 6383955078</p>
    <div class="section">
      <h2>Summary</h2>
      <p>B.Tech student in Artificial Intelligence and Data Science at PPG Institute of Technology, Coimbatore, passionate about data analysis, machine learning, and efficient algorithms.</p>
    </div>
    <div class="section">
      <h2>Skills</h2>
      <p>Python, SQL, JavaScript, Pandas, NumPy, Excel, Power BI, Tableau, Machine Learning, Generative AI, HTML, CSS, React Native, MySQL, PostgreSQL, SSMS, Computer Vision, Image Processing, Problem Solving, Team Collaboration, Communication, Project Management.</p>
    </div>
    <div class="section">
      <h2>Education</h2>
      <p>PPG Institute of Technology, Anna University - B.Tech AI & Data Science (2023 - 2027), CGPA 7.47</p>
      <p>Hindusthan Matric Higher Secondary School - HSC, 66.6%</p>
    </div>
  </body>
  </html>`;

  const blob = new Blob([resumeHtml], { type: "text/html;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "Mukesh_K_Resume.html";
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function startIntroSequence() {
  body.classList.add("loading");

  if (qrImage) {
    qrImage.src = "qr.png";
    qrImage.onerror = () => {
      qrImage.onerror = null;
      qrImage.src = "qr.png";
    };
    qrImage.onload = () => {
      qrImage.style.opacity = "1";
    };
  }

  if (prefersReducedMotion) {
    intro.classList.add("is-hidden");
    body.classList.remove("loading");
    body.classList.add("loaded");
    page.setAttribute("aria-hidden", "false");
    return;
  }

  setTimeout(() => {
    intro.classList.add("is-card");
    introCard.classList.add("is-visible");
  }, 3000);

  setTimeout(() => {
    intro.classList.add("is-reveal");
    body.classList.add("loaded");
    page.setAttribute("aria-hidden", "false");
  }, 5000);

  setTimeout(() => {
    intro.classList.add("is-hidden");
    body.classList.remove("loading");
  }, 6000);
}

function init() {
  createParticles();
  renderSkills();
  renderProjects();
  renderCertificates();
  renderInternships();
  renderAchievements();
  renderLanguages();
  setupRevealObserver();
  setupSkillCards();
  setupVaultBehavior();
  setupMobileNav();
  downloadResumeBtn.addEventListener("click", downloadResume);
  startIntroSequence();
}

document.addEventListener("DOMContentLoaded", init);
