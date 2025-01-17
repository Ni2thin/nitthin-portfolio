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
          I am Nitthin, a <b>Machine Learning Engineer</b> and a B.Tech student specializing in <b>Artificial Intelligence & Data Science</b> (CGPA: <b>8.5/10</b>) at Kalaignarkarunanidhi Institute of Technology. My expertise lies in <b>C, OpenCV, Python, and Scikit-learn</b>, with a strong focus on developing innovative and user-centric applications. I am passionate about leveraging technology to solve real-world challenges.
        </p>
        <p className="mt-4 text-neutral-200 mx-auto text-base xl:text-lg font-medium">
          I have gained hands-on experience through internships, including working on <b>YOLO-based object detection</b> and <b>LSTM-powered sentiment analysis</b> during my tenure at <b>Ether Services</b>. At <b>Appex Technologies</b>, I honed my skills in deploying AI models on cloud platforms like <b>AWS</b> and <b>Azure</b>. Notable projects I’ve developed include <b>InvisiImage</b> (a visual steganography tool), <b>Gesture Recognition for RPS</b> (real-time hand gesture recognition using MediaPipe), and <b>Computer Vision Applications</b> (real-time object detection, tracking, and motion analysis with OpenCV).
        </p>
        <p className="mt-4 text-neutral-200 mx-auto text-base xl:text-lg font-medium">
          Alongside my machine learning expertise, I am actively exploring <b>quantum computing</b> with <b>Qiskit</b>. I am proficient in frameworks like <b>TensorFlow</b>, <b>PyTorch</b>, and <b>Django</b>, and I frequently engage in coding contests on <b>CodeChef</b>. With a passion for continuous learning, innovation, and a strong technical foundation, I am driven to make meaningful contributions to the tech industry.
        </p>
      </WobbleCard>
    </div>
  );
};

export default About;
