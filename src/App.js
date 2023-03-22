import About from "./components/About";
// import Contaact from "./components/Contaact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";


function App() {
  return (
    <div
      className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar 
      scrollbar-track-slate-400/20 scrollbar-thumb-[#F7AB0A]/80"
    >
      {/* Header */}
      <Header />
      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>
      {/* Experience */}

      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>
      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      {/* projects */}

      <section id="projects" className="snap-start">
        <Projects />
      </section>
      {/* Contact Me */}

      {/* <section id="contact" className="snap-start">
        <Contaact />
      </section> */}

      {/* <a href="#hero" className="">
        <footer className="sticky bottom-5 w-full cursor-pointer ">
          <div className="flex items-center justify-center">
            <img
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              src={lucianoImage}
              alt=""
            />
          </div>
        </footer>
      </a> */}
    </div>
  );
}

export default App;
