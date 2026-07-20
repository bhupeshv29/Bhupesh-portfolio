import type { Metadata } from "next";
import ResumeViewer from "@/components/ResumeViewer";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Resume of Bhupesh Verma — Full Stack Developer specializing in backend systems, infrastructure, and applied AI.",
  openGraph: {
    title: "Resume | Bhupesh Verma",
    description:
      "Resume of Bhupesh Verma — Full Stack Developer specializing in backend systems, infrastructure, and applied AI.",
  },
};

function ResumePage() {
  return (
    <main>
      <div className="pt-24 px-4 md:px-8 lg:px-30 min-h-screen">
        <ResumeViewer />
      </div>
    </main>
  );
}

export default ResumePage;
