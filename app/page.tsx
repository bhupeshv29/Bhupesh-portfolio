import ProjectsComponent from "./components/Projects";
import SkillsComponent from "./components/Skills";

function Home() {

  

  return (
   <div className="min-h-screen flex flex-col justify-center items-center">
  <div className="pt-32 pb-16 md:pt-40 md:pb-24">
    <div className="container mx-auto px-6 flex justify-center items-center">
      <div className="max-w-3xl text-center"> 
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          Hi, I'm Bhupesh Verma
          <span className="block text-blue-600">Full Stack Developer</span>
        </h1>
        <p className="text-xl text-slate-400 mb-8">
          I’m a full-stack developer from India. 
          I love turning ideas into working web apps. Whether you need help building a new project or improving an old one, I’m here to write clean and simple code to make your ideas real.
        </p>
      </div>
    </div>     

  </div>    
    <ProjectsComponent/>
    <SkillsComponent/>

</div>

//   <div className="container mx-auto px-6 text-center">
//     <p>© {new Date().getFullYear()} Bhupesh.dev. All rights reserved.</p>
//   </div>
// </footer>
//       </div>
  );
}

export default Home;
