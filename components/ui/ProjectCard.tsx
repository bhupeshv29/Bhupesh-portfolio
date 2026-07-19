import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { RainbowButton } from "../magicui/rainbow-button";
import GlowCard from "./GlowCard";
import { Project } from "../constants/projects";

export default function ProjectCardComponent({
  title,
  description,
  image,
  technologies,
  githubLink,
  liveLink,
}: Project) {
  return (
    <GlowCard rounded="2xl">
      <Card className="h-full flex flex-col justify-between bg-gradient-to-r from-[#151a24] to-[#2d1a48] text-white rounded-2xl shadow-md transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
        <CardHeader className="p-0">
          <Image
            src={image}
            alt={title}
            width={600}
            height={192}
            className="w-full h-48 object-cover rounded-t-2xl"
            style={{ width: "100%", height: "auto" }}
          />
        </CardHeader>
        <CardContent className="p-4 flex flex-col flex-grow justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-[#9b59b6]">
              {title}
            </h3>
            <p className="text-sm mb-4 text-gray-300">{description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {technologies.map((tech) => (
                <span
                  key={tech}
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
            {liveLink && (
              <a href={liveLink} target="_blank" rel="noopener noreferrer">
                <RainbowButton>Live</RainbowButton>
              </a>
            )}
          </div>
        </CardContent>
      </Card>
    </GlowCard>
  );
}
