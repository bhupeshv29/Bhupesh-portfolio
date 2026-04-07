import { BsEye } from "react-icons/bs";
import { SideFeatureCard } from "./SideFeatureCard";

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
    <div>
      <SideFeatureCard
        title="visits"
        subtitle="Total Visitors"
        icon={<BsEye className="h-6 w-6 text-zinc-300" />}
        value={count.toLocaleString()}
      />
    </div>
  );
}

export default SiteVisitingCount;
