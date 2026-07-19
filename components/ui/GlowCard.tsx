import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  rounded?: "xl" | "2xl";
}

export default function GlowCard({
  children,
  className,
  rounded = "xl",
}: GlowCardProps) {
  const roundedClass = rounded === "2xl" ? "rounded-2xl" : "rounded-xl";

  return (
    <div className={cn("relative group h-full", className)}>
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br from-[#0d4b91] via-[#0a60b8] to-[#041c3b] blur-lg opacity-25 group-hover:opacity-40 transition duration-500",
          roundedClass
        )}
      />
      <div
        className={cn(
          "relative z-10 h-full p-[2px] bg-black bg-opacity-30 backdrop-blur-md",
          roundedClass
        )}
      >
        {children}
      </div>
    </div>
  );
}
