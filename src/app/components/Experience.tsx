"use client";
import { motion } from "framer-motion";
import React from "react";
import ExperienceCard from "./ExperienceCard";
import ExperienceCardBC from "./ExperienceCardBC";
import ExperienceCardSol from "./ExperienceCardSol";
import ExperienceCardTut from "./ExperienceCardTut";
import ExperienceCardCr from "./ExperienceCardCr";
import ExperienceCardAM from "./ExperienceCardAM";
import ExperienceCardMing from "./ExperienceCardMing";
import ExperienceCardChang from "./ExperienceCardChang";

type Props = {};

const Experience = (props: Props) => {
  return (
    <motion.div className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80 scrollbar-thin ">
        {/* experienceCards */}
        <ExperienceCardCr />
        <ExperienceCardTut />
        <ExperienceCardSol />
        <ExperienceCardBC />
        <ExperienceCardChang />
        <ExperienceCardMing />
        <ExperienceCardAM />

        {/* experienceCards */}
        {/* experienceCards */}
      </div>
    </motion.div>
  );
};

export default Experience;
