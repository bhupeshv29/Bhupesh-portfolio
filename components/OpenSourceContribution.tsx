import { SideFeatureCard } from "./SideFeatureCard";
import { GoGitPullRequest } from "react-icons/go";

function OpenSourceContribution() {
  return (
    <div>
      <SideFeatureCard
        title="Raised"
        subtitle="os contribution"
        icon={<GoGitPullRequest className="h-6 w-6 text-zinc-300" />}
        value="Pr"
        href=""
        className="top-1"
      />
    </div>
  );
}

export default OpenSourceContribution;
