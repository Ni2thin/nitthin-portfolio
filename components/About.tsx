import React from "react";
import { WobbleCard } from "./ui/wobble-card";

const About: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto my-12 px-6 sm:px-16" id="about">
      <WobbleCard>
        <h2 className="text-3xl font-extrabold mb-4 text-left font-recoleta">
          About Me
        </h2>
        <p className="mt-4 text-neutral-200 mx-auto text-base xl:text-lg font-medium">
          I am Nitthin, a <b>machine learning engineer</b> with a strong passion for{" "}
          <b>AI & ML</b>. Currently, I am pursuing a B.tech. in Artificial Intelligence & Data Science
          at Kalaignarkarunanidhi Institute of Technology (CGPA: <b>8.5/10</b>). I specialize in{" "}
          <b>C, OpenCv, Python, and Scikit-learn </b>, building efficient and user-centric applications.
          <br />
          My journey includes hands-on experiences during internships, such as:
          <ul className="list-disc ml-5 mt-2">
            <li>
              Deep learning projects at <b>Ether Services</b>, working on YOLO-based object detection and LSTM-powered sentiment analysis.
            </li>
            <li>
              Deploying AI models on cloud platforms like AWS and Azure during training at <b>Appex Technologies</b>.
            </li>
          </ul>
          <br />
          Some of my notable projects include:
          <ul className="list-disc ml-5 mt-2">
            <li><b>InvisiImage</b>: A visual steganography tool for securely hiding messages in images.</li>
            <li>
              <b>Gesture Recognition for RPS</b>: A Rock-Paper-Scissors game with real-time hand gesture recognition using MediaPipe.
            </li>
            <li>
              <b>Computer Vision Applications</b>: Real-time object detection, tracking, and motion analysis with OpenCV.
            </li>
          </ul>
          <br />
          I am proficient in frameworks like TensorFlow, PyTorch, and Django, and actively participate in coding contests on CodeChef. I bring a blend of technical skills, innovation, and continuous learning to every endeavor.
        </p>
      </WobbleCard>
    </div>
  );
};

export default About;
