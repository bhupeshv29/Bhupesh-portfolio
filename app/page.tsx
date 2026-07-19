import GitHubContributions from "@/components/GithubContribution";
import Hero from "@/components/Hero";
import ProjectsComponent from "@/components/Projects";
import SkillsComponent from "@/components/Skills";
import Skillsliding from "@/components/SkillslidingBanner";
import Footer from "@/components/Footer";
import FloatingCards from "@/components/FloatingCards";

function Home() {
  return (
    <main>
      <FloatingCards />
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
