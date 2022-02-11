import { Profiler, useRef, useState } from "react";
import "./App.css";
import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import NavBar from "./components/NavBar";
import Project from "./components/Projects";
import Skills from "./components/Skills";
import ContactMe from "./components/ContactMe";
import {Divider , DividerInv} from "./components/Divider";
function App() {
  return (
    <div className="bg-fixed body">
      <div className="fixed top-[25%] left-[2em]">
        <Nav />
      </div>
      <div className="flex flex-col justify-between h-full">
        <NavBar />
        <Hero />
        <div className="h-32"></div>
      </div>
      
        <Divider />
      <div className="bg-gray-100 ">
        <AboutMe />
      </div>
      <DividerInv />
      <div className="bg-black bg-opacity-30">
        <Project />
      <Divider />
      </div>

      <div className="bg-gray-100">
        <Skills />
      </div>
      <div className="hidden lg:block">

      <DividerInv />
      </div>
      <div className="bg-black bg-opacity-30">
        <ContactMe />
      </div>
    </div>
  );
}

export default App;
