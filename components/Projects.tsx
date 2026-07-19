import ProjectCardComponent from "./ui/ProjectCard";
import { projects } from "./constants/projects";

export default function ProjectsComponent() {
  return (
    <section id="projects" className="py-16">
      <div className="container px-6">
        <h2 className="text-3xl font-bold flex justify-center mb-10">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {projects.map((project) => (
            <ProjectCardComponent key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
