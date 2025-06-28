import React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { RainbowButton } from "../magicui/rainbow-button";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink: string;
  liveLink: string;
}

export default function ProjectCardComponent({
  title,
  description,
  image,
  technologies,
  githubLink,
  liveLink,
}: ProjectProps) {
  return (
    <div className="relative group h-full">
      {/* Soft blue glowing aura */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#0d4b91] via-[#0a60b8] to-[#041c3b] blur-lg opacity-25 group-hover:opacity-40 transition duration-500"></div>

      {/* Card with inner padding & full height */}
      <div className="relative z-10 h-full rounded-2xl p-[2px] bg-black bg-opacity-30 backdrop-blur-md">
        <Card className="h-full flex flex-col justify-between bg-gradient-to-r from-[#0b1016] to-[#010151] text-white rounded-2xl shadow-md transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
          <CardHeader className="p-0">
            <Image
              src={image}
              alt={title}
              width={600}
              height={192}
              className="w-full h-48 object-cover rounded-t-2xl"
              style={{ width: "100%", height: "12rem" }}
            />
          </CardHeader>
          <CardContent className="p-4 flex flex-col flex-grow justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-blue-400">
                {title}
              </h3>
              <p className="text-sm mb-4 text-gray-300">{description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-800 text-xs px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-2 mt-auto">
              <a href={githubLink} target="_blank" rel="noopener noreferrer">
                <RainbowButton variant="outline">GitHub</RainbowButton>
              </a>
              <a href={liveLink} target="_blank" rel="noopener noreferrer">
                <RainbowButton>Live</RainbowButton>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}