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
              Innovate Intern
            </h3>
            <p className="sm:text-lg italic">AI & ML Intern</p>
          </div>
          <div>
            <p className="sm:text-right text-base xl:text-lg">
              14th Apr – 26th May 2025
            </p>
          </div>
        </div>

        <ul className="mt-4 text-base xl:text-lg font-medium space-y-2">
          <li>• Completed a 6-week internship focused on real-time object detection and deep learning fundamentals.</li>
          <li>• Developed and deployed an SSD-based object detection model using a custom dataset.</li>
          <li>• Explored bounding box regression, non-max suppression, and model optimization using TensorFlow and Keras.</li>
        </ul>

        <div className="flex justify-between flex-col sm:flex-row text-neutral-300 mt-8">
          <div>
            <h3 className="text-xl xl:text-2xl font-bold text-white">
              Ether Services
            </h3>
            <p className="sm:text-lg italic">Deep Learning Intern</p>
          </div>
          <div>
            <p className="sm:text-right text-base xl:text-lg">
              8th - 26th July 2024
            </p>
          </div>
        </div>

        <ul className="mt-4 text-base xl:text-lg font-medium space-y-2">
          <li>• Gained in-depth knowledge of Deep Learning concepts, including Neural Networks, CNNs, RNNs, and GANs, with a focus on practical applications.</li>
          <li>• Completed hands-on projects, such as object detection using YOLO and sentiment analysis with LSTMs, to reinforce theoretical understanding.</li>
          <li>• Learned to use Deep Learning frameworks and preprocess data efficiently, applying knowledge to build and optimize AI models.</li>
        </ul>
      </WobbleCard>
    </div>
  );
};

export default Experience;
