"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Blogs from "./Blogs";
import DsaQuestionTracker from "./DsaQuestionTracker";
import OpenSourceContribution from "./OpenSourceContribution";

export default function FloatingCards() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger button - mobile only */}
      <button
        onClick={() => setOpen((o) => !o)}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="fixed top-30 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 shadow-lg md:hidden"
        aria-label="Toggle menu"
      >
        {open ? (
          <X className="h-5 w-5 text-white" />
        ) : (
          <Menu className="h-5 w-5 text-white" />
        )}
      </button>

      {/* Cards - mobile: toggle, desktop: always visible */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            className="fixed top-44 right-4 z-50 flex flex-col items-end gap-3 md:hidden"
          >
            <Blogs />
            <DsaQuestionTracker />
            <OpenSourceContribution />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="hidden md:fixed md:bottom-auto md:right-4 md:top-36 md:z-50 md:flex md:flex-col md:items-end md:gap-4">
        <Blogs />
        <DsaQuestionTracker />
        <OpenSourceContribution />
      </div>
    </>
  );
}
