import React from "react";
import { WobbleCard } from "./ui/wobble-card";
import ScrollFadeIn from "./ui/ScrollFadeIn";

const About: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto my-12 px-6 sm:px-16" id="about">
      <ScrollFadeIn>
        <WobbleCard>
          <h2 className="text-3xl font-extrabold mb-4 text-left font-recoleta">
            About Me
          </h2>
          <div className="mt-4 text-neutral-200 mx-auto text-base xl:text-lg font-medium">
            <p>
              I'm Nitthin Kumar, a B.Tech student in Artificial Intelligence and Data Science at Kalaignarkarunanidhi Institute of Technology, Coimbatore. I'm deeply intrigued by how machines interpret the visual world—and I'm exploring this through hands-on computer vision projects and model building.
            </p>
            
            <p className="mt-4">
              I've trained an SSD-based object detection model on a custom dataset, implementing bounding box regression and non-max suppression in TensorFlow. I've also worked with R-CNN on the PASCAL VOC2007 dataset to understand region-based detection pipelines and multi-stage classification.
            </p>
            
            <p className="mt-4">
              For image enhancement, I developed a U-Net autoencoder to colorize black-and-white cartoon images, achieving an SSIM of 0.917006 and an MSE of 0.006378, with performance improved through hyperparameter tuning and custom preprocessing. I also built a real-time Rock-Paper-Scissors game using OpenCV and MediaPipe, optimizing gesture classification to ensure responsiveness under dynamic lighting and background noise.
            </p>
          </div>
        </WobbleCard>
      </ScrollFadeIn>
    </div>
  );
};

export default About;
