import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroudCircles from "./BackgroudCircles";
import luciano from "./../assets/luciano-hero.png";

const Hero = () => {
  const [text] = useTypewriter({
    words: [
      "Hola, soy Luciano Hernandez",
      "Ingeniero en Informatica de vocacion",
      "Me gusta la Musica !!!",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    // space-x-8 
    <div className="h-screen flex flex-col items-center justify-center text-center overflow-hidden pt-7">
      <BackgroudCircles />

      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover my-10"
        src={luciano}
        alt=""
      />

      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          INGENIERO EN INFORMATICA
        </h2>

        <h1 className="text-xl lg:text-6xl font-semibold px-10 ">
          <span>{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-5">
          <a href="#about">
            <button className="heroButton">Sobre Mi</button>
          </a>
          <a href="#experience">
            <button className="heroButton">Experiencia</button>
          </a>
          <a href="#skills">
            <button className="heroButton">Habilidades</button>
          </a>
          <a href="#projects">
            <button className="heroButton">Proyectos</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
