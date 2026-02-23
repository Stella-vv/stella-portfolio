// src/data/projects.js

export const projectsData = [
  {
    id: 'unitask-ai',
    title: 'UniTask AI',
    description: 'UniTask AI is a full stack educational management platform that supports course management, assignment submission, Q&A forums, and role based dashboards for students and tutors. The system integrates an AI assistant powered by Ollama, enabling students to receive instant responses based on uploaded FAQs and assignment materials.',
    image: '/project/Uni-task/cover.png', 
    year: '2025',
    status: 'Active',
    statusColor: '#22c55e',
    type: 'Full-Stack',
    tags: ['React', 'HTML', 'JavaScript', 'CSS', 'PostgreSQL', 'Docker', 'Ollama AI', 'Flask', 'RESTful API', 'Git'],
    features: [
      'An AI assistant with Ollama to help students get fast answers based on assignments and FAQs.',
      'Added role-based access with separate dashboards for tutors and students.',
      'Implemented course management features with full create, update, and delete support.',
      'Set up automatic discussion forums when new assignments are created.',
      'Enabled assignment uploads with due dates and basic Q&A file management.',
      'Deployed the full-stack system using Docker and Docker Compose.'
    ],

    links: {
      website: '', // 留空
      github: '',  // 留空
      demo: ''     // 留空
    },
    screenshots: [
      '/project/Uni-task/1.png',
      '/project/Uni-task/2.png',
      '/project/Uni-task/3.png',
      '/project/Uni-task/4.jpg',
      '/project/Uni-task/5.png',
      '/project/Uni-task/6.png', 
      '/project/Uni-task/7.png',
      '/project/Uni-task/8.png',
    ]
  },
  {
    id: 'bigbrain',
    title: 'BigBrain',
    description: 'A robust Single Page Application (SPA) online gaming platform inspired by Kahoot. It features a high-performance admin dashboard for real-time game management and an interactive player interface.',
    image: '/project/BigBrain/cover.jpg', 
    year: '2025',
    status: 'Completed',
    statusColor: '#22c55e',
    type: 'Full-Stack / Educational',
    tags: ['React', 'Material-UI', 'RESTful API', 'Vitest', 'Cypress', 'React Router', 'npm', 'Git'],
    features: [
      'Create interactive quiz games with images, videos, and multiple question types.',
      'Host live game sessions and invite players using shareable links or join codes.',
      'Let players join instantly and answer questions in real time through a smooth single-page interface.',
      'Automatically show timers, answers, and results during gameplay.',
      'View leaderboards and detailed statistics after each session.',
      'Manage games, questions, and sessions through a simple admin dashboard.'
    ],
    links: {
      website: '', 
      github: '',  
      demo: ''     
    },
    screenshots: [
      '/project/BigBrain/1.png',
      '/project/BigBrain/2.png',
      '/project/BigBrain/3.png',
      '/project/BigBrain/4.png',
      '/project/BigBrain/5.png',
      '/project/BigBrain/6.png',
      '/project/BigBrain/7.png',
      '/project/BigBrain/8.png',
      '/project/BigBrain/9.png',
      '/project/BigBrain/10.png',
      '/project/BigBrain/11.png',
    ]
  },
  {
    id: 'saishang-jiangnan',
    title: 'Saishang Jiangnan Travel Website',
    description: 'A full-featured regional tourism platform. The platform features an intuitive frontend for tourists to explore local attractions, book accommodations, and share feedback, paired with a custom admin panel to efficiently manage orders, content updates, and user data.',
    image: '/project/travel/cover.jpg',
    year: '2022', 
    status: 'Completed',
    statusColor: '#22c55e',
    type: 'Full-Stack / Graduation Project',
    tags: ['PHP', 'MySQL', 'JavaScript', 'HTML5', 'CSS3', 'jQuery'],
    features: [
      'Enables users to seamlessly search, view details, and make reservations for local attractions, hotels, and restaurants.',
      'Allows tourists to register, log in, manage personal information, update passwords, and fully handle their orders (check, cancel, and provide feedback).',
      'Includes a dedicated message board and comment section for users to leave reviews, submit messages, and read others\' experiences.',
      'Equips administrators with full capabilities to search, add, delete, and modify information across attractions, hotels (including specific rooms), restaurants, and general tourist info.',
      'Features a backend dashboard for moderating user accounts (including deactivation/recovery), managing orders and comments, and tracking data statistics such as page views and sales volumes.'
    ],
    links: {
      website: '', 
      github: '',  
      demo: ''     
    },
    screenshots: [
      '/project/travel/1.png',
      '/project/travel/2.png',
      '/project/travel/3.png',
      '/project/travel/4.png',
      '/project/travel/5.png',
      '/project/travel/6.png',
      '/project/travel/7.png',
      '/project/travel/8.png',
      '/project/travel/9.png',
      '/project/travel/10.png',
      '/project/travel/11.png',
      '/project/travel/12.png',
    ]
  }
];