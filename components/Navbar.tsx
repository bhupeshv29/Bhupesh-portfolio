"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { RainbowButton } from "@/components/magicui/rainbow-button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
];

const socialLinks = {
  github: "https://github.com/bhupeshv29",
  linkedin: "https://www.linkedin.com/in/bhupesh-verma-684991198/",
  twitter: "https://x.com/Bhupeshv29",
};

const resumeLink =
  "https://drive.google.com/file/d/17x2b5v0dnDGogpNSkSuEeAMDrxwx9Der/view?usp=sharing";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-lg font-bold text-white tracking-tight hover:text-blue-400 transition-colors"
        >
          bhupesh<span className="text-blue-500">.dev</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-slate-400 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="text-lg" />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-lg" />
            </a>
            <a
              href={socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter className="text-lg" />
            </a>
          </div>

          <a href={resumeLink} target="_blank" rel="noopener noreferrer">
            <RainbowButton variant="outline" size="sm">
              Resume
            </RainbowButton>
          </a>
        </div>
      </div>
    </nav>
  );
}
