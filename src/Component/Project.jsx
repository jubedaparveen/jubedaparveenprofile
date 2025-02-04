"use client"
import React, { useState } from "react";
import Image from "next/image";
import ProjectDetail from '../Data/ProjectData';
import Projectloop from "./Projectloop";
import ViewCode from "@/Models/ViewCode";

const Project = () => {

  const [viewModel, setViewModel] = useState(false);
  const [currentItem, setCurrentItem] = useState({});

  return (
    <>
    <div className="border-b border-slate-700" id="Project">
      <div className="text-white mt-4 md:mt-16 bg-black">
        <h2 className="text-xl md:text-4xl uppercase font-semibold text-center md:mb-16 mb-4 tracking-widest bg-slate-800 px-4 py-1 rounded-full">
          Project
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">
          {
            ProjectDetail.map((pdata, i)=>(

             < Projectloop key={i} pdata={pdata} setCurrentItem={setCurrentItem} viewModel={viewModel} setViewModel={setViewModel} />
              
            ))
          }
        </div>
      </div>
    </div>
    <ViewCode viewModel={viewModel} currentItem={currentItem} setViewModel={setViewModel}/>
    </>

  );
};

export default Project;
