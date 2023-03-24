import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div
      className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 
          items-center justify-center p-20 md:p-44 h-screen "
    >
      <img src={project.image} alt="" className=" xl:w-96" />
      <div className="space-y-10 px-0 md:px-10 max-w-6xl">
        <h4 className="text-2xl xl:text-4xl font-semibold text-center">{project.name}</h4>
        <div className="flex space-x-2 my-2 justify-center">
          {project.stack.map((s) => (
            <img className="bg-gray-600 h-7 w-7 xl:h-10 xl:w-10 rounded-full object-contain" src={s} alt="stack" />
          ))}
        </div>
        <p className="text-sm xl:text-lg text-center md:text-left">
          {project.description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
