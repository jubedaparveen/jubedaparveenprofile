"use client";
import { GiCrossMark } from "react-icons/gi";
import Link from "next/link";
import React, { useState } from "react";

const ViewCode = ({ viewModel, setViewModel, currentItem }) => {
  const [iconsShow, seticonsShow] = useState();

  // console.log("console from model=>", currentItem);

  const { heading, Image, d1, parag, href, linkweblive } = currentItem;
  // console.log("git hub",linkgit)

  return (
    <div
      className={` ${
        viewModel ? "block" : "hidden"
      } w-[90%] h-[20rem] bg-[rgba(0,0,0,0.5)] items-center justify-center  fixed  left-0 top-0 z-[999999999999]`}
    >
      <div className="md:p-3 w-[60%] border mx-auto bg-black">
        <div className=" p-3 text-white">
          <div className="mb-3  uppercase tracking-widest  md:text-2xl text-center font-bold shadow-inner shadow-slate-500 border border-slate-700 py-1 flex justify-between px-1 md:px-3">
            <h2>{currentItem.heading} </h2>
            {iconsShow === false ? (
              <GiCrossMark
                size={20}
                className="text-white border rounded-full p-1 mt-1"
                onClick={() => setViewModel(false)}
              />
            ) : (
              <GiCrossMark
                size={23}
                className="text-white border rounded-full p-1 mt-1"
                onClick={() => setViewModel(false)}
              />
            )}
          </div>
          <div className="hover:shadow-inner hover:shadow-amber-100 border overflow-scroll md:h-[20rem]">
            <img src={currentItem.Image} alt="" />
          </div>

          <div className="md:my-6 my-2 ">
            <p>
              <span className="bg-slate-800 md:uppercase md:px-4 md:py-2 rounded-full font-semibold border">
                {currentItem.d1}
              </span>
            </p>
            <p className="md:my-5 my-2 px-2 py-4 md:text-justify md:tracking-widest shadow-sm shadow-slate-100 borde ">
              {currentItem.parag}
            </p>
          </div>

          <div className="w-full flex md:flex-row flex-col justify-center md:gap-24 gap-2 ">
            <Link href={`${currentItem.linkgit}`} target="blank ">
              <button className="md:uppercase md:text-lg md:tracking-widest text-center bg-slate-800 md:px-4 px-1 py-1 rounded-full border hover:shadow-lg hover:shadow-amber-200  ">
                View Code on Github
              </button>
            </Link>
            <Link href={`${currentItem.linkweblive}`} target="blank" >
              <button className="md:uppercase md:text-lg md:tracking-widest text-center bg-slate-800 md:px-4 px-1 py-1 rounded-full border hover:shadow-lg hover:shadow-amber-200">
                View Live Website
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCode;
