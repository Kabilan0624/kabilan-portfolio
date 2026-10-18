/**
 * Kabilan's Portfolio - Master Content File (Single Source of Truth)
 * 
 * Edit this file anytime you want to change:
 * - Bio, headlines, social links, or resume
 * - The 6 Services / Areas of Expertise
 * - Skills categories & items
 * - Projects, feature bullets, technologies, or screenshots
 * - Experience milestones or contact info
 */

export const portfolioContent = {
  // Brand & Navigation
  brand: {
    name: "Kabilan",
    domain: "Kabilan.dev",
    logoPath: "/images/branding/logo.svg",
  },

  navigation: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Expertise", href: "#expertise" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],

  // Personal Info & Hero Section
  personal: {
    name: "Kabilan R",
    eyebrow: "FLUTTER DEVELOPER",
    headlineLine1: "Hi, I'm Kabilan R.",
    headlineLine2: "I Build Mobile Apps with Flutter.",
    intro: "Motivated Flutter Developer who enjoys building clean, responsive mobile apps with solid architecture and smooth user experiences. Experienced with REST APIs, state management, local storage, and UI performance optimization to create reliable and user-friendly applications.",
    primaryCta: "Explore My Work",
    secondaryCta: "Get In Touch",
    
    // Official Profile Image (Sole photo with Figma background circle)
    profileImage: "/images/profile/kabilan-circle-portrait.png",
    profileCutout: "/images/profile/kabilan-cutout.png",
    profileImageAlt: "Kabilan R - Flutter Developer",
    
    // Social & Professional Links from Resume
    email: "kabilanr244@gmail.com",
    phone: "+91 6383828085",
    github: "https://github.com/Kabilan0624",
    linkedin: "https://www.linkedin.com/in/kabilan-r-91432b268",
    location: "Tirupur, Tamil Nadu, India - 641605",
    resumeUrl: "/docs/kabilan-resume.pdf",
    hasRealResume: true,
  },

  // "What I Build" (Mobile Engineering Services) - Exactly matching Figma reference
  whatIBuild: {
    heading: "What I Build",
    subtitle: "Mobile engineering with Flutter, from interface to backend.",
    cards: [
      {
        id: "flutter-ui",
        title: "Flutter UI Development",
        description: "Reusable screens and widgets that stay consistent and responsive across phones and tablets.",
        icon: "Smartphone",
        isCore: true,
        tags: ["Reusable widgets", "Responsive layouts", "Material 3"],
        span: "lg:col-span-7", // Asymmetric row 1
      },
      {
        id: "api-integration",
        title: "REST API Integration",
        description: "Connecting screens to backend APIs with clean parsing and friendly error states.",
        icon: "Network",
        tags: ["Dio / http", "JSON models", "Error handling"],
        span: "lg:col-span-5", // Asymmetric row 1
      },
      {
        id: "state-management",
        title: "State Management",
        description: "Predictable app state with Riverpod, plus Provider and BLoC where a project needs them.",
        icon: "Layers",
        tags: ["Riverpod", "Provider", "BLoC basics"],
        span: "lg:col-span-5", // Asymmetric row 2
      },
      {
        id: "pagination-search",
        title: "Pagination & Search",
        description: "Fast lists that load in pages, with search and filters that respond as you type.",
        icon: "Search",
        tags: ["Infinite scroll", "Debounced search", "Filters"],
        span: "lg:col-span-7", // Asymmetric row 2
      },
      {
        id: "firebase",
        title: "Firebase Integration",
        description: "Real-time sync, cloud databases, and push notification services that power modern mobile features.",
        icon: "Flame",
        tags: ["Firestore", "Cloud Messaging", "Firebase Auth"],
        span: "lg:col-span-6",
      },
      {
        id: "chat-media",
        title: "Chat, Media & Notifications",
        description: "Developing chat-related features, vertical media experiences, and push or local notification functionality.",
        icon: "MessageSquare",
        tags: ["Realtime chat", "Video reels", "Local notifications"],
        span: "lg:col-span-6",
      },
    ],
  },

  // About Me Section
  about: {
    heading: "About Me",
    eyebrow: "BACKGROUND & PHILOSOPHY",
    copy: "I'm a Flutter Developer and B.Tech graduate in Artificial Intelligence & Data Science from Jai Shriram Engineering College. Currently developing cross-platform mobile apps as a Flutter Mobile Developer Intern at Skyraan Technologies, I focus on responsive UI development, clean architecture, REST API integration, and predictable state management. With a strong engineering foundation across mobile architecture and machine learning models, I build reliable, production-ready applications with smooth user experiences.",
    highlights: [
      "Specialized in cross-platform mobile architecture with Flutter & Dart",
      "Hands-on experience with diverse state management patterns (Riverpod, StreamBuilder, GetX, Provider)",
      "Engineered real-time chat, Text-to-Speech audio players, and vertical video reels",
      "B.Tech in Artificial Intelligence & Data Science (CGPA: 8.37) with ML modeling experience",
    ],
  },

  // Technical Skills - Exactly matching Figma reference with 3-dot ratings and categories
  technicalSkills: {
    heading: "Technical Skills",
    subtitle: "Grouped by what I use most, strongest first",
    caption: "",
    categories: [
      {
        name: "Programming Languages",
        description: "Languages I build apps and models with",
        icon: "Code",
        isPrimary: true,
        skills: [
          { name: "Dart", level: 3 }, // 3 = Strong
          { name: "Python", level: 3 },
          { name: "C", level: 2 },    // 2 = Working
        ],
      },
      {
        name: "UI / State Management",
        description: "Flutter state and reactive UI patterns",
        icon: "Layers",
        isPrimary: true,
        skills: [
          { name: "Riverpod", level: 3 },
          { name: "Provider", level: 3 },
          { name: "StreamBuilder", level: 3 },
          { name: "GetX", level: 2 },
          { name: "BLoC", level: 1 }, // 1 = Learning
        ],
      },
      {
        name: "Machine Learning",
        description: "Data science and computer vision toolkit",
        icon: "Cpu",
        isPrimary: true,
        skills: [
          { name: "NumPy", level: 3 },
          { name: "Pandas", level: 3 },
          { name: "Scikit-learn", level: 2 },
          { name: "OpenCV", level: 2 },
          { name: "Algorithms", level: 2 },
        ],
      },
      {
        name: "Databases / Storage",
        description: "Local and cloud data persistence",
        icon: "Database",
        isPrimary: false,
        skills: [
          { name: "SQLite", level: 3 },
          { name: "SQL", level: 3 },
          { name: "Firebase Firestore", level: 2 },
        ],
      },
      {
        name: "Developer Tools / IDEs",
        description: "Daily editors and version control",
        icon: "Wrench",
        isPrimary: false,
        skills: [
          { name: "Android Studio", level: 3 },
          { name: "VS Code", level: 3 },
          { name: "Git", level: 2 },
        ],
      },
      {
        name: "Analytical Tools",
        description: "Reporting and data exploration",
        icon: "BarChart3",
        isPrimary: false,
        skills: [
          { name: "Excel", level: 3 },
          { name: "Power BI", level: 2 },
        ],
      },
    ],
  },

  // All 7 Projects with Genuine Feature Contributions
  projects: [
    {
      id: "disease-dictionary",
      title: "Disease Dictionary",
      category: "Healthcare & Education",
      badge: "Educational Mobile App",
      overview: "An educational medical application for browsing disease information and related learning content.",
      myContributions: [
        "Disease categories, search, and filtering interfaces",
        "Educational video content with vertical reels-style scrolling",
        "Text-to-speech audio playback and speed controls",
        "Bookmark functionality for saved diseases, videos, or personal notes",
      ],
      technologies: ["StreamBuilder", "REST API", "Flutter", "Dart"],
      screenshots: [
        { url: "/screenshots/disease-dictionary/01-medical-trivia-home.png", title: "Daily Health Trivia & Categories" },
        { url: "/screenshots/disease-dictionary/02-fast-search-videos.png", title: "Dual-Tab Search & Videos" },
        { url: "/screenshots/disease-dictionary/03-disease-categories.png", title: "3D Visual Medical Categories" },
        { url: "/screenshots/disease-dictionary/04-disease-details-tts.png", title: "Disease Details & TTS Trigger" },
        { url: "/screenshots/disease-dictionary/05-tts-audio-sheet.png", title: "Interactive TTS Audio Player" },
        { url: "/screenshots/disease-dictionary/06-medical-reels-player.png", title: "Medical Video Reels Player" },
        { url: "/screenshots/disease-dictionary/07-bookmarks-notes.png", title: "Bookmarks & Personal Notes" },
      ],
    },
    {
      id: "agri-machinery",
      title: "Agriculture Machinery App",
      category: "Agriculture & Education",
      badge: "Equipment Encyclopedia",
      overview: "A machinery information and learning application for exploring equipment categories and specifications.",
      myContributions: [
        "Machinery categories and equipment details",
        "Equipment specification screens",
        "Text-to-speech playback controls",
        "Vertical video browsing",
        "Bookmark / favourites features",
      ],
      technologies: ["Riverpod", "REST API", "Flutter", "Dart"],
      screenshots: [
        { url: "/screenshots/agri-machinery/01-home-hub.png", title: "Machinery Hub & Dynamic Island" },
        { url: "/screenshots/agri-machinery/02-categories.png", title: "Equipment Purpose Categories" },
        { url: "/screenshots/agri-machinery/03-machine-detail-tts.png", title: "Machine Specs & TTS Trigger" },
        { url: "/screenshots/agri-machinery/04-tts-audio-player.png", title: "Synchronized TTS Audio Player" },
        { url: "/screenshots/agri-machinery/05-video-reels-bookmarks.png", title: "Bookmarked Video Reels" },
        { url: "/screenshots/agri-machinery/06-machinery-favourites.png", title: "Favorites & Bookmark Management" },
        { url: "/screenshots/agri-machinery/07-related-types.png", title: "Implement Types & Categories" },
      ],
    },
    {
      id: "teachraan",
      title: "Teachraan — School ERP & Classroom Management",
      category: "Education & Administration",
      badge: "School Management Platform",
      overview: "A school-focused application supporting teacher and student workflows, classroom management, and academic activities.",
      myContributions: [
        "Teacher/student role selection and onboarding flow",
        "Classroom chat and unread-message indicators",
        "Attendance marking interface",
        "Class management and student onboarding",
        "Quizzes, assignments, study materials, and notifications",
      ],
      technologies: ["Riverpod", "Firebase Firestore", "Firebase Realtime DB", "Flutter"],
      screenshots: [
        { url: "/screenshots/teachraan/01-role-selection.png", title: "Dual-Role Onboarding (Teacher / Student)" },
        { url: "/screenshots/teachraan/02-teacher-dashboard.png", title: "Teacher Command Dashboard" },
        { url: "/screenshots/teachraan/03-management-hub.png", title: "School Management Hub" },
        { url: "/screenshots/teachraan/04-classes-management.png", title: "Multi-Class Management" },
        { url: "/screenshots/teachraan/05-invite-students.png", title: "Student Onboarding & Invites" },
        { url: "/screenshots/teachraan/06-assignments-quizzes.png", title: "Assignments & Timed Quizzes" },
        { url: "/screenshots/teachraan/07-firebase-chat.png", title: "Real-time Firebase Classroom Chat" },
        { url: "/screenshots/teachraan/08-attendance-system.png", title: "Interactive Attendance System" },
      ],
    },
    {
      id: "bible-quiz",
      title: "Bible Quiz App",
      category: "Learning & Quiz",
      badge: "Timed Quiz Engine",
      overview: "A quiz application with scheduled quiz availability, timed attempts, and score review.",
      myContributions: [
        "Scheduled quiz availability flow",
        "Countdown timer and question progress tracker",
        "Multiple-choice questions interface",
        "Results and answer review",
        "Quiz statistics / analytics",
      ],
      technologies: ["Riverpod", "Notifications", "Flutter", "Dart"],
      screenshots: [
        { url: "/screenshots/bible-quiz/quiz-home-catalog.png", title: "Quiz Catalog & Timed Mock/Final Tabs" },
        { url: "/screenshots/bible-quiz/quiz-timer-question.png", title: "Countdown Timer & Quiz Interface" },
        { url: "/screenshots/bible-quiz/quiz-results-review.png", title: "Results Review & Answer Key" },
        { url: "/screenshots/bible-quiz/quiz-analytics-report.png", title: "Quiz Analytics & Trend Report" },
      ],
    },
    {
      id: "union-secretary",
      title: "Union Secretary App",
      category: "Field Data Collection",
      badge: "In Active Development",
      overview: "A field data collection application for recording and managing member or voter-related information.",
      myContributions: [
        "Structured data-entry forms and input validation",
        "Geographic area selection",
        "Field verification and summary views",
      ],
      technologies: ["Riverpod", "Form Validation", "Flutter", "Dart"],
      screenshots: [], // No screenshots available (in development)
      inDevelopment: true,
    },
    {
      id: "bible-app",
      title: "Bible App (Bible Lite)",
      category: "Reading & Media",
      badge: "Reading & Video Modules",
      overview: "A Bible content application with reading plans and vertical video experiences.",
      myContributions: [
        "Vertical video reels player with play/pause and interaction controls",
        "Reading-plan catalogue organized by timeline",
        "Day-by-day reading plan navigation and checklists",
        "Daily reading reminders with scheduled notifications",
      ],
      technologies: ["GetX", "Video Player", "Flutter", "Dart"],
      screenshots: [
        { url: "/screenshots/bible-app/reels-video-player.png", title: "Vertical Video Reels Player" },
        { url: "/screenshots/bible-app/reading-plans-list.png", title: "Curated Reading Plans Catalog" },
        { url: "/screenshots/bible-app/plan-detail-overview.png", title: "Plan Detail & Day Overview" },
        { url: "/screenshots/bible-app/daily-checklist.png", title: "Daily Scripture Checklist" },
        { url: "/screenshots/bible-app/notification-scheduler.png", title: "Local Notification Scheduler" },
      ],
    },
    {
      id: "church-management-system",
      title: "Church Management System (CMS)",
      category: "Administration / Community",
      badge: "In Active Development",
      overview: "A mobile application concept or product for managing member records, events, and administrative workflows.",
      myContributions: [
        "Member and family directory interface",
        "Events and announcements feeds",
        "Attendance-related workflows",
        "Prayer-request or pastoral-care records",
      ],
      technologies: ["Riverpod", "StateNotifier", "Flutter", "Dart"],
      screenshots: [], // In development
      inDevelopment: true,
    },
  ],

  // Experience & Internships Section
  experience: {
    heading: "Experience & Education",
    eyebrow: "PROFESSIONAL TRAJECTORY",
    intro: "Hands-on engineering experience in Flutter mobile application development, production features, and machine learning models.",
    items: [
      {
        role: "Flutter Mobile App Developer Intern",
        company: "Skyraan Technologies",
        location: "Coimbatore",
        period: "May 2024 – Present",
        description: "Developing cross-platform mobile applications using Flutter. Completed full project modules from UI design to API integration, and currently contributing to active production projects.",
        bullets: [
          "Developing cross-platform mobile applications using Flutter and Dart.",
          "Completed one full project involving UI design, API integration, and state management.",
          "Currently contributing to an active production project with feature implementation and UI improvements.",
          "Integrated REST APIs, handled JSON data, and implemented authentication flows.",
          "Performed testing, bug fixing, and performance optimization to improve app stability.",
        ],
        technologies: ["Flutter", "Dart", "REST API", "Riverpod", "StreamBuilder", "JSON", "Git"],
      },
      {
        role: "Machine Learning Intern",
        company: "TechVolt Software Pvt Ltd",
        location: "Coimbatore",
        period: "July 2023",
        description: "Developed hybrid predictive modeling systems for Electric Vehicle telemetry and remaining useful life estimation.",
        bullets: [
          "Developed a hybrid predictive model for Remaining Useful Life (RUL) of Electric Vehicles (EVs) using XGBoost and Random Forest.",
          "Collected, pre-processed, and analysed time-series sensor data for predictive modeling.",
          "Evaluated model performance, optimized parameters, and implemented feature engineering to improve accuracy.",
          "Gained hands-on experience with Python libraries for machine learning, data analysis, and visualization.",
        ],
        technologies: ["Python", "XGBoost", "Random Forest", "Scikit-learn", "Pandas", "NumPy"],
      },
    ],
    education: {
      degree: "B.Tech, Artificial Intelligence and Data Science",
      institution: "Jai Shriram Engineering College",
      location: "Tirupur, India",
      period: "2021 – 2025",
      grade: "CGPA: 8.37",
      description: "Academic foundation in Mobile Development, Machine Learning, Data Analytics, and Computer Vision.",
    },
  },

  // Contact Section
  contact: {
    heading: "Let's Build Useful Mobile Experiences",
    eyebrow: "GET IN TOUCH",
    subtext: "Have a mobile app project or a Flutter development opportunity? Feel free to get in touch.",
    email: "kabilanr244@gmail.com",
    phone: "+91 6383828085",
    location: "Tirupur, Tamil Nadu, India - 641605",
    formHeading: "Send a Message",
  },

  // Footer
  footer: {
    copyright: `© ${new Date().getFullYear()} Kabilan. Built with React & Vite.`,
    note: "Crafted with clean code, Figma dark aesthetic, and Flutter passion.",
  },
};
