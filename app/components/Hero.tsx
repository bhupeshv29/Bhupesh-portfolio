
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Projects from './Projects';
import Contact from './Contact';
import Skills from './Skills';
export default function HeroComponent() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Hi, I'm Bhupesh Verma
            <span className="block text-blue-600">Full Stack Developer</span>
          </h1>
          <p className="text-xl text-slate-400 mb-8">
           I’m a full-stack developer from India. 
           I love turning ideas into working web apps. Whether you need help building a new project or improving an old one, I’m here to write clean and simple code to make your ideas real.

          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/projects" 
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              View My Work
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-900 text-gray-900 dark:border-white dark:text-white rounded-lg hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
      <Projects/>
      <Skills/>
      <Contact/>
    </section>

  );
}