import React, { useState } from "react";
import ViewCode from "@/Models/ViewCode";

const Projectloop = ({pdata, viewModel, setViewModel, setCurrentItem, currentItem}) => {

    // console.log(pdata)
    const {Image, heading, d1, parag  } = pdata;

  return (
    <>
      <div
        className="border border-slate-700 shadow-md shadow-slate-700 p-4 "
        data-aos="zoom-in-up"
      >
        <div className="">
          <img src={Image} alt="" />
        </div>

        <div>
          <h2 className="my-4  uppercase tracking-widest text-xl font-bold">
            {heading}
          </h2>
          <p>
            <div  className="bg-slate-800 md:uppercase  p-4  rounded-lg">
              <ul>
                <li> {d1} </li>
              </ul>
              
            </div>
          </p>
          <p className="my-4 text-justify md:tracking-widest">{parag}</p>
        </div>

        <div className="text-lg tracking-widest text-center bg-slate-800 px-4 py-1 rounded-full" onClick={() => {setCurrentItem(pdata); setViewModel(true);}}>
          <button className="uppercase" >
            view code & website
          </button>
        
        </div>
      </div>
    </>
  );
};

export default Projectloop;
