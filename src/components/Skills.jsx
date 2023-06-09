import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { dataSkills } from "../data/skillsData";

const Skills = () => {
  return (
    <motion.div
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-2xl xl:px-10 min-h-screen justify-center xl:space-y-0 
    mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Habilidades
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Habilidades
      </h3>

      <div className="grid grid-cols-4 gap-2 xl:gap-5 xl:pt-32">
        {dataSkills.map((skill) => (
          <Skill skill={skill} />
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
