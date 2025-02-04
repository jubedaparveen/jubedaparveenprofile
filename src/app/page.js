// import {  } from "@/Component/ui/background-lines";
import Contact from "@/Component/Contact";
import Education from "@/Component/Education";
import Experience from "@/Component/Experience";
import Footer from "@/Component/Footer";
import Project from "@/Component/Project";
import Skills from "@/Component/Skills";
import Vortexs from "@/Component/Vortexs";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className=" bg-black ">
        <Vortexs  />
        <div className="mx-auto max-w-[85%] ">
        
          <Project />
          <Skills />
          <Education />
          <Experience />
          <Contact />
          <Footer />
        </div>
      </div>
    
    </>
  );
}
