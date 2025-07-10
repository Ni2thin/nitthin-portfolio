import React from "react";
import { WobbleCard } from "./ui/wobble-card";
import ScrollFadeIn from "./ui/ScrollFadeIn";

const Publications: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto my-12 px-6 sm:px-16" id="publications">
      <ScrollFadeIn>
        <WobbleCard>
          <h2 className="text-3xl font-extrabold mb-4 text-left font-recoleta">
            Publications
          </h2>
          <div className="mt-4 text-white mx-auto text-base xl:text-lg font-medium relative z-10">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-2">
                <a 
                  href="https://ieeexplore.ieee.org/document/10866260" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-black transition-colors duration-200 cursor-pointer"
                >
                  Detection of Deviations from Lambda-CDM in Dark Matter Power Spectrum Using Cosmology Informed Neural Networks
                </a>
              </h3>
              <p className="text-sm text-gray-300 mb-2">
                Presented at DELCON-2024, IEEE Conference ID: 9881197
              </p>
              <p className="text-sm text-gray-300 mb-3">
                3rd Int&apos;l Conf. on Advancing Technology for Sustainable Development, Nov 21–23, 2024, BVICAM, New Delhi
              </p>
              <p className="text-gray-200">
                Developed a Cosmology-Informed Neural Network (CINN) to classify ΛCDM vs. non-ΛCDM dark matter power spectra using data from ReACT. Achieved ~97% accuracy and successfully constrained cosmological parameters like f_R0 and w_0, showcasing CINNs as effective tools for model classification in cosmology.
              </p>
            </div>
          </div>
        </WobbleCard>
      </ScrollFadeIn>
    </div>
  );
};

export default Publications; 