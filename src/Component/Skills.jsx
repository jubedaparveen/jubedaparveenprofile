"use client"
import React, { useEffect } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';

import { IoLogoHtml5 } from "react-icons/io";
import { SiCss3 } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { TbBrandNextjs } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { SiMongoosedotws } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { TbBrandVscode } from "react-icons/tb";
import { SiPostman } from "react-icons/si";

const Skills = () => {

  useEffect(()=>{
    AOS.init();
  },[])

  return (
    <div className="border-b border-slate-700" id="Skills">
      <div className="text-white mt-4 md:mt-16 bg-black pb-8" id="Skills">
        <h2 className="text-xl md:text-4xl uppercase font-semibold text-center mb-4 md:mb-16 tracking-widest bg-slate-800 px-4 py-1 rounded-full">
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:mb-8">
          
          <div className="border border-slate-700 shadow-md shadow-slate-700 p-2" data-aos="zoom-in-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
            <div>
              <h2 className="text-center mb-6 uppercase tracking-widest md:text-2xl text-xl font-bold">
                Frontend
              </h2>
              <div className=" grid grid-cols-2 gap-2 text-center">
                <div className="bg-slate-800 uppercase md:px-4 py-3 md:rounded-full tracking-wider font-semibold md:text-lg">
                  <IoLogoHtml5 size={20} className="inline me-4" />
                  html5
                </div>
                <div className="bg-slate-800 uppercase px-4 py-3 md:rounded-full tracking-wider font-semibold md:text-lg">
                  <SiCss3 size={20} className="inline me-4"/>css3
                </div>
                <div className="bg-slate-800 uppercase px-4 py-3 md:rounded-full tracking-wider font-semibold md:text-lg">
                <IoLogoJavascript size={20} className="inline me-4" />Javascript
                </div>
                <div className="bg-slate-800 uppercase px-4 py-3 md:rounded-full tracking-wider font-semibold md:text-lg">
                <FaBootstrap size={20} className="inline me-4" />bootstrap
                </div>
                <div className="bg-slate-800 uppercase px-4 py-3 md:rounded-full tracking-wider font-semibold md:text-base">
                  <SiTailwindcss size={20} className="inline me-4"/>tailwind css
                </div>
                <div className="bg-slate-800 uppercase px-4 py-3 md:rounded-full tracking-wider font-semibold md:text-lg">
                <FaReact size={20} className="inline items-center me-4" /> react js
                </div>
                <div className="bg-slate-800 uppercase md:px-4 py-3 md:rounded-full tracking-wider font-semibold md:text-lg">
                <TbBrandNextjs size={20} className="inline me-4" /> Next js
                </div>
              </div>
            </div>
          </div>

          <div className="border border-slate-700 shadow-md shadow-slate-700 p-4" data-aos="zoom-in-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
            <div>
              <h2 className="text-center mb-6 uppercase tracking-widest md:text-2xl text-xl font-bold">
                Backend
              </h2>
              <div className=" grid grid-cols-2 gap-4 text-center">
                <div className="bg-slate-800 uppercase px-4 py-3 md:rounded-full tracking-wider font-semibold md:text-lg">
                <FaNodeJs size={20} className="inline me-4" /> node js
                </div>
                <div className="bg-slate-800 uppercase px-4 py-3 md:rounded-full tracking-wider font-semibold md:text-lg">
                <SiExpress size={20} className="inline me-4" />express js
                </div>
                <div className="bg-slate-800 uppercase px-4 py-3 md:rounded-full tracking-wider font-semibold md:text-lg">
                <SiMongodb size={20} className="inline me-4" />mongodb
                </div>
                <div className="bg-slate-800 uppercase px-4 py-3 md:rounded-full tracking-wider font-semibold md:text-lg">
                <SiMongoosedotws size={20} className="inline me-4" /> mongoose
                </div>
              </div>
            </div>
          </div>

          <div className="border border-slate-700 shadow-md shadow-slate-700 p-4" data-aos="zoom-in-up" data-aos-offset="300" data-aos-easing="ease-in-sine">
            <div>
              <h2 className="text-center mb-6 uppercase tracking-widest md:text-2xl text-xl font-bold">
                tools
              </h2>
              <div className=" grid grid-cols-2 gap-4 text-center">
                <div className="bg-slate-800 uppercase md:px-4 py-2 md:py-3 md:rounded-full tracking-wider font-semibold md:text-lg">
                <FaGitAlt size={20} className="inline me-4" />git
                </div>
                <div className="bg-slate-800 uppercase px-4 py-3 md:rounded-full tracking-wider font-semibold md:text-lg">
                <FaGithub size={20} className="inline me-4" />github
                </div>
                <div className="bg-slate-800 uppercase px-4 py-3 md:rounded-full tracking-wider font-semibold md:text-lg">
                <TbBrandVscode size={20} className="inline me-4" />vs code
                </div>
                <div className="bg-slate-800 uppercase px-4 py-3 md:rounded-full tracking-wider font-semibold md:text-lg">
                <SiPostman size={20} className="inline me-4" />postman
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
