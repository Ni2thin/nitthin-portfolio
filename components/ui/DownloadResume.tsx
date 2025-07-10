import Link from "next/link";
import React from "react";
import { IoCloudDownloadOutline } from "react-icons/io5";

const DownloadResume: React.FC = () => {
  return (
    <Link
      href="https://drive.google.com/file/d/1DmWBFVK6Svm1UCXP_K47iIZZ68pL_JMb/view?usp=sharing"
      className="flex items-center justify-center px-3 py-2 bg-white/20 backdrop-blur-md text-white rounded-md border border-white/10 shadow-lg transition-transform duration-300 hover:bg-white/30 hover:scale-105 hover:cursor-pointer font-medium"
      target="_blank"
    >
      <div className="flex items-center text-sm lg:text-base 3xl:text-lg">
        <IoCloudDownloadOutline className="mr-2 " />
        <span>View CV</span>
      </div>
    </Link>
  );
};

export default DownloadResume;
