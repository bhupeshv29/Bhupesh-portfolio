import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.0.100"],
  images: {
    formats: ["image/webp", "image/avif"],
    qualities: [75],
    localPatterns: [{ pathname: "/**", search: "" }],
  },
};

export default nextConfig;
