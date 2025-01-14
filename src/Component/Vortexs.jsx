"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import JubedaPic from '../../public/images/jubedapic.png'
import { FaDownload } from "react-icons/fa6";
import { Vortex } from "@/Component/ui/vortex";

const Vortexs = () => {

  const text = [`"Full Stack Developer"`, `"UX/UI Designer"`];
  const [displayedText, setDisplayedText] = useState("");
  const [indexNo, setIndexNo] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(()=>{
    const currentText = text[indexNo];
    let typingSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentText.length) {
      typingSpeed = 1000; // Pause before deleting
      setIsDeleting(true);
    } else if (isDeleting && charIndex === 0) {
      typingSpeed = 500; // Pause before typing the next word
      setIsDeleting(false);
      setIndexNo((prev) => (prev + 1) % text.length); // Cycle through texts
    }

    const timeout = setTimeout(() => {
      setDisplayedText(currentText.slice(0, charIndex));
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, typingSpeed);

    return () => clearTimeout(timeout);
  },[charIndex, isDeleting, indexNo, text])

  return (
    <>
      <div className="w-full mx-auto   h-screen overflow-hidden">
        <Vortex
          backgroundColor="black"
          rangeY={800}
          particleCount={500}
          baseHue={120}
          className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
        >
          <div className="flex flex-col w-[75%]  sm:flex-row items-center justify-between  mt-6">
            <div>
              <h2 className="text-white text-2xl md:text-6xl font-bold ">
                Hello, I'M  
              </h2>
              <h2 className="text-white text-2xl md:text-6xl font-semibold mt-2">Jubeda Parveen</h2>
              <h2 className="text-white text-2xl md:text-5xl font-semibold my-8">I'M a {displayedText}"</h2>
              <p className="text-white text-sm md:text-2xl max-w-2xl my-16 tracking-widest  ">
              "Full-Stack Developer [ MERN Stack ] | HTML5, CSS3, JavaScript, React.js, Next.js, Node.js, Express.js, MongoDB | UI/UX Enthusiast & Problem Solver" | Search Engine Optimization | Content Writer |
              </p>
              <button className="px-8 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white uppercase tracking-wider shadow-[0px_2px_0px_0px_#FFFFFF40_inset] ">
                Download resume <FaDownload className="inline ms-2"/>
              </button>
            </div>
            <div className=" rounded-full bg-black/80 shadow-xl shadow-slate-800 ">
              <Image src={JubedaPic} className="w-[40rem] h-[40rem] rounded-full"/>
            </div>
          </div>
        </Vortex>
      </div>
    </>
  );
};

export default Vortexs;
