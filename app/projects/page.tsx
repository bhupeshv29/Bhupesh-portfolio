import ProjectsComponent from "@/components/Projects";

function Projects() {
  return (
    <main>
      <div className="pt-24">
        <ProjectsComponent showAll={true} />
      </div>
    </main>
  );
}

export default Projects;
