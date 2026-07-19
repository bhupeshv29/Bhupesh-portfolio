import Link from "next/link";
import ProjectCardComponent from "./ui/ProjectCard";
import { projects } from "./constants/projects";

interface ProjectsProps {
  showAll?: boolean;
}

export default function ProjectsComponent({ showAll = false }: ProjectsProps) {
  const displayed = showAll ? projects : projects.filter((p) => p.featured);

  return (
    <section id="projects" className="py-16">
      <div className="container px-6">
        <h2 className="text-3xl font-bold flex justify-center mb-10">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {displayed.map((project) => (
            <ProjectCardComponent key={project.title} {...project} />
          ))}
        </div>
        {!showAll && (
          <div className="flex justify-center mt-10">
            <Link
              href="/projects"
              className="text-sm text-slate-400 hover:text-white transition-colors border border-slate-600 hover:border-[#792CA2] rounded-full px-6 py-2"
            >
              View All Projects &rarr;
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
