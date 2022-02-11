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
  // const parallax = useRef<IParallax>(null!);
  return (
    <div className="h-screen bg-black snap-y snap-always	">
      {/* <Parallax pages={5}>
      <ParallaxLayer
          offset={0}
          speed={2}
          className="bg-gray-500 opacity-20"
        />
        <ParallaxLayer
          offset={0}
          speed={2.5}
          // className="snap-normal"
          // onClick={() => parallax.current.scrollTo(1)}
        > */}
      <section className="flex flex-col justify-between h-full snap-start">
        <NavBar />
        <Hero />
        <Nav />
      </section>
    
      {/* </ParallaxLayer> */}

      {/* <ParallaxLayer
          offset={1}
          speed={2}
          className="bg-gray-500 opacity-20"
        />

        <ParallaxLayer
          offset={1}
          speed={0.5}
          // onClick={() => parallax.current.scrollTo(2)}
          style={{
            alignItems: "center",
            color: "white",
          }}
        > */}
        
      <div className="snap-start bg-gray-100">
        <AboutMe />
      </div>
 
      {/* </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={2}
          className="bg-gray-500 opacity-20"
        /> */}
      {/* <ParallaxLayer
          offset={2}
          speed={0.5}
          // onClick={() => parallax.current.scrollTo(3)}
          style={{
            alignItems: "center",
            // color: "white",
          }}
        > */}
      <div className="bg-black">
        <Project />
      </div>
      {/* </ParallaxLayer>

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
            // color: "white",
          }}
        > */}
      <div className="bg-gray-100">
        <Skills />
      </div>
      {/* </ParallaxLayer>

        <ParallaxLayer
          offset={4}
          speed={2}
          className="bg-gray-500 opacity-20"
        /> */}
      {/* <ParallaxLayer
          offset={4}
          speed={0.5}
          style={{
            alignItems: "center",
            // color: "white",
          }}
        > */}
      <div className="bg-black">
        <ContactMe />
      </div>
      {/* </ParallaxLayer>
      </Parallax> */}
    </div>
  );
}

export default App;
