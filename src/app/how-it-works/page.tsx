"use client";
import { TbListDetails } from "react-icons/tb";
import { MdOutlineColorLens } from "react-icons/md";
import { MdOutlineCloudDownload } from "react-icons/md";
import { Faq } from "../components/Faq";
import Link from "next/link";
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


const HowItWorks= (): JSX.Element => {
    useEffect(() => {
        AOS.init({
          duration: 1200, 
          once: true, 
        });
      }, []);
    const cards = ` text-center rounded-lg m-8 w-80 p-5`
    const iconDiv = `border-4  bg-white border-light_purple rounded-full w-14 h-14 mx-auto flex items-center`
    const btn_classes = `bg-gradient-to-r from-blue_col via-purple_col to-pink_col px-4 py-3 rounded-lg text-white`
    const mainCardDiv = `flex justify-center items-center `
    return (
        <>
            <h1 data-aos="fade-down" className=" text-4xl md:text-6xl text-center font-extrabold mt-6 px-3">RESUME IN 3 <span style={{ fontFamily: "Dancing Script" }} className=' text-purple_col'>STEPS</span></h1>

            <div className={` ${mainCardDiv} CardDiv`}>

                <div  data-aos="fade-up" className={`cardDiv2 ${cards}`} >
                    <div className={`${iconDiv}`} >
                        <MdOutlineColorLens  className="mx-auto w-8 h-8" />
                    </div>
                    <h3 className="font-extrabold my-5" >Customize the Color Theme</h3>
                    <p className="text-gray-500">Select from a range of professional color schemes that best suit your style and make your resume stand out.</p>
                </div>

                <div  data-aos="fade-up" className={`cardDiv1 ${cards}`} >
                    <div className={`${iconDiv}`} >
                        <TbListDetails  className="mx-auto w-8 h-8" />
                    </div>
                    <h3 className="font-extrabold my-5" >Fill in Your Details</h3>
                    <p className="text-gray-500">Easily add your personal information, work experience, education, and skills, ensuring you dont miss any important sections.</p>
                </div>
            </div>


            <div className="flex justify-center items-end CardDiv mb-12">
                <div  data-aos="fade-up" className={`cardDiv1 ${cards}`}>
                    <div className={`${iconDiv}`} >
                        <MdOutlineCloudDownload  className="mx-auto w-8 h-8" />
                    </div>
                    <h3 className="font-extrabold my-5" >Download Your Resume</h3>
                    <p className="text-gray-500">Download your completed resume as a polished PDF, ready to share with employers or print for job interviews.
                    </p>
                </div>

                <div  data-aos="fade-up" className=" mb-8 px-3 relative top-16 w-96 p-4" >
                    <p className="mb-4 text-gray-500" >Build your resume in three easy steps: choose a color theme, add your details, and download a polished PDF, ready to impress!</p>
                  
                    <Link href="/build-your-resume" >
                    <button className={`${btn_classes}`} >Get Started Now</button>
                  </Link>
                </div>
            </div>

            <h1 data-aos="fade-down" className=" text-4xl md:text-6xl px-3 text-center font-extrabold my-12 mt-24">FREQUENTLY ASKED <span style={{ fontFamily: "Dancing Script" }} className='text-purple_col'>QUESTIONS</span></h1>
            <Faq/>
        </>
    );
}
export default HowItWorks;


