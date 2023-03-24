import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { dataProject } from "../data/projectsData";

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row
     max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 xl:top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        Proyectos
      </h3>
      <div
        className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory scrollbar
       scrollbar-track-slate-400/20 scrollbar-thumb-[#F7AB0A]/80 z-20"
      >
        {dataProject.map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;
