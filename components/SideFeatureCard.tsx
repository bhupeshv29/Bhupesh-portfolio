// components/SideFeatureCard.tsx

"use client";

import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SideFeatureCardProps {
  title: string;
  subtitle: string;
  icon: ReactNode;
  value?: string | number;
  href?: string;
  target?: string;
  className?: string;
}

export function SideFeatureCard({
  title,
  subtitle,
  icon,
  value,
  href,
  target = "_blank",
  className,
}: SideFeatureCardProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const collapsedWidth = isMobile ? 48 : 64;
  const expandedWidth = isMobile ? 220 : 280;

  const content = (
    <motion.div
      initial="collapsed"
      animate="collapsed"
      whileHover="expanded"
      className={cn(
        "group relative z-10 flex h-12 items-center overflow-hidden rounded-full border border-zinc-800 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black shadow-[0_0_30px_rgba(255,255,255,0.05)] md:h-16",
        className,
      )}
      variants={{
        collapsed: {
          width: collapsedWidth,
        },
        expanded: {
          width: expandedWidth,
        },
      }}
      transition={{
        duration: 0.28,
        ease: "easeInOut",
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_40%)]" />

      <div className="relative flex w-full items-center gap-4 px-2">
        <motion.div
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-zinc-800/80 shadow-inner md:h-12 md:w-12"
          whileHover={{ rotate: 8, scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          {icon}
        </motion.div>

        <motion.div
          className="min-w-0 overflow-hidden whitespace-nowrap"
          variants={{
            collapsed: {
              opacity: 0,
              x: 20,
            },
            expanded: {
              opacity: 1,
              x: 0,
            },
          }}
          transition={{
            duration: 0.2,
            delay: 0.1,
          }}
        >
          <span className="block text-[10px] uppercase tracking-[0.2em] text-zinc-500">
            {subtitle}
          </span>

          <div className="flex items-end gap-2">
            <span className="text-2xl font-bold text-white">
              {value ?? title}
            </span>

            {value && (
              <span className="mb-1 text-sm text-zinc-400">{title}</span>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );

  if (href) {
    return (
      <Link
        href={href}
        target={target}
        rel="noopener noreferrer"
        className="inline-block"
      >
        {content}
      </Link>
    );
  }

  return content;
}