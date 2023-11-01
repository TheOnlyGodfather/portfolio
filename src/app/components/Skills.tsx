"use client";
import React from "react";
import Skill from "./Skill";
import { motion } from "framer-motion";
import SkillRe from "./SkillRe";
import SkillVi from "./SkillVi";
import SkillSan from "./SkillSan";
import SkillJS from "./SkillJS";
import SkillHTML from "./SkillHTML";
import SkillCSS from "./SkillCSS";
import SkillTCSS from "./SkillTCSS";
import SkillFig from "./SkillFig";
import SkillAI from "./SkillAI";
import SkillFL from "./SkillFL";
import SkillFI from "./SkillFI";
import SkillGIT from "./SkillGIT";
import SkillTS from "./SkillTS";

type Props = {};

const Skills = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[1000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for currency proficiency
      </h3>
      <div className="grid grid-cols-4 gap-5">
        <Skill />
        <SkillRe />
        <SkillVi />
        <SkillSan />
        <SkillJS />
        <SkillHTML />
        <SkillCSS />
        <SkillTCSS />
        <SkillFig />
        <SkillAI />
        <SkillFL />
        <SkillFI />
        <SkillGIT />
        <SkillTS />
      </div>
    </motion.div>
  );
};

export default Skills;
