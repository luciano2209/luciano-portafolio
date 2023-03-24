import React from "react";
import { motion } from "framer-motion";

const Skill = ({ directionLeft, skill }) => {
  return (
    <div className="group relative flex flex-col cursor-pointer">
      <motion.img
        // initial={{
        //   x: directionLeft ? -200 : 200,
        //   opacity: 0,
        // }}
        // transition={{ duration: 1 }}
        // whileInView={{ opacity: 1, x: 0 }}
        src={skill.icon}
        className="bg-slate-300 rounded-full border border-gray-500 object-contain w-20 h-20 xl:w-20 xl:h-20 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      {/* <p className="text-center font-semibold">{skill.name}</p> */}
      {/* <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">100%</p>
        </div>
      </div> */}
    </div>
  );
};

export default Skill;
