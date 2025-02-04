import React from "react";
import ExperienceDetail from '../Data/ExperienceData'

const Experience = () => {
  return (
    <div className="border-b border-slate-700" id="Experience">
      <div className="text-white md:mt-16 mt-2 bg-black">
        <h2 className=" text-xl md:text-4xl uppercase font-semibold text-center md:mb-16 mb-2 tracking-widest bg-slate-800 px-4 py-1 rounded-full">
          experience
        </h2>

        <div className="grid grid-cols-1 md:gap-16 gap-3 mb-8">
          {
            ExperienceDetail.map((edata, i)=>(
              <div key={i} className="border border-slate-700 shadow-md shadow-slate-700 p-2 md:p-16"
            data-aos="zoom-in-up">
            <div>
              <h2 className="my-4 uppercase tracking-widest md:text-2xl text-xl font-bold">
                {edata.title}
              </h2>
              <h2 className="my-4 uppercase tracking-widest md:text-2xl text-xl font-bold">
                {edata.heading}
              </h2>
              <p>
                <span className="bg-slate-800 uppercase md:px-4 px-1 py-1 rounded-full md:tracking-wider font-semibold">
                  {edata.date}
                </span>
              </p>
              <p className="my-4 text-justify tracking-widest">
               {edata.parag}
              </p>
            </div>
            <div className="text-lg tracking-widest text-center bg-slate-800 px-4 py-1 rounded-full"></div>
          </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Experience;
