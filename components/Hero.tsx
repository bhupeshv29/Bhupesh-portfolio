import React from "react";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import Image from "next/image";
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
            priority
            width={1440}
            height={818}
            className="absolute bottom-0 w-full md:w-5/6 object-contain -z-10"
          />
          <Image
            src={bgsup}
            alt="Decorative background"
            width={853}
            height={730}
            loading="eager"
            className="absolute top-0 left-0 w-[800px] object-contain -z-10"
          />
          <Image
            src={bgsup}
            alt="Decorative background"
            width={853}
            height={730}
            loading="eager"
            className="absolute top-0 right-0 w-[800px] object-contain -z-10 scale-x-[-1]"
          />
          <div className="max-w-3xl text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
              Hi, I&#39;m Bhupesh Verma
              <span className="block text-blue-500 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                Full Stack Engineer
              </span>
            </h1>
            <p className="text-xs text-slate-400 mb-4 drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)] mx-10 tracking-widest uppercase">
              Backend Systems · Infrastructure · Applied AI
            </p>
            <p className="text-sm text-slate-400 mb-8 drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)] mx-10 ">
              Building production-grade software across the frontend, backend,
              infrastructure, and AI stack, with a focus on scalable systems,
              real-time applications, and developer tools.
            </p>
            <div>
              <a
                href="https://drive.google.com/file/d/17x2b5v0dnDGogpNSkSuEeAMDrxwx9Der/view?usp=sharing"
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
  );
};

export default Hero;
