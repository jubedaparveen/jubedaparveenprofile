import React from "react";
import {
  Page,
  Text,
  View,
  Image,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";

const PdfViewCard = ({edata, showPdfModel, setShowPdfModel ,  setCurrentItem, currentItem}) => {

  console.log(edata)
  return (
    <>
      <div
        className="border border-slate-700 shadow-md shadow-slate-700 md:p-16 p-4"
        data-aos="zoom-in-up"
      >
        <div>
          <h2 className="my-4 uppercase tracking-widest md:text-2xl font-bold">
            {edata.title}
          </h2>
          <p>
            <span className="bg-slate-800 uppercase px-4 py-1 rounded-full tracking-wider font-semibold">
              {edata.Date}
            </span>
          </p>
          <p className="my-4 text-justify tracking-widest">{edata.parag}</p>
          <p className="my-4">
            <span className="bg-slate-800 uppercase md:px-4 px-1 py-1 rounded-full tracking-wider font-semibold me-4 mb-3">
              skills :
            </span>
            {edata.skills}
          </p>
        </div>
        <div
          className="text-lg tracking-widest text-center bg-slate-800 px-4 py-1 rounded-full cursor-pointer "
          onClick={() => { {setCurrentItem(edata); setShowPdfModel(true);}
          }}
        >
          <button className="uppercase">view certificate</button>
        </div>
      </div>
    </>
  );
};

export default PdfViewCard;
