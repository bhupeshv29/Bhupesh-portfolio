export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink: string;
  liveLink?: string;
}

export const projects: Project[] = [
  {
    title: "Perps Exchange Platform",
    description:
      "Production-grade perpetual futures trading platform with a real-time matching engine, isolated margin, leverage, liquidation engine, live order book, and sub-second WebSocket updates.",

    image: "/perps-exchange.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Express.js",
      "PostgreSQL",
      "Redis Streams",
      "WebSockets",
      "Docker",
    ],
    githubLink: "https://github.com/bhupeshv29/Perps-Exchange-platform",
  },
  {
    title: "BetterUptime",
    description:
      "A monitoring tool that allows users to track the uptime of websites and services with real-time notifications.",
    image: "/uptime.jpeg",
    technologies: ["Next.js", "Tailwind CSS", "Prisma", "PostgreSQL"],
    githubLink: "https://github.com/Bhupeshv29/Uptime",
    liveLink: "https://betteruptime-deployment-fe.vercel.app/",
  },
  {
    title: "V0 Clone",
    description:
      "A clone of V0, an AI-powered UI generation tool using shadcn/ui components and Tailwind CSS.",
    image: "/v0.png",
    technologies: ["Next.js", "Shadcn/ui", "Tailwind CSS", "OpenAI"],
    githubLink: "https://github.com/Bhupeshv29/v0-clone",
    liveLink: "https://v0-clone-kohl.vercel.app/",
  },
  {
    title: "Droply",
    description:
      "A file-sharing platform enabling users to upload, manage, and share files securely with others.",
    image: "/droply.png",
    technologies: ["Next.js", "AWS S3", "Prisma", "Tailwind CSS"],
    githubLink: "https://github.com/Bhupeshv29/Droply",
    liveLink: "https://droply.vercel.app/",
  },
  {
    title: "Sketchly",
    description:
      "A real-time collaborative drawing app with a clean UI for brainstorming and sketching ideas together.",
    image: "/sketchly.jpg",
    technologies: ["React.js", "Socket.io", "Canvas API", "Node.js"],
    githubLink: "https://github.com/Bhupeshv29/Sketchly",
    liveLink: "https://sketchly.vercel.app/",
  },
  {
    title: "CourseHub",
    description:
      "A course management platform for browsing, enrolling, and tracking progress across various online courses.",
    image: "/courseHub.jpg",
    technologies: ["Next.js", "MongoDB", "Tailwind CSS", "Clerk Auth"],
    githubLink: "https://github.com/Bhupeshv29/CourseHub",
    liveLink: "https://course-hub-xi.vercel.app/",
  },
  {
    title: "Chat App",
    description:
      "A real-time chat application supporting one-on-one and group messaging with a modern interface.",
    image: "/chatapp.jpg",
    technologies: ["React.js", "Socket.io", "Express.js", "MongoDB"],
    githubLink: "https://github.com/Bhupeshv29/chat-app",
    liveLink: "https://chat-app-weld-two.vercel.app/",
  },
  {
    title: "InfinteBrain",
    description:
      "An AI-powered tool to help users generate and organize creative ideas for content and projects.",
    image: "/infintebrain.jpg",
    technologies: ["Next.js", "OpenAI", "Tailwind CSS", "Prisma"],
    githubLink: "https://github.com/Bhupeshv29/infintebrain",
    liveLink: "https://infintebrain.vercel.app/",
  },
];
