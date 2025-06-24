import GitHubContributions from "@/components/GithubContribution";
import Hero from "@/components/Hero";
import ProjectsComponent from "@/components/Projects";
import SkillsComponent from "@/components/Skills";
import Skillsliding from "@/components/SkillslidingBanner";
import Footer from "@/components/Footer";

function Home() {
  return (
    <div>
      {/* <div className="min-h-screen flex flex-col justify-center items-center bg-[#0D0D19] text-white"> */}
        <Hero />          
        <GitHubContributions />

        <div className="px-4 md:px-8 lg:px-30">
          <ProjectsComponent />
          <SkillsComponent />
        </div>
      {/* </div> */}

      <Skillsliding />
      <Footer />
    </div>
  );
}

export default Home;
