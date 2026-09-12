// Single source of truth for all portfolio content.
// Every fact here traces back to the original resume/portfolio — nothing invented.

export const profile = {
  name: 'Md Tahseen Alam',
  shortName: 'Tahseen Alam',
  handle: 'tahseen-alam',
  role: 'Backend-Focused Full Stack Developer',
  tagline:
    'I design and build complete web systems — APIs, authentication, real-time features, background jobs, and the cloud infrastructure that runs them.',
  status: 'OPEN TO OPPORTUNITIES',
  focus: ['BACKEND', 'SYSTEMS', 'CLOUD'],
  coreStack: ['TypeScript', 'Node.js', 'Redis', 'AWS'],
  email: 'tassutahsee@gmail.com',
  github: 'https://github.com/tassu1',
  githubHandle: 'tassu1',
  linkedin: 'https://www.linkedin.com/in/md-tahseen-alam-892317263/',
  leetcode: 'https://leetcode.com/u/tahseen_/',
  leetcodeHandle: 'tahseen_',
  whatsapp: 'https://wa.me/919117391745',
  whatsappDisplay: '+91 91173 91745',
  resumeUrl: '/Resume.pdf',
  snapshot: [
    { label: 'Internships', value: '02' },
    { label: 'Projects Built', value: '05' },
    { label: 'Live Products', value: '04' },
    { label: 'DSA Problems', value: '300+' },
  ],
};

export const approachSteps = [
  {
    n: '01',
    title: 'Understand',
    description: 'Users, business requirements, and the actual problem — before any code.',
  },
  {
    n: '02',
    title: 'Design',
    description: 'Architecture, data flow, API contracts, and database structure.',
  },
  {
    n: '03',
    title: 'Secure',
    description: 'Authentication, authorization, validation, and access control by default.',
  },
  {
    n: '04',
    title: 'Build',
    description: 'Implement with maintainable components and services, not one giant file.',
  },
  {
    n: '05',
    title: 'Scale',
    description: 'Think about bottlenecks, caching, queues, and infrastructure ahead of time.',
  },
];

export interface ArchNode {
  label: string;
  note?: string;
}

export interface FeaturedProject {
  id: string;
  name: string;
  tagline: string;
  problem: string;
  system: string;
  decision: {
    decision: string;
    why: string;
    tradeoff: string;
  };
  architecture: {
    stages: ArchNode[][];
    annotation?: string;
  };
  stack: string[];
  highlights: { label: string }[];
  image: string;
  liveUrl?: string;
  githubUrl: string;
}

