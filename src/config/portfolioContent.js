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
    name: "Kabilan",
    eyebrow: "Flutter Developer",
    headlineLine1: "Hi, I'm Kabilan R.",
    headlineLine2: "Flutter Developer | Cross-Platform Mobile Apps",
    intro: "I'm a Flutter Developer focused on building responsive mobile applications with Flutter and Dart. I work with REST API integration, state management, and local and cloud data storage to deliver smooth, reliable user experiences.",
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
    copy: "I'm a Flutter Developer and a B.Tech graduate in Artificial Intelligence and Data Science from Jai Shriram Engineering College. At Skyraan Technologies, I work on cross-platform mobile applications, focusing on UI development, REST API integration, state management, and feature implementation. My academic background has also given me exposure to machine learning and computer vision.",
    highlights: [
      "Hands-on experience building Flutter applications with Dart.",
      "Experience with Riverpod, Provider, StreamBuilder, and GetX.",
      "Worked on chat, text-to-speech playback, and vertical video features.",
      "B.Tech in Artificial Intelligence and Data Science — CGPA 8.37.",
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
          { name: "Python", level: 2 },
          { name: "C", level: 1 },    // 2 = Working
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
      }
      // ,
      // {
      //   name: "Analytical Tools",
      //   description: "Reporting and data exploration",
      //   icon: "BarChart3",
      //   isPrimary: false,
      //   skills: [
      //     { name: "Excel", level: 3 },
      //     { name: "Power BI", level: 2 },
      //   ],
      // },
    ],
  },

  // All 7 Projects with Genuine Feature Contributions
  projects: [
    {
      id: "disease-dictionary",
      title: "Disease Dictionary",
      category: "Healthcare & Education",
      badge: "Educational Mobile App",
      caseStudyUrl: "https://github.com/Kabilan0624/disease-dictionary-case-study",
      overview: "An educational medical application for browsing disease information and related learning content.",
     myContributions: [
          "Developed the complete Flutter application from UI implementation to feature integration",
          "Built disease categories, search, and filtering functionality",
          "Implemented educational video browsing with vertical reels-style scrolling",
          "Integrated text-to-speech playback with audio speed controls",
          "Developed bookmarking functionality for saving and accessing content",
          "Integrated REST APIs and managed application state and data rendering",
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
      caseStudyUrl: "https://github.com/Kabilan0624/agriculture-machinery-case-study",
      overview: "A machinery information and learning application for exploring equipment categories and specifications.",
            myContributions: [
        "Developed the complete Flutter application for exploring agricultural machinery and equipment",
        "Built machinery categories and detailed equipment information screens",
        "Implemented equipment specifications and text-to-speech functionality",
        "Developed vertical video browsing for agricultural machinery content",
        "Implemented bookmarking and favourites functionality",
        "Integrated REST APIs and managed application state and data rendering",
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
      caseStudyUrl: "https://github.com/Kabilan0624/teachraan-erp-case-study",
      overview: "A school-focused application supporting teacher and student workflows, classroom management, and academic activities.",
      myContributions: [
        "Developed teacher and student onboarding flows with role-based navigation",
        "Implemented classroom group chat using Firebase Firestore",
        "Built unread-message tracking and chat message management",
        "Developed attendance management for marking student presence",
        "Implemented class management and student onboarding features",
        "Built quizzes, assignments, and study material modules",
        "Integrated push notifications using Firebase Cloud Messaging",
        "Integrated REST APIs and managed application state using Riverpod",
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
      caseStudyUrl: "https://github.com/Kabilan0624/bible-quiz-app-case-study",
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
      "Developed multi-step member registration forms with input validation",
      "Implemented dynamic dropdowns for district, assembly, panchayat, village, ward, and booth selection",
      "Integrated member profile photo upload and member details submission",
      "Built field verification and member summary views",
      "Implemented paginated geographic data loading and dropdown management",
      "Managed form state and validation using Riverpod",
      "Integrated REST APIs using Dio for member registration and data retrieval",
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
  "Developed the vertical video reels module with play/pause and interaction controls",
  "Implemented reading-plan navigation and day-by-day reading checklists",
  "Worked on scheduled daily reading reminders and resolved notification issues",
  "Fixed bugs across multiple existing modules inherited from the previous developer",
  "Troubleshot and resolved functional issues across the application",
  "Improved application stability and prepared the app for production release",
  "Released the updated application to production",
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
      "Developing member and family directory management features",
      "Building events and announcements feeds",
      "Implementing attendance-related workflows",
      "Working on prayer-request and pastoral-care record management",
      "Integrating APIs and managing application state using Riverpod",
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
        role: "Flutter Mobile App Developer",
        company: "Skyraan Technologies",
        location: "Coimbatore",
        period: "May 2025 – Present",
        description: "Contributing to Flutter mobile application development, from responsive UI implementation to API integration and state management.",
     bullets: [
      "Developing and maintaining cross-platform mobile applications using Flutter and Dart.",
      "Developed complete application features, including UI implementation, API integration, and state management.",
      "Contributing to multiple production projects by implementing new features and improving existing modules.",
      "Integrating REST APIs using Dio and handling JSON data with proper model structures.",
      "Managing application state using Riverpod and implementing responsive, reusable UI components.",
      "Integrating Firebase services, including Firestore for real-time classroom chat functionality.",
      "Troubleshooting legacy code, fixing bugs, and improving application stability.",
      "Collaborating on ongoing projects, maintaining existing features, and resolving functional issues."
    ],
        technologies: ["Flutter", "Dart", "REST API", "Riverpod", "StreamBuilder", "JSON", "Git"],
      }
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
