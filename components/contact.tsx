"use client";

import {
  FaEnvelope,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaHome,
} from "react-icons/fa";
import { Dock, DockIcon } from "./magicui/dock";
import Link from "next/link";

export default function SocialDock() {
  return (
    <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50  ">
      <Dock
        iconMagnification={80}
        direction="middle"
        className="bg-black border-gray-400"
      >
        <DockIcon>
          <Link href="/" className="text-slate-300">
            <FaHome className="text-2xl" />
          </Link>
        </DockIcon>

        <span className="text-gray-400 mx-1 text-sm">|</span>

        <DockIcon>
          <a
            href="mailto:bhupeshverma29bv@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope className="text-2xl text-slate-300 " />
          </a>
        </DockIcon>

        <DockIcon>
          <a
            href="https://x.com/Bhupesh_29"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-2xl text-slate-300" />
          </a>
        </DockIcon>

        <DockIcon>
          <a
            href="https://www.linkedin.com/in/bhupesh-verma-684991198/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl text-slate-300" />
          </a>
        </DockIcon>

        <DockIcon>
          <a
            href="https://github.com/bhupeshv29"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-2xl text-slate-300" />
          </a>
        </DockIcon>
      </Dock>
    </div>
  );
}
