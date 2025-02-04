import React from "react";
import Image from "next/image";
import Link from "next/link";
//image
import Logo from "../../public/images/Logoo.png";

const Navbar = () => {
  return (
    <div className="">
      <div className="bg-black  text-white py-2 h-[5.3rem] w-[100vw] fixed top-0 left-0 right-0 z-50  ">
        <div className=" max-w-screen-xl mx-auto ">
          <div className="flex justify-between items-center ">
            <div>
              <Image src={Logo} width={100} height={100} alt="" />
            </div>

            <div className="uppercase tracking-widest text-lg ">
              <ul className="flex gap-14">
                <Link href={"#Vortexs"}>
                  <li className="hover:bg-slate-300 hover:text-slate-950 rounded-full  hover:px-1 ">Home</li>
                </Link>
                <Link href={"#Project"}>
                  <li className="hover:bg-slate-300 rounded-full hover:text-slate-950 hover:px-2 ">Projects</li>
                </Link>
                <Link href={"#Skills"}>
                  <li className="hover:bg-slate-300 rounded-full hover:text-slate-950 hover:px-2 ">Skills</li>
                </Link>
                <Link href={"#Education"}>
                  <li className="hover:bg-slate-300 rounded-full hover:text-slate-950 hover:px-2 ">Education</li>
                </Link>
                <Link href={"#Experience"}>
                  <li className="hover:bg-slate-300 rounded-full hover:text-slate-950 hover:px-2 ">Experience</li>
                </Link>
                <Link href={"#Contact"}>
                  <li className="hover:bg-slate-300 rounded-full hover:text-slate-950 hover:px-2 ">Contact</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Navbar;
