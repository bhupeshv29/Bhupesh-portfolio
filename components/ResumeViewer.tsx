"use client";

import React from "react";
import Link from "next/link";

export default function ResumeViewer() {
  return (
    <>
      <div className="flex items-center gap-4 mb-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="group-hover:-translate-x-1 transition-transform"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
          Back
        </Link>
        <h1 className="text-2xl font-bold text-white">Resume</h1>
      </div>
      <div className="w-full h-[calc(100vh-10rem)] rounded-lg overflow-hidden border border-white/10">
        <iframe
          src="/assets/bhupesh_full_stack.pdf"
          className="w-full h-full"
          title="Bhupesh Verma Resume"
        />
      </div>
    </>
  );
}
