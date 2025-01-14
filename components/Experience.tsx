import React from "react";
import { WobbleCard } from "./ui/wobble-card";

const Experience: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto my-12 px-6 sm:px-16">
      <WobbleCard containerClassName="bg-blue-900 ">
        <h2 className="text-3xl font-extrabold mb-4 text-left font-recoleta">
          Experience
        </h2>

        <div className="flex justify-between flex-col sm:flex-row text-neutral-300">
          <div>
            <h3 className="text-xl xl:text-2xl font-bold text-white">
              Ether Services
            </h3>
            <p className="sm:text-lg italic">Deep Learning Intern</p>
          </div>
          <div>
            <p className="sm:text-right text-base xl:text-lg">
              July 2024
            </p>
          </div>
        </div>

        <p className="mt-4 text-base xl:text-lg font-medium">
          Acquired hands-on experience with Neural Networks, CNNs, RNNs, and GANs, applying these concepts in projects like object detection with YOLO and sentiment analysis using LSTMs. Learned to preprocess data and optimize AI models for practical deployment.
        </p>

        <div className="flex justify-between flex-col sm:flex-row text-neutral-300 mt-8">
          <div>
            <h3 className="text-xl xl:text-2xl font-bold text-white">
              Appex Technologies
            </h3>
            <p className="sm:text-lg italic">ML Training</p>
          </div>
          <div>
            <p className="sm:text-right text-base xl:text-lg">
              February 2024
            </p>
          </div>
        </div>

        <p className="mt-4 text-base xl:text-lg font-medium">
          Enhanced my understanding of deploying AI models on cloud platforms such as AWS and Azure. Explored techniques for creating scalable, efficient, and secure cloud-based machine learning solutions.
        </p>
      </WobbleCard>
    </div>
  );
};

export default Experience;
