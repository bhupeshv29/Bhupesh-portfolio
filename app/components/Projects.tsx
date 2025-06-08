import React from 'react';
import ProjectCardComponent from './ui/ProjectCard';

const projects = [
  {
    title: "Course Selling App",
    description: "A full-stack Course Selling app built. Features include user/admin authentication, Course management.",
    image: "/courseHub.jpg",
    technologies: ["React", "Express", "MongoDB", "Tailwind"],
    githubLink: "https://github.com/bhupeshv29/course-selling-app.git",
    liveLink: "https://course-selling-app-woad.vercel.app/"
  },

    {
    title: "Sketchly",
    description: "A full-stack collaborative drawing app.",
    image: "/sketchly.jpg",
    technologies: ["Nextjs", "Express", "Shadcn", "Postgresql", "Tailwind"],
    githubLink: "https://github.com/bhupeshv29/sketchly",
    liveLink: "https://sketchly2.vercel.app/"
  },
 {
    title: "ChatApp",
    description: "A basic chatApp",
    image: "/chatapp.jpg",
    technologies: ["React", "TypeScript", "websocket","Tailwind"],
    githubLink: "https://github.com/bhupeshv29/chatting.git",
    liveLink: "https://chatting.bhupesh.site/"
  },
 {
    title: "Infinite Brain",
    description: "Bookmark your link",
    image: "/infintebrain.jpg",
    technologies: ["React", "TypeScript", "Express", "Tailwind"],
    githubLink: "https://github.com/bhupeshv29/infinte_brain.git",
    liveLink: "https://infinte-brain.vercel.app/"
  },

  {
    title: "create-Turboquick-app",
    description: "A npm package cli for bootstraping a project (turborepo with pnpm) quickly. It clones the github repo template via cli.",
    image: "/npm.jpg",
    technologies: ["Turborepo", "Nextjs", "Express", "Prisma", "Websocket"],
    githubLink: "https://github.com/bhupeshv29/Create-turboquick-app.git",
    liveLink: "https://turboquick.bhupesh.site/"
  }
 
];

export default function ProjectsComponent() {
  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCardComponent key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
