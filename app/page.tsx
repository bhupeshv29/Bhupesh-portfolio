import ProjectsComponent from "@/components/Projects";
import SkillsComponent from "@/components/Skills";
import { RainbowButton } from "@/components/magicui/rainbow-button";

function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#0D0D19] text-white">
      <div className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-6 flex justify-center items-center">
          <div className="max-w-3xl text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
              Hi, I&#39;m Bhupesh Verma
              <span className="block text-blue-500 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                Full Stack Developer
              </span>
            </h1>
            <p className="text-xl text-slate-400 mb-8 drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]">
              I’m a full-stack developer from India. I love turning ideas into
              working web apps. Whether you need help building a new project or
              improving an old one, I’m here to write clean and simple code to
              make your ideas real.
            </p>
            <div>
              <a
                href="https://drive.google.com/file/d/1lOP0YIaOi1GBSab2-0Q3vZm9VD-xqHTs/view?usp=sharing"
                target="_blank"
                download="bhupesh_resume.pdf"
              >
                <RainbowButton variant="outline" size="lg">
                  Resume
                </RainbowButton>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 md:px-8 lg:px-30">
        <ProjectsComponent />
      </div>
      <div className="px-4 md:px-8 lg:px-30">
        <SkillsComponent />
      </div>
      <div className="container mx-auto px-6 text-center text-slate-400 text-sm mt-8">
        <p>© {new Date().getFullYear()} Bhupesh.dev All rights reserved.</p>
        <span className="my-2 block">Made with ❤️ by Bhupesh Verma</span>
      </div>
    </div>
  );
}

export default Home;
