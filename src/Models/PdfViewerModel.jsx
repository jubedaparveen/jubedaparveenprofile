'use client'
import React, { useState } from "react";
import { GiCrossMark } from "react-icons/gi";
import EducationDetail from "@/Data/EducationData";
import { Document, Page, pdfjs } from "react-pdf";
import PdfViewCard from "@/Component/PdfViewCard";
import { PDFViewer } from '@react-pdf/renderer';



const PdfViewerModal = ({ showPdfModel, setShowPdfModel, currentItem }) => {
  const [iconsShow, seticonsShow] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const { Image } = currentItem;
 
  return (
    <>
      <div
        className={` ${
          showPdfModel ? "block" : "hidden"
        } w-full h-[10rem] bg-[rgba(0,0,0,0.5)] items-center justify-center  fixed  left-0 top-0 z-[999999999999]`}
      >
        <div className="md:p-4 w-[50rem] border border-slate-700 rounded-xl mx-auto bg-black text-white">
          {/* its header  */}
          <div className="my-5  uppercase tracking-widest text-lg md:text-4xl text-center font-bold shadow-inner shadow-slate-500 border border-slate-700 py-2 flex justify-between px-1 md:px-3">
            <h2> View Certificate PDF </h2>
            {iconsShow === false ? (
              <GiCrossMark
                size={20}
                className="text-white border rounded-full p-1 mt-1"
                onClick={() => setShowPdfModel(false)}
              />
            ) : (
              <GiCrossMark
                size={40}
                className="text-white border rounded-full p-1 mt-1"
                onClick={() => setShowPdfModel(false)}
              />
            )}
          </div>

          {/* view PDF here  */}
          <div className=" bg-slate-200 text-black text-2xl my-8">
              <div className="text-center mt-5 p-4 uppercase">
                <h2 className="text-center">{currentItem.title}</h2>
              </div>
              <div className="w-full border border-black ">
                <img src={Image} alt="" className="w-[50rem] h-[50rem]"/>
              </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default PdfViewerModal;
