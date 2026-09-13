export const portfolioData = {
  personalInfo: {
    name: 'Mahmudul Hasan',
    initials: 'MH',
    title: 'CSE Student & Web Developer',
    location: 'Dhaka, Bangladesh',
    email: 'mahmudulhasan15035@gmail.com',
    summary:
      'I’m a Computer Science & Engineering student and web developer focused on building modern, practical, and user-friendly web applications. I enjoy turning ideas into useful software while continuously improving my programming and engineering fundamentals.',
    resumeUrl: '/resume/resume.pdf',
    profileImage: null,
  },

  socialLinks: {
    github: 'https://github.com/l7zqs',
    linkedin: 'https://linkedin.com/',
    instagram: null,
    tiktok: null,
    discord: 'https://discord.com/users/1508082289081454663',
  },

  heroContent: {
    eyebrow: 'CSE Student · Web Developer',
    titles: [
      'Web Developer',
      'Frontend Developer',
      'Full Stack Developer',
      'Backend Developer',
      'Software Developer',
    ],
    ctaLabel: 'Explore projects',
  },

  aboutContent: {
    introBefore: 'I’m',
    introAfter:
      '— a Computer Science & Engineering student who enjoys building useful software and turning ideas into clean, practical web experiences.',

    paragraphs: [
      'I enjoy working across the stack, from creating responsive interfaces with React and TypeScript to building practical backend systems and APIs.',
      'As a CSE student, I’m continuously strengthening my programming fundamentals, problem-solving skills, and understanding of software engineering through hands-on projects.',
    ],

    interests: [
      'Web development',
      'Full-stack engineering',
      'Developer tools',
      'Problem solving',
    ],
  },

  technicalSkills: [
    {
      name: 'Python',
      category: 'Language',
      level: 78,
      mark: 'PY',
    },
    {
      name: 'PHP',
      category: 'Language',
      level: 76,
      mark: 'PHP',
    },
    {
      name: 'TypeScript',
      category: 'Language',
      level: 74,
      mark: 'TS',
    },
    {
      name: 'React',
      category: 'Frontend',
      level: 80,
      mark: 'R',
    },
    {
      name: 'JavaScript',
      category: 'Language',
      level: 78,
      mark: 'JS',
    },
    {
      name: 'MySQL',
      category: 'Database',
      level: 74,
      mark: 'SQL',
    },
    {
      name: 'MongoDB',
      category: 'Database',
      level: 68,
      mark: 'DB',
    },
    {
      name: 'REST APIs',
      category: 'Backend',
      level: 72,
      mark: 'API',
    },
    {
      name: 'Git',
      category: 'Tools',
      level: 78,
      mark: 'G',
    },
    {
      name: 'Data Structures',
      category: 'Concept',
      level: 65,
      mark: 'DS',
    },
  ],

  services: [
    {
      title: 'Web Development',
      description:
        'Modern, responsive web experiences built with clean interfaces and practical functionality.',
      mark: '01',
      tags: ['React', 'TypeScript'],
    },
    {
      title: 'Full-stack Development',
      description:
        'End-to-end web applications connecting polished frontends with reliable backend systems.',
      mark: '02',
      tags: ['React', 'Python'],
    },
    {
      title: 'Backend & APIs',
      description:
        'Practical backend services and REST APIs designed around clear data and application workflows.',
      mark: '03',
      tags: ['Python', 'PHP'],
    },
    {
      title: 'Database Development',
      description:
        'Structured data solutions for web applications using both relational and NoSQL databases.',
      mark: '04',
      tags: ['MySQL', 'MongoDB'],
    },
  ],

  projects: [
    {
      title: 'WWM Discord Bot',
      featured: true,
      status: 'Active',
      description:
        'A feature-rich Discord bot for Where Winds Meet communities with leveling, moderation, XP, roles, and server utilities.',
      problem:
        'Gaming communities need reliable tools to manage engagement, moderation, and member progression in one place.',
      features: [
        'XP & leveling system',
        'Automatic level roles',
        'Moderation commands',
        'Voice activity XP',
      ],
      tech: ['Python', 'discord.py', 'MongoDB'],
      github: 'https://github.com/l7zqs',
      liveDemo: null,
      mark: 'WWM',
    },

    {
      title: 'X-MOD STORE',
      featured: true,
      status: 'Developing',
      description:
        'A web-based Free Fire store management platform with user balance, UID information, product management, and an admin panel.',
      problem:
        'Digital gaming stores need a simple system to manage products, users, balances, and orders efficiently.',
      features: [
        'Admin dashboard',
        'Product management',
        'User balance system',
        'MySQL database',
      ],
      tech: ['PHP', 'MySQL', 'HTML', 'Tailwind CSS'],
      github: 'https://github.com/l7zqs',
      liveDemo: null,
      mark: 'XM',
    },

    {
      title: 'Developer Portfolio',
      featured: false,
      status: 'Active',
      description:
        'A minimal personal portfolio showcasing my development journey, skills, projects, and experience as a CSE student.',
      problem:
        'A developer portfolio should communicate skills and projects clearly without unnecessary complexity.',
      features: [
        'Responsive design',
        'Project showcase',
        'Skills overview',
        'Modern UI',
      ],
      tech: ['React', 'TypeScript', 'Tailwind CSS'],
      github: 'https://github.com/l7zqs',
      liveDemo: null,
      mark: 'MH',
    },
  ],

  internships: [],

  leadership: [],

  softSkills: [
    'Problem solving',
    'Communication',
    'Teamwork',
    'Adaptability',
    'Time management',
    'Continuous learning',
  ],

  contentSection: {
    eyebrow: 'Beyond code',
    heading: 'Learning, building, and improving one project at a time.',

    cards: [
      {
        label: 'Learning',
        text:
          'I’m continuously improving my programming fundamentals, data structures, databases, and software engineering knowledge as a CSE student.',
      },
      {
        label: 'Building',
        text:
          'I learn best by building real projects, experimenting with new technologies, and turning ideas into working software.',
      },
      {
        label: 'Direction',
        text:
          'My goal is to become a strong software engineer by developing solid fundamentals and gaining experience building reliable products.',
      },
    ],
  },

  footerContent: {
    tagline: 'Building useful things, one project at a time.',
  },
}

export const visibleSocialLinks = (links: Record<string, string | null>) =>
  Object.entries(links).filter(([, url]) => Boolean(url))

export const socialLabels = {
  github: 'GitHub',
  linkedin: 'LinkedIn',
  instagram: 'Instagram',
  tiktok: 'TikTok',
  discord: 'Discord',
}

export default portfolioData