export const featuredProjects: FeaturedProject[] = [
  {
    id: 'edumanage',
    name: 'EduManage',
    tagline: 'A multi-school management platform where the interesting problem was isolation, not CRUD.',
    problem:
      'Multiple schools needed to share one platform without ever seeing each other\u2019s data — students, staff, and records had to stay logically separate on shared infrastructure.',
    system:
      'A role-based platform covering admissions, staff, and day-to-day school operations, built around 5 distinct roles and over 35 demo accounts spanning 4 schools, with live updates via Socket.IO.',
    decision: {
      decision: 'Shared database with school-context validation enforced on every protected route, rather than separate databases per school.',
      why: 'Keeps infrastructure and operations simple for an early-stage product while still enforcing logical data isolation per school.',
      tradeoff: 'Requires strict schoolId filtering across every single query — one missed check breaks isolation, so it demands discipline over convenience.',
    },
    architecture: {
      stages: [
        [{ label: 'CLIENT' }],
        [{ label: 'API', note: 'Express · JWT · RBAC · school-context middleware' }],
        [{ label: 'DATABASE', note: 'MongoDB · schoolId-scoped queries' }],
      ],
      annotation: 'Socket.IO keeps the client and API in sync in real time.',
    },
    stack: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'JWT', 'RBAC', 'Socket.IO', 'AWS EC2'],
    highlights: [
      { label: '5 roles · 35+ demo accounts across 4 schools' },
      { label: '10+ MongoDB models · JWT + RBAC pipeline' },
    ],
    image: 'edumanage.png',
    liveUrl: 'https://edumanageai.vercel.app/',
    githubUrl: 'https://github.com/tassu1/edumanage',
  },
  {
    id: 'mockmate',
    name: 'MockMate',
    tagline: 'An AI interview system where report generation is never allowed to block the user.',
    problem:
      'AI-generated interview reports take far longer than a normal HTTP request-response cycle can reasonably support — leaving a user staring at a spinner isn\u2019t an option.',
    system:
      'Report generation is offloaded to a background job queue, so the user gets their result asynchronously instead of holding an HTTP connection open while an LLM works.',
    decision: {
      decision: 'A BullMQ job queue backed by Redis, processed by a separate worker service, with progress streamed back over SSE.',
      why: 'Keeps the API responsive — the user isn\u2019t left waiting on an open connection while generation happens elsewhere.',
      tradeoff: 'Adds Redis as infrastructure and requires monitoring worker health, retries, and backoff (3 attempts, exponential) — more moving parts for a better experience.',
    },
    architecture: {
      stages: [
        [{ label: 'CLIENT' }],
        [{ label: 'API', note: 'Express · SSE' }],
        [{ label: 'QUEUE', note: 'Redis + BullMQ' }],
        [{ label: 'WORKER', note: '3× retry · exponential backoff' }],
      ],
      annotation: 'Progress streams back to the client over SSE as the worker completes each stage.',
    },
    stack: ['Redis', 'BullMQ', 'SSE', 'OpenRouter AI', 'Node.js', 'Express'],
    highlights: [{ label: 'Background jobs, 3× retry with backoff' }],
    image: '',
    liveUrl: '',
    githubUrl: 'https://github.com/tassu1/mockmate',
  },
  {
    id: 'lexica',
    name: 'Lexica AI',
    tagline: 'Turning a single prompt into a structured, exportable document — reliably.',
    problem:
      'Generating a long, well-structured document from one prompt in a single AI call increases both failure risk and the chance of hitting token limits partway through.',
    system:
      'A multi-step generation pipeline with AI-assisted prompt enhancement before the final document call, exporting the result as a polished PDF or DOCX.',
    decision: {
      decision: 'Break generation into an enhancement pass and a generation pass, instead of one large prompt-to-document call.',
      why: 'A single long-form generation call is fragile — splitting it makes failures cheaper to detect and retry.',
      tradeoff: 'More orchestration logic and latency, traded for more reliable, structured output.',
    },
    architecture: {
      stages: [
        [{ label: 'CLIENT' }],
        [{ label: 'API', note: 'Next.js · NextAuth' }],
        [{ label: 'AI ENGINE', note: 'Prompt enhancement → generation' }],
        [{ label: 'EXPORT', note: 'PDF / DOCX' }],
      ],
    },
    stack: ['Next.js', 'TypeScript', 'NextAuth', 'AI Generation'],
    highlights: [{ label: 'Prompt enhancement · PDF/DOCX export' }],
    image: 'lexicaai.jpg',
    liveUrl: 'https://lexicaai.vercel.app/',
    githubUrl: 'https://github.com/tassu1/Lexica',
  },
];

export const otherProjects = [
  {
    id: 'innerlight',
    name: 'InnerLight',
    description: 'A wellness app that listens — AI-guided journaling and mood tracking on a modular API.',
    tags: ['MERN', 'JWT', 'Cloudinary'],
    image: 'innerlight.png',
    secondaryImage: 'innerlightdas.png',
    liveUrl: 'https://innerlightai.vercel.app/',
    githubUrl: 'https://github.com/tassu1/innerlight',
  },
  {
    id: 'devsnip',
    name: 'DevSnip',
    description: 'A snippet manager built around how developers actually search their own code.',
    tags: ['MERN', 'JWT', 'MongoDB'],
    image: 'devsnip.png',
    liveUrl: 'https://devsnipa.vercel.app/',
    githubUrl: 'https://github.com/tassu1/devsnip',
  },
];

