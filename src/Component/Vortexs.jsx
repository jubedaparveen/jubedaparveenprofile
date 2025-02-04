"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
//image
import JubedaPic from "../../public/images/jubedapic.png";
//icons
import { FaDownload } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";


import { Vortex } from "@/Component/ui/vortex";
import Link from "next/link";

const Vortexs = () => {
  const text = [`Full Stack Developer`, `UX / UI Designer`, 'React JS Developer'];
  const [displayedText, setDisplayedText] = useState("");
  const [indexNo, setIndexNo] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const DownloadPdfUrl = "http://localhost:3000/resume-jubedaparveen.pdf";

  useEffect(() => {
    const currentText = text[indexNo];
    let typingSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentText.length) {
      typingSpeed = 1000; // Pause before deleting
      setIsDeleting(true);
    } else if (isDeleting && charIndex === 0) {
      typingSpeed = 400; // Pause before typing the next word
      setIsDeleting(false);
      setIndexNo((prev) => (prev + 1) % text.length); // Cycle through texts
    }

    const timeout = setTimeout(() => {
      setDisplayedText(currentText.slice(0, charIndex));
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, indexNo, text]);

  // Function to handle the resume download
  const handleDownload = (url) => {
    const fileName = url.split("/").pop();
    const PdfUrl = document.createElement("a");
    PdfUrl.href = DownloadPdfUrl;
    PdfUrl.setAttribute("download", fileName);
    document.body.appendChild(PdfUrl);
    PdfUrl.click();
    document.body.removeChild(PdfUrl);
  };

  return (
    <>
      <div
        className="w-full mx-auto h-screen overflow-hidden shadow-sm shadow-slate-800 "
        id="Vortexs relative "
      >
        <Vortex
          backgroundColor="black"
          rangeY={800}
          particleCount={500}
          baseHue={120}
          className="flex items-center flex-col md:flex-row justify-center px-2 md:px-10  py-4 w-full h-full"
        >
          <div className="flex flex-col w-[60%] md:w-[75%]  md:flex-row items-center justify-between  mt-6">
            <div>
              <h2 className="text-white text-2xl md:text-4xl font-bold ">
                Hello, I'M
              </h2>
              <h2 className="text-white text-2xl md:text-4xl font-semibold mt-2">
                Jubeda Parveen
              </h2>

              <h2 className="text-white text-2xl md:text-5xl font-semibold md:my-8">
                I'm a <span className="text-red-500 md:text-4xl">{displayedText} </span>{" "}
                <span className="text-[#fef08a]">|</span>{" "}
              </h2>
              <p className="text-white text-sm md:text-2xl max-w-2xl md:my-10 tracking-widest  my-5">
                "Full-Stack Developer [ MERN Stack ] | HTML5, CSS3, JavaScript,
                React.js, Next.js, Node.js, Express.js, MongoDB | UI/UX
                Enthusiast & Problem Solver" | Search Engine Optimization |
                Content Writer |
              </p>
              <div className="flex ">
                <span className="w-8 p-2 text-white h-7 border rounded-full flex justify-center items-center me-2 mt-1 bg-slate-700">
                  <SiGmail size={30} className="inline" />
                </span>
                <h2 className="text-white md:text-2xl  font-semibold">
                  jubedaparveenh@gmail.com
                </h2>
              </div>
              <div className="flex mt-2 md:mb-10 mb-4">
                <span className="w-8 p-2 text-white h-7 border rounded-full flex justify-center items-center me-2 mt-1 bg-slate-700">
                <FaPhoneAlt size={30} className="inline"/>
                </span>
                <h2 className="text-white md:text-2xl font-semibold">
                  9406680070
                </h2>
              </div>

              <button
                type="button"
                className=" px-2 md:px-8 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white uppercase md:tracking-wider shadow-[0px_2px_0px_0px_#FFFFFF40_inset] "
                onClick={() => {
                  handleDownload(DownloadPdfUrl);
                }}
              >
                Download resume <FaDownload className="inline ms-2" />
              </button>
            </div>
            <div className=" rounded-full bg-black/80 shadow-xl shadow-slate-800">
              <Image
                src={JubedaPic}
                className="md:w-[40rem] md:mt-20 md:h-[40rem] w-96 h-auto rounded-full"
              />
            </div>
          </div>
          <div className="text-white absolute md:left-40 left-2 bottom-56 md:after:content-[' '] md:after:h-40 md:after:w-1 md:after:bg-white md:after:inline-block ">
            <ul>
              <Link
                href={"https://www.linkedin.com/in/jubeda-parveen-12520920a/"}
              >
                {" "}
                <li className="hover:bg-slate-600 border h-8 w-8 rounded-full flex justify-center  items-center">
                  {" "}
                  <FaLinkedinIn />{" "}
                </li>{" "}
              </Link>
              <Link href={"https://github.com/jubedaparveen"}>
                {" "}
                <li className="md:my-8 hover:bg-slate-600 border h-8 w-8 rounded-full flex justify-center  items-center">
                  {" "}
                  <FaGithub />{" "}
                </li>{" "}
              </Link>
              {/* <Link href={'/'}> <li className="hover:bg-slate-600 border h-8 w-8 rounded-full flex justify-center  items-center"> <FaFacebookF /> </li> </Link>
              <Link href={'/'}> <li className="md:mt-8 hover:bg-slate-600 border h-8 w-8 rounded-full flex justify-center  items-center mb-5"> <SiGmail /> </li> </Link> */}
            </ul>
          </div>
        </Vortex>
      </div>
    </>
  );
};

export default Vortexs;
