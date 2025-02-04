"use client";
import React, { useState } from "react";
import EducationDetail from "../Data/EducationData";
import PdfViewCard from "./PdfViewCard";
import PdfViewerModal from "@/Models/PdfViewerModel";


const Education = () => {
  const [showPdfModel, setShowPdfModel] = useState(false);
   const [currentItem, setCurrentItem] = useState({});
  

  return (
    <div className="border-b border-slate-700" id="Education">
      <div className="text-white md:mt-16 mt-2 bg-black">
        <h2 className="md:text-4xl text-xl uppercase font-semibold text-center md:mb-16 mb-2 tracking-widest bg-slate-800 px-4 py-1 rounded-full">
          education
        </h2>

        <div className="grid grid-cols-1 md:gap-16 gap-3 mb-8">
          {EducationDetail.map((edata, i) => (
            <PdfViewCard edata={edata} showPdfModel={showPdfModel} setShowPdfModel={setShowPdfModel} setCurrentItem={setCurrentItem} />
          ))}
        </div>

      </div>
      <PdfViewerModal showPdfModel={showPdfModel} setShowPdfModel={setShowPdfModel} currentItem={currentItem} />
    </div>
  );
};

export default Education;
