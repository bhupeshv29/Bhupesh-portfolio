// components/ui/ProjectCard.tsx
import React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";


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
    <Card className="bg-gradient-to-r from-[#0b1016] to-[#3d3e41] text-white rounded-lg shadow-md transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg motion-safe:animate-fadeIn">
      <CardHeader>
        <Image
          src={image}
          alt={title}
          width={600}
          height={192}
          className="w-full h-48 object-cover rounded-t-lg"
          style={{ width: "100%", height: "12rem" }}
        />
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm mb-4">{description}</p>
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
        <div className="flex gap-2">
          <Button asChild variant="secondary" className="text-xs">
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </Button>
          <Button asChild variant="default" className="text-xs">
            <a href={liveLink} target="_blank" rel="noopener noreferrer">
              Live
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}