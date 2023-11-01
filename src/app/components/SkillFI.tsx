"use client";

import { motion } from "framer-motion";
import React from "react";

type Props = {
  directionLeft?: boolean;
};

const SkillFI = ({ directionLeft }: Props) => {
  return (
    <div className="group relative flex cursor-pointer ">
      <motion.img
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        src="/firebase.png"
        alt="reactlogo"
        className="rounded-full border border-gray-500 object-contain w-24 h-24 md:w-28 md:h-28  xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-[rgb(36,36,36)] h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-white opacity-100">20%</p>
        </div>
      </div>
    </div>
  );
};

export default SkillFI;
