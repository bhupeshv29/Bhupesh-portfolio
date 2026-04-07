import Link from "next/link";
import { ReactNode } from "react";
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
  const content = (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_40%)]" />

      <div className="relative flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-800/80 shadow-inner">
          {icon}
        </div>

        <div className="flex flex-col">
          <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">
            {subtitle}
          </span>

          <div className="flex items-end gap-2">
            <span className="text-3xl font-bold text-white">
              {value ?? title}
            </span>

            {value && (
              <span className="mb-1 text-sm text-zinc-400">{title}</span>
            )}
          </div>
        </div>
      </div>
    </>
  );

  const commonClassName = cn(
    "group relative block w-[260px] overflow-hidden rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black px-5 py-4 shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-all duration-300 hover:scale-[1.02] hover:border-zinc-700",
    className,
  );

  if (href) {
    return (
      <Link
        href={href}
        target={target}
        rel="noopener noreferrer"
        className={commonClassName}
      >
        {content}
      </Link>
    );
  }

  return <div className={commonClassName}>{content}</div>;
}