import React from "react";
// import { motion } from "framer-motion";

const ExperienceCard = ({ experience }) => {
  console.log(experience)
  // const { company, dates, job, point, stack } = experience;
  return (
    <article
      className="mt-4 flex flex-col p-8 rounded-lg items-center space-y-7 flex-shrink-0 h-[600px] w-[300px] md:w-[600px] xl:w-[900px] xl:h-[500px] xl:mt-28
     snap-center bg-[#292929] hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      {/* <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src={lucianoImg}
      /> */}

      <div className="">
        <h4 className="text-2xl font-light">{experience.job}</h4>
        <p className="font-bold text-2xl mt-1">{experience.company}</p>
        <div className="flex space-x-2 my-2">
          {experience.stack.map((s) => (
            <img className="bg-gray-400 h-7 w-7 xl:h-10 xl:w-10 rounded-full object-contain" src={s} alt="stack" />
          ))}
        </div>
        <p className="uppercase py-5 text-sm xl:text-lg">{experience.dates}</p>
        <ul className="list-disc space-y-3 ml-5 text-xs xl:text-lg">
          {experience.points.map((p) => (
            <li>{p}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
