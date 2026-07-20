"use client";

import {
  FaEnvelope,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaHome,
} from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi2";
import { GoGitPullRequest } from "react-icons/go";
import { Dock, DockIcon } from "./magicui/dock";
import Link from "next/link";

const socialLinks = {
  home: "/",
  email: "mailto:bhupeshverma29bv@gmail.com",
  twitter: "https://x.com/Bhupeshv29",
  linkedin: "https://www.linkedin.com/in/bhupesh-verma-684991198/",
  github: "https://github.com/bhupeshv29",
  cp: "https://codolio.com/profile/bhupeshv29",
  pr: "https://github.com/search?q=is:pr+author:bhupeshv29+-user:bhupeshv29+-repo:piyushgarg-dev/webdev-cohort-opensource+-repo:hiteshchoudhary/open-source-contribution&type=pullrequests",
};

export default function SocialDock() {
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
      <Dock
        iconMagnification={80}
        direction="middle"
        className="bg-black border-gray-400"
      >
        <DockIcon>
          <Link href={socialLinks.home} className="text-slate-300" aria-label="Home">
            <FaHome className="text-2xl" />
          </Link>
        </DockIcon>

        <span className="text-gray-400 mx-1 text-sm" aria-hidden="true">|</span>

        <DockIcon>
          <a href={socialLinks.email} aria-label="Email">
            <FaEnvelope className="text-2xl text-slate-300" />
          </a>
        </DockIcon>

        <DockIcon>
          <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter className="text-2xl text-slate-300" />
          </a>
        </DockIcon>

        <DockIcon>
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="text-2xl text-slate-300" />
          </a>
        </DockIcon>

        <DockIcon>
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub className="text-2xl text-slate-300" />
          </a>
        </DockIcon>

        <span className="text-gray-400 mx-1 text-sm" aria-hidden="true">|</span>

        <DockIcon>
          <a href={socialLinks.cp} target="_blank" rel="noopener noreferrer" aria-label="CP Tracker">
            <HiAcademicCap className="text-2xl text-slate-300" />
          </a>
        </DockIcon>

        <DockIcon>
          <a href={socialLinks.pr} target="_blank" rel="noopener noreferrer" aria-label="Open Source PRs">
            <GoGitPullRequest className="text-2xl text-slate-300" />
          </a>
        </DockIcon>
      </Dock>
    </div>
  );
}
