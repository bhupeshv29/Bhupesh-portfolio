import type { Metadata } from "next";
import SkillsComponent from "@/components/Skills";

export const metadata: Metadata = {
  title: "Skills & Tech Stack",
  description:
    "Technical skills and tools used by Bhupesh Verma — React, Next.js, Node.js, Python, TypeScript, Docker, AWS, PostgreSQL, and more.",
  openGraph: {
    title: "Skills & Tech Stack | Bhupesh Verma",
    description:
      "Technical skills and tools used by Bhupesh Verma — React, Next.js, Node.js, Python, TypeScript, Docker, AWS, and more.",
  },
};

function Skills() {
  return (
    <main>
      <div className="pt-24 px-4 md:px-8 lg:px-30">
        <SkillsComponent />
      </div>
    </main>
  );
}

export default Skills;
