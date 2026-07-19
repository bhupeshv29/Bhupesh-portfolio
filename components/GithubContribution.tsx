"use client";

import GitHubCalendar from "react-github-calendar";

const GITHUB_USERNAME = "bhupeshv29";

const GitHubContributions = () => {
  return (
    <div className="px-4 md:px-8 lg:px-30 overflow-x-auto">
      <GitHubCalendar
        username={GITHUB_USERNAME}
        colorScheme="dark"
        fontSize={12}
        blockSize={12}
        theme={{
          dark: ["#1a0a2e", "#3a1560", "#792CA2", "#9b59b6", "#c084fc"],
        }}
      />
    </div>
  );
};

export default GitHubContributions;