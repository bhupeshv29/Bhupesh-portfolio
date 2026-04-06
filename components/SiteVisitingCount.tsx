import { BsEye } from "react-icons/bs";

async function SiteVisitingCount() {
  const workspace = process.env.NEXT_PUBLIC_COUNTER_WORKSPACE;
  const counterSlug = process.env.NEXT_PUBLIC_COUNTER_SLUG;

  const res = await fetch(
    `https://api.counterapi.dev/v2/${workspace}/${counterSlug}/up`,
    {
      cache: "no-store",
    },
  );

  const result = await res.json();
  const count = result?.data?.up_count;

  return (
    <div className="group relative w-fit overflow-hidden rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black px-5 py-4 shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-all duration-300 hover:scale-[1.02] hover:border-zinc-700">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_40%)]" />

      <div className="relative flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-800/80 shadow-inner">
          <BsEye className="h-6 w-6 text-zinc-300" />
        </div>

        <div className="flex flex-col">
          <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">
            Total Visitors
          </span>

          <div className="flex items-end gap-2">
            <span className="text-3xl font-bold text-white">
              {count.toLocaleString()}
            </span>
            <span className="mb-1 text-sm text-zinc-400">visits</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SiteVisitingCount;
