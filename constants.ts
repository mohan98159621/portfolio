import { Profile, Project, SkillCategory, SectionId } from './types';

export { SectionId };

export const PROFILE: Profile = {
  name: "Mohan Sharma",
  role: "Frontend Developer",
  experience: "2+ Years of Experience",
  summary: "Creative and detail-oriented Frontend Developer with over 2 years of experience in building responsive web applications and interactive features that improve user experience and drive business growth. Proficient in React, TypeScript, and modern UI frameworks, with strong expertise in collaboration and knowledge-sharing platforms. Skilled in client communication, requirement gathering, and delivering high-quality solutions aligned with project plans. Flexible, quick to adapt to new environments, and experienced in solving complex technical problems while maintaining code quality and test coverage.",
  email: "mohansharma121@gmail.com",
  phone: "+91 9815962120",
  location: "India",
  social: {
    linkedin: "https://www.linkedin.com/in/mohan-vishwakarma-b12b3aa3",
    github: "https://github.com/mohan98159621"
  }
};

export const SKILLS: SkillCategory[] = [
  {
    category: "Frontend Core",
    items: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "SCSS", "SASS", "XML", "Tailwind CSS"]
  },
  {
    category: "UI Frameworks",
    items: ["Material UI", "Shadcn","Ant Design", "Framer Motion", "Lucide Icons"]
  },
  {
    category: "Tools & Libraries",
    items: ["Firebase (Auth, Firestore, Cloud Functions)", "Algolia", "Chart.js", "TipTap Editor"]
  },
  {
    category: "Project Management",
    items: ["Jira", "Asana", "Trello", "Slack", "Microsoft Teams"]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "EdTech & Enterprise Collaboration Platform",
    role: "Frontend Developer",
    tech: ["React.js", "TypeScript", "Firebase", "Tailwind CSS", "Algolia", "Chart.js", "TipTap Editor"],
    description: "A centralized platform designed for storing, organizing, and sharing training materials and knowledge while fostering seamless collaboration among employees. It unifies processes, policies, training modules, projects, and communication channels into one user-friendly hub.",
    responsibilities: [
      "Implemented modular, reusable components using React, TypeScript, and Tailwind CSS, ensuring scalability and maintainability.",
      "Integrated Firebase (Authentication, Firestore, Cloud Functions) for secure access, real-time data handling, and role-based permissions.",
      "Built rich text editing and content management features with TipTap Editor, enhancing training module creation and collaboration.",
      "Implemented advanced search and analytics using Algolia, enabling quick retrieval of training materials and knowledge assets.",
      "Enhanced data visualization with Chart.js, delivering actionable insights through interactive dashboards.",
      "Improved platform performance by applying code-splitting, lazy loading, and pagination for large datasets.",
      "Developed the Groups feature, allowing users to create, join, and manage groups for collaboration and communication.",
      "Implemented the Courses feature, enabling users to create, enroll in, and participate in structured learning modules."
    ],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
    link: "#" // Add your project URL here
  },
  {
    title: "Real Estate Property Management Platform",
    role: "Frontend Developer",
    tech: ["React.js", "TypeScript", "Tailwind CSS", "Material UI", "Chart.js"],
    description: "A comprehensive real estate platform designed to streamline property listings, search, and management. It enables users to browse properties, schedule viewings, and manage inquiries while providing property managers with analytics and lead tracking capabilities.",
    responsibilities: [
      "Developed property listing pages with advanced filters including location, price range, property type, and amenities.",
      "Implemented interactive property search with real-time filtering and sorting using React and TypeScript.",
      "Created responsive property detail pages showcasing images, floor plans, specifications, and virtual tour integration.",
      "Built inquiry management system allowing users to schedule property viewings and contact agents directly.",
      "Integrated Chart.js for analytics dashboards displaying property performance, lead conversion rates, and market trends.",
      "Implemented image galleries with lightbox functionality and lazy loading for optimal performance.",
      "Developed user dashboard for saved properties, scheduled viewings, and inquiry tracking.",
      "Collaborated with backend team to integrate RESTful APIs for property data and user management."
    ],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
    link: "#" // Add your project URL here
  },
  {
    title: "Retail Inventory & Management System",
    role: "Frontend Developer",
    tech: ["React.js", "TypeScript", "Tailwind CSS", "Chart.js"],
    description: "A comprehensive inventory and retail management system designed to streamline product listing, stock tracking, and sales analysis. It helps retailers manage their outlets efficiently and gain insights through dashboards and reports.",
    responsibilities: [
      "Developed product listing pages with fields such as product image, name, category, status, and actions.",
      "Created reusable UI components with React, TypeScript, and Tailwind CSS for scalability.",
      "Integrated Chart.js to visualize sales data, stock levels, and product performance trends.",
      "Implemented pagination, filtering, and sorting for large product datasets to improve usability.",
      "Collaborated with backend and design teams to ensure seamless data integration and user experience."
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    link: "#" // Add your project URL here
  }
];

export const NAV_LINKS = [
  { label: 'Home', href: SectionId.HOME },
  { label: 'About', href: SectionId.ABOUT },
  { label: 'Skills', href: SectionId.SKILLS },
  { label: 'Projects', href: SectionId.PROJECTS },
  { label: 'Contact', href: SectionId.CONTACT },
];