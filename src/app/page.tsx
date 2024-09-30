import Image from "next/image";
import { PiAlignCenterVerticalSimpleBold } from "react-icons/pi";
import { MdOutlineColorLens, MdOutlineDesignServices } from "react-icons/md";
import { FiDownloadCloud } from "react-icons/fi";
import Link from "next/link";
import React from "react";


export default function Home() {
  let icons = "w-10 h-10";
  let divCard = "p-3 rounded-lg text-white border border-white bg-l_white flex flex-col w-80";
  let btn_classes = `bg-gradient-to-r from-blue_col via-purple_col to-pink_col px-4 py-3 rounded-lg text-white`

  let CardContent = [
    {
      id: 1,
      icon: <PiAlignCenterVerticalSimpleBold className={`${icons}`} />,
      subHeading: "Easy to Use Interface",
      para: "Create a professional resume effortlessly in just a few steps."
    },
    {
      id:2,
      icon: <MdOutlineDesignServices className={`${icons}`} />,
      subHeading: "Pre-designed Sections",
      para: "Add or remove essential sections like Education, Work Experience, and Skills."
    },
    {
      id:3,
      icon: <MdOutlineColorLens className={`${icons}`} />,
      subHeading: "Multiple Color Themes",
      para: "Personalize your resume with various color options."
    },
    {
      id:4,
      icon: <FiDownloadCloud className={`${icons}`} />,
      subHeading: "Instant PDF Download",
      para: "Generate and download your resume as a high-quality PDF instantly."
    }
  ]

  return (
    <>
      <div className="mx-auto my-12" style={{ width: "80%", position: "relative" }} >

        <div className="blurcircle" style={{ position: "absolute", right: "10px", top: "10px" }} ></div>

        <h1 className="font-black mb-12 text-black border-0 text-4xl md:text-7xl">
  DESIGN YOUR PERFECT <br />
  RESUME IN  <span className="headingdiv"> <span style={{ fontFamily: "Dancing Script" }}  className="text text-purple_col">MINUTES</span></span>
</h1>




        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-4 mx-5 place-content-end mb-10">
          <div>

            <Image
             style={{ width: "80%" }}
                    src="/herosection_img.png"
                    alt="herosection img"
                    className='desktop:w-10 w-8'
                    width={500}
                    height={500}
                />
          </div>

          <div className="flex items-end" >
            <div>
              <p className="mx-auto" >Craft a standout resume tailored to your career needs. Our user-friendly platform makes it quick, easy, and free to showcase your skills and experiences.
                Craft a standout resume tailored to your career needs. Our user-friendly platform makes it quick, easy, and free to showcase your skills and experiences.
              </p>
        

              <Link href="/build-your-resume" >
              <button className={`mt-5 ${btn_classes} `} >Get Started Now
                
              </button>
                  </Link>



            </div>
          </div>

        </div>

      </div>


      {/* Section 2  */}
      <div style={{ background: "url('imgsec.png')", backgroundPosition: "right", backgroundSize: "cover", backgroundRepeat: "no-repeat" }} className="py-10 my-12 " >
        <div className="mx-auto w-5/6" >
          <h1 className="font-extrabold mb-8 text-white text-black border-0  text-4xl md:text-6xl">FEATURES OF <br />OUR WEBSITE</h1>

          <p className="text-gray-300 mb-5">Easily create resumes with customizable templates, color themes, and free PDF downloads,
            all while keeping your information secure.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4  w-fit">
            {
              CardContent.map((crntEle) => {
                return (

                  <div key={crntEle.id} className={`${divCard}  inset-0 backdrop-blur-lg bg-white/30`}>
                    <div  >{crntEle.icon}</div>
                    <h3 className="font-bold my-3">{crntEle.subHeading}</h3>
                    <p className="text-gray-300">{crntEle.para}</p>
                  </div>

                )
              })
            }

          </div>
        </div>
      </div>
    </>
  );
}
