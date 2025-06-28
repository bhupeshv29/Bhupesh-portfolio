import React from 'react'
import { RainbowButton } from "@/components/magicui/rainbow-button";
import Image from 'next/image';
import bg from "@/public/assets/hero-bg.svg";
import bgsup from "@/public/assets/hero-bg-support.svg";


const Hero = () => {
  return (
    <div>
        <div className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-6 flex justify-center items-center">
           <Image
          src={bg}
          alt="Background"
          className="absolute bottom-0 w-full md:w-5/6 object-contain -z-10"
        />
        <Image
          src={bgsup}
          alt="Background"
          className="absolute top-0 left-0 w-[800px] object-contain -z-10"
        />
        <Image
          src={bgsup}
          alt="Background"
          className="absolute top-0 right-0 w-[800px] object-contain -z-10 scale-x-[-1]"
        />
          <div className="max-w-3xl text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
              Hi, I&#39;m Bhupesh Verma
              <span className="block text-blue-500 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                Full Stack Developer
              </span>
            </h1>
            <p className="text-sm text-slate-400 mb-8 drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)] mx-10 ">
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
    </div>
  )
}

export default Hero