export const capabilities = [
  {
    category: 'Backend',
    items: ['REST API design', 'Authentication (JWT)', 'Authorization & RBAC', 'Database & schema design', 'Node.js / Express services'],
  },
  {
    category: 'Real-time',
    items: ['Socket.IO', 'Event-driven communication', 'Live client-server sync'],
  },
  {
    category: 'Background processing',
    items: ['Redis', 'BullMQ job queues', 'Worker services', 'Retries with backoff'],
  },
  {
    category: 'Infrastructure',
    items: ['Docker', 'AWS EC2 / S3 / CloudFront', 'Vercel & Render', 'Git-based CI/CD'],
  },
];

export const techStack = [
  { key: 'backend', purpose: 'core services · auth · realtime · jobs', values: ['Node.js', 'Express.js', 'REST APIs', 'JWT', 'RBAC', 'Socket.IO', 'Redis', 'BullMQ'] },
  { key: 'databases', purpose: 'primary datastore · relational · modeling', values: ['MongoDB', 'Mongoose', 'PostgreSQL', 'Schema Design'] },
  { key: 'devops_cloud', purpose: 'containers · CI/CD · hosting', values: ['Docker', 'Git', 'GitHub Actions', 'AWS EC2/S3', 'Vercel', 'Render'] },
  { key: 'languages', purpose: 'day-to-day · systems thinking', values: ['JavaScript', 'TypeScript', 'Python', 'C++'] },
  { key: 'frontend', purpose: 'the surface on top of the API', values: ['React', 'Next.js', 'Redux', 'Tailwind CSS', 'HTML5', 'CSS3'] },
  { key: 'integrations', purpose: 'AI, auth & media integrations', values: ['OpenRouter API', 'Google OAuth', 'NextAuth', 'Cloudinary', 'Multer', 'Postman'] },
];

export const experience = [
  {
    period: 'Oct 2025 – Jan 2026',
    title: 'Full Stack Developer Intern',
    org: 'Texura (Remote)',
    stack: ['MERN', 'REST APIs', 'JWT', 'Cloudinary', 'Razorpay'],
    points: [
      'Independently built a restaurant management platform covering table booking, online ordering, menu management, and administration, structured around 3 distinct user roles with role-specific workflows.',
      'Built and integrated 15+ RESTful APIs covering auth, restaurants, menus, tables, bookings, and orders with role-based access control.',
      'Integrated payment and media workflows end to end, connecting Razorpay test-mode payments and Cloudinary-based image storage from user interaction through backend processing.',
    ],
  },
  {
    period: 'Aug 2023 – Sep 2023',
    title: 'Cloud & DevOps Intern',
    org: 'Learn & Build (Remote)',
    stack: ['Docker', 'Git', 'CI/CD', 'AWS'],
    points: [
      'Containerized backend services with Docker to standardize environments and make deployments reproducible across development and production.',
      'Established Git branching and pull request workflows to organize collaborative development and maintain consistent version control.',
      'Built CI/CD pipelines connecting source changes to automated deployments through AWS EC2 and S3, monitoring applications post-deployment.',
    ],
  },
];

export const beyondResume =
  'Branch Topper in Diploma in Computer Science Engineering (82.17%), alongside 300+ DSA problems solved across LeetCode and other platforms.';

export const currentlyExploring = ['Backend Architecture', 'System Design', 'Cloud Infrastructure', 'Distributed Systems'];

export const aboutText = [
  'I\u2019m a backend-leaning full stack developer who\u2019s drawn to the parts of a system most people never see — how a request gets authenticated, how a job gets queued and retried, how data stays isolated between tenants on shared infrastructure.',
  'Most of what I\u2019ve built came out of real constraints: a multi-school platform that had to keep five schools\u2019 data apart, a queue-backed AI interview tool that couldn\u2019t afford to block on generation, a document generator that had to get multi-step AI output right. I like the problems where the happy path is easy and the edge cases are where the real engineering happens.',
  'Outside of product work, I spend time on algorithmic problem solving — 300+ problems across LeetCode and other platforms — because clearer problem-solving tends to translate directly into cleaner system design.',
];
