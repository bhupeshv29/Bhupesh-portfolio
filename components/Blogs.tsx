import Link from "next/link";
import { BsPencilSquare } from "react-icons/bs";
import { SideFeatureCard } from "./SideFeatureCard";

function Blogs() {
  return (
    <div>
      <SideFeatureCard
        title="Hashnode"
        subtitle="Read My"
        icon={<BsPencilSquare className="h-6 w-6 text-zinc-300" />}
        value="Blogs"
        href="https://bhupeshv29.hashnode.dev/"
        className="top-1"
      />
    </div>
  );
}

export default Blogs;
