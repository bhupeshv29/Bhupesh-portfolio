"use client";

import GitHubCalendar from "react-github-calendar";


const GitHubContributions = () => {
  return (
    <div className="px-4 md:px-8 lg:px-30 overflow-x-auto ">
      <GitHubCalendar
        username="bhupeshv29"
        colorScheme="dark"
        fontSize={12}
        blockSize={12}
        theme={{
          dark: [
             "#0f172a", 
              "#1e3a8a", 
              "#2563eb", 
              "#3b82f6", 
              "#60a5fa" 
          ],
        }}
      />
    </div>
  );
};

export default GitHubContributions;