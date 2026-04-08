import GitHubContributions from "@/components/GithubContribution";
import Hero from "@/components/Hero";
import ProjectsComponent from "@/components/Projects";
import SkillsComponent from "@/components/Skills";
import Skillsliding from "@/components/SkillslidingBanner";
import Footer from "@/components/Footer";
import { ShootingStars } from "@/components/ShootingStars";
import { StarsBackground } from "@/components/StarsBackground";
import SiteVisitingCount from "@/components/SiteVisitingCount";
import Blogs from "@/components/Blogs";
import DsaQuestionTracker from "@/components/DsaQuestionTracker";

function Home() {
  return (
    <div>
      <div>
        {/* <ShootingStars /> */}
        {/* <StarsBackground starDensity={0.001} /> */}
      </div>
      <div className="fixed top-4 right-4 z-50 ">
        <SiteVisitingCount />
        <Blogs />
        <DsaQuestionTracker />
      </div>
      <Hero />

      <div className="mt-30 mb-10 ">
        <GitHubContributions />
      </div>

      <div className="px-4 md:px-8 lg:px-30">
        <ProjectsComponent />
        <SkillsComponent />
      </div>

      <Skillsliding />
      <Footer />
    </div>
  );
}

export default Home;
