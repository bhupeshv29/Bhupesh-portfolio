import { HiAcademicCap } from "react-icons/hi2";
import { SideFeatureCard } from "./SideFeatureCard";

function DsaQuestionTracker() {
  return (
    <div>
      <SideFeatureCard
        title="Codolio"
        value="Cp"
        subtitle="Tracker"
        icon={<HiAcademicCap className="h-6 w-6 text-zinc-300" />}
        href="https://codolio.com/profile/bhupeshv29"
        className="top-2"
      />
    </div>
  );
}

export default DsaQuestionTracker;
