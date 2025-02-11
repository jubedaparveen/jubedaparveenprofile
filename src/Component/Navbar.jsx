"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { GiCrossedBones } from "react-icons/gi";

//image
import Logo from "../../public/images/Logoo.png";

const Navbar = () => {
  const [closeHamburger, setcloseHumburger] = useState(false);
  const [changeLogo, setchangeLogo] = useState(true);
  const [mobileMenuOpen, setmobileMenuOpen] = useState(false);

  return (
    <div className="px-8">
      <div className="bg-black  text-white py- md:h-[4rem] w-[100%] fixed top-0 left-0 right-0 z-50 shadow-lg shadow-slate-800">
        <div className=" max-w-screen-xl mx-auto ">
          <div className="flex justify-between items-center px-8 ">
            <div className="">
              {changeLogo === true ? (
                <Image src={Logo} width={70} height={70} alt="" />
              ) : (
                <Image src={Logo} width={90} height={90} alt="" />
              )}
            </div>

            {/* ------------------------ Menubar ---------------------- */}
            <div className="uppercase md:tracking-widest md:text-base hidden md:block me-8">
              <ul className="md:flex gap-4 md:gap-14">
                <Link href={"#Vortexs"}>
                  <li className=" hover:text-rose-400 rounded-full ">Home</li>
                </Link>
                <Link href={"#Project"}>
                  <li className=" rounded-full hover:text-rose-400  ">
                    Projects
                  </li>
                </Link>
                <Link href={"#Skills"}>
                  <li className=" rounded-full hover:text-rose-400  ">
                    Skills
                  </li>
                </Link>
                <Link href={"#Education"}>
                  <li className=" rounded-full hover:text-rose-400  ">
                    Education
                  </li>
                </Link>
                <Link href={"#Experience"}>
                  <li className=" rounded-full hover:text-rose-400  ">
                    Experience
                  </li>
                </Link>
                <Link href={"#Contact"}>
                  <li className=" rounded-full hover:text-rose-400  ">
                    Contact
                  </li>
                </Link>
              </ul>
            </div>

            {/* ---------------- Mobile hamburger -------------------------- */}
            {closeHamburger === false ? (
              <div className="text-white text-xl border p-1 rounded-lg md:hidden block ">
                <FaBars
                  onClick={() => {
                    setmobileMenuOpen(!mobileMenuOpen);
                    setcloseHumburger(true);
                  }}/>
              </div>
            ) : (
              <div className="text-white text-xl border p-1 rounded-lg md:hidden block ">
                <GiCrossedBones
                  onClick={() => {
                    setcloseHumburger(false);
                    setmobileMenuOpen(false);
                  }}/>
              </div>
            )}
          </div>
        </div>

        {/* ------------------------ mobile menu ---------------------- */}
        <div className="  ">
          <ul className={ ` ${ !mobileMenuOpen ? 'top-[-300px]' : 'top-14' }  absolute  text-white bg-black w-[100%] py-[2rem] px-[2rem] text-xl uppercase md:hidden transition-all duration-500 ease-in`}>
            <Link href={"#Vortexs"}>
              <li className="mt-3 text-center hover:text-rose-400 rounded-full ">Home</li>
            </Link>
            <Link href={"#Project"}>
              <li className="mt-3 text-center rounded-full hover:text-rose-400  ">Projects</li>
            </Link>
            <Link href={"#Skills"}>
              <li className="mt-3 text-center rounded-full hover:text-rose-400  ">Skills</li>
            </Link>
            <Link href={"#Education"}>
              <li className="mt-3 text-center rounded-full hover:text-rose-400  ">Education</li>
            </Link>
            <Link href={"#Experience"}>
              <li className="mt-3 text-center rounded-full hover:text-rose-400  ">
                Experience
              </li>
            </Link>
            <Link href={"#Contact"}>
              <li className="mt-3 text-center rounded-full hover:text-rose-400  ">Contact</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
