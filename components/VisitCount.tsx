import { useEffect, useState } from "react";

const ViewCounter = () => {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    fetch("https://api.countapi.xyz/hit/bhupeshv29.dev/profile")
      .then((res) => res.json())
      .then((data) => setViews(data.value));
  }, []);

  return (
    <p className="text-sm text-gray-400 text-center mt-4">
      👀 {views !== null ? `Profile Views: ${views}` : "Loading..."}
    </p>
  );
};

export default ViewCounter;