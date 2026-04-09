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
        href="https://github.com/search?q=is:pr+author:bhupeshv29+-user:bhupeshv29+-repo:piyushgarg-dev/webdev-cohort-opensource+-repo:hiteshchoudhary/open-source-contribution&type=pullrequests"
        className="top-1"
      />
    </div>
  );
}

export default OpenSourceContribution;
