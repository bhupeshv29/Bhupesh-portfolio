import GitHubContributions from "@/components/GithubContribution";
import Hero from "@/components/Hero";
import ProjectsComponent from "@/components/Projects";
import SkillsComponent from "@/components/Skills";
import Skillsliding from "@/components/SkillslidingBanner";
import Footer from "@/components/Footer";
import Blogs from "@/components/Blogs";
import DsaQuestionTracker from "@/components/DsaQuestionTracker";
import OpenSourceContribution from "@/components/OpenSourceContribution";

function Home() {
  return (
    <main>
      <div className="fixed top-4 right-4 z-50 flex flex-col items-end gap-4">
        <Blogs />
        <DsaQuestionTracker />
        <OpenSourceContribution />
      </div>
      <Hero />

      <div className="mt-30 mb-10">
        <GitHubContributions />
      </div>

      <div className="px-4 md:px-8 lg:px-30">
        <ProjectsComponent />
        <SkillsComponent />
      </div>

      <Skillsliding />
      <Footer />
    </main>
  );
}

export default Home;
