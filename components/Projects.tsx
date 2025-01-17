import { FaGithub } from "react-icons/fa6";
import Image from "next/image";
import ComputerVision from "@/public/images/cv main.png";
import Steganography from "@public/images/ invisi-image main.png;
import GestureRPS from "@/public/images/RPS main.png";
import Link from "next/link";

const projects = [
  {
    title: "Computer Vision Applications",
    description:
      "Projects covering advanced computer vision techniques like object detection, motion tracking, and facial recognition, showcasing automation and human-computer interaction.",
    image: ComputerVision,
    liveLink: "https://cv-applications.vercel.app/",
    githubLink: "https://github.com/Ni2thin/30DaysOfComputerVision",
    tags: ["OpenCV", "Python", "Automation", "AI Models"],
  },

  {
    title: "InvisiImage",
    description:
      "A lightweight and interactive visual steganography tool for securely hiding messages within images and extracting them effortlessly.",
    image: Steganography,
    liveLink: "https://invisi-image.vercel.app",
    githubLink: "https://github.com/Ni2thin/InvisiImage-A-Visual-Steganography-Tool",
    tags: ["JavaScript", "HTML", "CSS", "Web Security"],
  },

  {
    title: "Gesture Recognition for RPS",
    description:
      "A Rock-Paper-Scissors game featuring real-time hand gesture recognition using OpenCV and MediaPipe, offering seamless user interaction.",
    image: GestureRPS,
    githubLink: "https://github.com/Ni2thin/GestuRPS",
    tags: ["OpenCV", "MediaPipe", "Python", "Real-time AI"],
  },

];

const Projects = () => {
  return (
    <div className="max-w-6xl mx-auto mt-12 xl:mt-20 mb-12 px-6 sm:px-16">
      <div className="font-extrabold text-3xl xl:text-4xl font-recoleta text-center">
        Projects
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-foreground border-neutral-600 border-2 rounded-xl p-4"
          >
            <div className="overflow-hidden rounded-lg">
              <Link href={project.liveLink} target="_blank">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg hover:scale-110 transition-transform duration-500"
                />
              </Link>
            </div>
            <div className="flex justify-between items-center gap-2 pt-4 pb-2 px-3">
              <Link
                href={project.liveLink}
                className="text-2xl font-bold font-inter"
              >
                {project.title}
              </Link>
              <Link href={project.githubLink} target="_blank">
                <FaGithub className="hover:scale-110 size-6" />
              </Link>
            </div>
            <div className="px-3 text-neutral-400 italic">
              {project.description}
            </div>
            <div className="flex flex-wrap gap-2 px-3 pt-4 text-xs lg:text-sm font-medium mb-2 items-center justify-start">
              {project.tags.map((tag, tagIndex) => (
                <div
                  key={tagIndex}
                  className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full"
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
