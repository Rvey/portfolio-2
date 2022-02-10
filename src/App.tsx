import { Profiler, useRef, useState } from "react";
import "./App.css";
import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import NavBar from "./components/NavBar";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import Project from "./components/Projects";
import Skills from "./components/Skills";
import ContactMe from "./components/ContactMe";
function App() {
  const parallax = useRef<IParallax>(null!);
  return (
    <div className="h-screen bg-black">
      <Parallax pages={5} ref={parallax}>
        <ParallaxLayer
          offset={0}
          speed={2.5}
          className="snap-normal"
          onClick={() => parallax.current.scrollTo(1)}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <section className="flex flex-col justify-between h-full overflow-hidden snap-always">
            <NavBar />
            <Hero />
            <Nav />
          </section>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={2}
          className="bg-gray-500 opacity-20"
        />

        <ParallaxLayer
          offset={1}
          speed={0.5}
          onClick={() => parallax.current.scrollTo(2)}
          style={{
            alignItems: "center",
            color: "white",
          }}
        >
          <AboutMe />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={2}
          className="bg-gray-500 opacity-20"
        />
        <ParallaxLayer
          offset={2}
          speed={0.5}
          onClick={() => parallax.current.scrollTo(3)}
          style={{
            alignItems: "center",
            color: "white",
          }}
        >
          <Project />
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={2}
          className="bg-gray-500 opacity-20"
        />
        <ParallaxLayer
          offset={3}
          speed={0.5}
          style={{
            alignItems: "center",
            color: "white",
          }}
        >
          <Skills />
        </ParallaxLayer>

        <ParallaxLayer
          offset={4}
          speed={2}
          className="bg-gray-500 opacity-20"
        />
        <ParallaxLayer
          offset={4}
          speed={0.5}
          style={{
            alignItems: "center",
            color: "white",
          }}
        >
          <ContactMe />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
