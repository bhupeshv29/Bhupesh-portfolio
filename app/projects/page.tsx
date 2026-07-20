import type { Metadata } from "next";
import ProjectsComponent from "@/components/Projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Featured projects by Bhupesh Verma — full-stack applications, backend systems, and developer tools built with Next.js, React, Node.js, and Python.",
  openGraph: {
    title: "Projects | Bhupesh Verma",
    description:
      "Featured projects by Bhupesh Verma — full-stack applications, backend systems, and developer tools.",
  },
};

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
