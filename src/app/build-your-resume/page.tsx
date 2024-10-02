"use client";
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { FaPlus } from "react-icons/fa6";
import { MdLocalPhone } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { TiLocation } from "react-icons/ti";
import Image from "next/image";
import React from 'react';

const BuildYourResume= (): JSX.Element => {

    const [display, setDisplay] = useState<boolean>(true);
    const [colorChanger, setColor] = useState("rgba(124, 13, 255, 1)");

    interface ColorInterface {
        theme: string
    }

    const colors: ColorInterface[] = [
        { theme: "rgba(124, 13, 255, 1)" },
        { theme: "#f4d642" }, { theme: "#043280" },
        { theme: "#179297" }, { theme: "#b39fa0" },
        { theme: "#ff6245" }, { theme: "#00aee1" },
        { theme: "#365989" }, { theme: "#f9a43a" }
    ];
    const [imgLink, setImgLink] = useState<string>("");
    const [skillInp, setSkillInp] = useState<string>("");
    const [skillData, setSkillData] = useState<string[]>([]);
    const [showSkills, setShowSkills] = useState<boolean>(false);
    interface experienceInpType {
        roleInp: string,
        instituteInp: string,
        startYearInp: string,
        endYearInp: string,
        descriptionInp: string
    }

    const [experienceInp, setExperienceInp] = useState<experienceInpType>({
        roleInp: "",
        instituteInp: "",
        startYearInp: "",
        endYearInp: "",
        descriptionInp: ""
    });
    const [experienceData, setExperienceData] = useState<experienceInpType[]>([]);

    const handleInp2 = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const { name, value } = e.target;
        setExperienceInp((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        setExperienceData((prev) => [...prev, experienceInp]);
        setExperienceInp({
            roleInp: "",
            instituteInp: "",
            startYearInp: "",
            endYearInp: "",
            descriptionInp: ""
        });
    };

    interface InpType {
        nameInp: string,
        professionInp: string,
        aboutInp: string,
        languageInp: string,
        matricInp: string,
        interInp: string,
        courseInp: string,
        diplomaInp: string,
        phoneInp: string,
        emailInp: string,
        addressInp: string,
        linkedInInp: string,
        experienceInp: string
    }

    const [data, setData] = useState<InpType>({
        nameInp: "",
        professionInp: "",
        aboutInp: "",
        languageInp: "",
        matricInp: "",
        interInp: "",
        courseInp: "",
        diplomaInp: "",
        phoneInp: "",
        emailInp: "",
        addressInp: "",
        linkedInInp: "",
        experienceInp: ""
    });

    const [inpVal, setInpVal] = useState<InpType>({
        nameInp: "",
        professionInp: "",
        aboutInp: "",
        languageInp: "",
        matricInp: "",
        interInp: "",
        courseInp: "",
        diplomaInp: "",
        phoneInp: "",
        emailInp: "",
        addressInp: "",
        linkedInInp: "",
        experienceInp: ""
    });

    const handleInp = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
        const { name, value } = e.target;
        setInpVal((prev) => ({ ...prev, [name]: value }));
    }

    const handleSubmitBtn = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        setData(inpVal);
        setShowSkills(true);
        setDisplay(false);
    }

    const handleFileInp = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const file = event.target.files?.[0];
        if (file) {
            const fileReader = new FileReader();
            fileReader.onload = (e: ProgressEvent<FileReader>) => {
                if (e.target) {
                    setImgLink(e.target.result as string);
                }
            };
            fileReader.readAsDataURL(file);
        }
    };

    const handleSkillBtn = (): void => {
        if (skillData.includes(skillInp)) {
            alert("Already Exist");
            setSkillInp("");
            return;
        }
        if (skillInp === "") {
            alert("Type Something");
            return;
        }
        setSkillData((prev) => [...prev, skillInp]);
        setSkillInp("");
    };

    const handleSkillDeleteBtn = (crnt: string) => {
        setSkillData(skillData.filter((val) => val !== crnt));
    };

    const downloadPDF = (): void => {
        const content = document.getElementById('content');
        if (content) {
            html2canvas(content, {
                scale: 2,
            }).then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF({
                    orientation: 'portrait',
                    unit: 'mm',
                    format: [canvas.width * 0.264583, canvas.height * 0.264583],
                });

                pdf.addImage(imgData, 'PNG', 0, 0, canvas.width * 0.264583, canvas.height * 0.264583);
                pdf.save('My Resume.pdf');
            }).catch((error) => {
                console.error('Error generating PDF: ', error);
            });
        }
    };

    const handleClearBtn = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        setInpVal({
            nameInp: "",
            professionInp: "",
            aboutInp: "",
            languageInp: "",
            matricInp: "",
            interInp: "",
            courseInp: "",
            diplomaInp: "",
            phoneInp: "",
            emailInp: "",
            addressInp: "",
            linkedInInp: "",
            experienceInp: ""
        });
        setSkillData([]);
        setSkillInp("");
        setData({
            nameInp: "",
            professionInp: "",
            aboutInp: "",
            languageInp: "",
            matricInp: "",
            interInp: "",
            courseInp: "",
            diplomaInp: "",
            phoneInp: "",
            emailInp: "",
            addressInp: "",
            linkedInInp: "",
            experienceInp: ""
        });
        setImgLink("");
        setDisplay(true);


        setExperienceData([])
    }
    const primaryBtn = `bg-gradient-to-r from-blue_col via-purple_col to-pink_col px-4 py-3 rounded-lg text-white`
    const inpClasses = `border-b-2 border-black px-3 py-4 my-3 focus:outline-none rounded w-full text-sm desktop:text-base`
    const subHeadingClass = `text-left text-xl desktop:text-2xl my-3`
    const resumeSubHeading = ` text-lg md:text-xl lg:text-2xl w-full border rounded-3xl p-2 px-4 mt-3 mb-3 text-white`
    const educationStyling = `text-base desktop:text-lg font-bold mt-5`

    return (
        <>

            <div className="flex justify-center items-center">
                <Image
                    src="/magic brush.png"
                    alt="Magic brush image"
                    className='desktop:w-10 w-8'
                    width={500}
                    height={500}
                />

                <h1 style={{ fontFamily: "DM Sans" }} className='text-black border-0 text-4xl md:text-6xl font-bold my-8 ps-2'>GENERATE <span style={{ fontFamily: "Dancing Script" }} className='font-bold text-purple_col'>RESUME</span></h1>
            </div>
            <form onSubmit={handleSubmitBtn}>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-9 justify-center  mx-6 tablet:mx-20 desktop:mx-20     ">

                    {/* LEFT------------------- */}
                    <div className="left-div">
                        <h2 className={`${subHeadingClass}`}>Personal Information</h2>
                        <input className={` py-4 my-3 w-full`} required type="file" onChange={handleFileInp} />
                        <input className={`${inpClasses}`} required placeholder="Enter your Name" type="text" name="nameInp" value={inpVal.nameInp} onChange={handleInp} />
                        <textarea className={`${inpClasses}`} required placeholder="Write a brief summary about yourself" name="aboutInp" value={inpVal.aboutInp} onChange={handleInp}></textarea>
                        <input className={`${inpClasses}`} required placeholder="Enter your Profession" type="text" name="professionInp" value={inpVal.professionInp} onChange={handleInp} />

                        <h2 className={`${subHeadingClass}`}>EDUCATION</h2>
                        <input className={`${inpClasses}`} placeholder="Where did you complete matriculation?" type="text" name="matricInp" value={inpVal.matricInp} onChange={handleInp} />
                        <input className={`${inpClasses}`} placeholder="Where did you complete intermediate? (optional)" type="text" name="interInp" value={inpVal.interInp} onChange={handleInp} />
                        <input className={`${inpClasses}`} placeholder="Courses you've done (optional)" type="text" name="courseInp" value={inpVal.courseInp} onChange={handleInp} />
                        <input className={`${inpClasses}`} placeholder="Diploma Courses you've done (optional)" type="text" name="diplomaInp" value={inpVal.diplomaInp} onChange={handleInp} />

                        <h2 className={`${subHeadingClass}`}>CONTACT</h2>
                        <input className={`${inpClasses}`} required placeholder="Enter your Phone Number" type="number" name="phoneInp" value={inpVal.phoneInp} onChange={handleInp} />
                        <input className={`${inpClasses}`} required placeholder="Enter your Email" type="text" name="emailInp" value={inpVal.emailInp} onChange={handleInp} />
                        <textarea className={`${inpClasses}`} required placeholder="Enter your Address" name="addressInp" value={inpVal.addressInp} onChange={handleInp} ></textarea>
                        <input className={`${inpClasses}`} required placeholder="Enter your LinkedIn Profile Link" type="text" name="linkedInInp" value={inpVal.linkedInInp} onChange={handleInp} />

                    </div>
                    {/* RIGHT ------------------------ */}
                    <div className="right-div">

                        <h2 className={`${subHeadingClass}`}>Experience</h2>
                        <input
                            type="text" className={`${inpClasses}`}
                            placeholder="Enter your Role" value={experienceInp.roleInp} name="roleInp" onChange={handleInp2} /> <br />
                        <input className={`${inpClasses}`} type="text" placeholder="Institute name" value={experienceInp.instituteInp} name="instituteInp" onChange={handleInp2} /> <br />

                        <input className={`${inpClasses}`} placeholder='Start date' type="string" id="startYear" value={experienceInp.startYearInp} name="startYearInp" onChange={handleInp2} /> <br />

                        <input className={`${inpClasses}`} placeholder='End date' type="string" id="endYear" value={experienceInp.endYearInp} name="endYearInp" onChange={handleInp2}
                        /> <br />
                        <input className={`${inpClasses}`} type="text" placeholder="Enter Description" value={experienceInp.descriptionInp} name="descriptionInp" onChange={handleInp2} /> <br />
                      <div className="flex justify-end">  <button className='bg-primary-color text-white my-3 rounded-lg px-5 py-2 ' onClick={handleSubmit} type="submit">Add</button></div>

                        <div>
                            {experienceData.map((exp, index) => (
                                <div key={index}>
                                    <h4 className="text-1xl" >{exp.startYearInp} - {exp.endYearInp}</h4>
                                    <h5 className="text-2xl"  >{exp.instituteInp}</h5>
                                    <h4 className="text-1xl" >{exp.roleInp}</h4>
                                    <p className="" >{exp.descriptionInp}</p>
                                    <hr />
                                </div>
                            ))}
                        </div>
                        <h2 className={`${subHeadingClass}`}>Languages</h2>
                        <input className={`${inpClasses}`} required placeholder="Enter your Languages" type="text" name="languageInp" value={inpVal.languageInp} onChange={handleInp} />

                        <h2 className={`${subHeadingClass}`}>SKILLS</h2>

                        <div className='flex'>
                            <input className={`${inpClasses} rounded-l-lg`} placeholder="Enter your Skills" type="text" value={skillInp} onChange={(event) => setSkillInp(event.target.value)} />
                            <button className='bg-primary-color text-white my-3 rounded-r-lg' type="button" onClick={handleSkillBtn}><FaPlus className='mx-4' /></button>
                        </div>


                        <div className=' flex justify-center items-center flex-wrap' >
                            {skillData.map((crnt) => (
                                <div key={crnt} className={` rounded-3xl bg-primary-color px-3 py-2 m-3 w-fit text-white`}>
                                    <span>{crnt}</span>
                                    <button className={`border-0 ps-2`} onClick={() => handleSkillDeleteBtn(crnt)}>
                                        <RxCross1 style={{ color: "white" }} />
                                    </button>
                                </div>
                            ))}
                        </div>


                        {/* BUTTONS ------------------------------  */}
                        <div className="flex justify-end mt-5">
                            <button className={`bg-slate-400 text-white rounded-lg px-4 py-3 me-2 `} type="button" onClick={handleClearBtn}>Clear All</button>
                            <button type="submit" className={`${primaryBtn}`}>{display ? "Generate Resume" : "Edit"}</button>

                        </div>

                    </div>
                </div>

            </form>

            {!display && (
                <>




                    <div id="content" className="resumediv mt-8 flex justify-center rounded-lg border-2 mx-auto w-4/5 max-w-full md:max-w-4xl lg:max-w-5xl background_col bg-white">

                        <div className="left bg-black text-white p-7 rounded-l-lg">

                            <div className="flex justify-center items-center rounded-full bg-slate-100 mb-12 border-2 border-slate-100 w-20 h-20 md:w-28 md:h-28 lg:w-48 lg:h-48 mx-auto">
                                {imgLink ? <Image
                                    className=" mx-auto w-full h-full rounded-full object-cover"
                                    src={imgLink}
                                    alt="profile"
                                    width={500}
                                    height={300}
                                    priority
                                /> : <p className='text-sm text-center'>Select your Image</p>}
                            </div>

                            <h2 style={{ borderColor: `${colorChanger}` }} className={`${resumeSubHeading} bg-black`}>About Me</h2>
                            <p className=' text-sm desktop:text-base my-6' >{data.aboutInp}</p>

                            <h2 style={{ borderColor: `${colorChanger}` }} className={`${resumeSubHeading} bg-black`}>Contact</h2>



                            <div className="flex flex-col items-start w-full">
                                <div className="flex items-center w-full">
                                    <div style={{ borderRadius: "50%", backgroundColor: `${colorChanger}` }} className="w-10 h-10 flex justify-center items-center p-2 my-2">
                                        <MdLocalPhone />
                                    </div>
                                    <p className="text-sm desktop:text-base ml-2 flex-1 break-words">
                                        {data.phoneInp}
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col items-start w-full">
                                <div className="flex items-center w-full">
                                    <div style={{ backgroundColor: `${colorChanger}` }} className="w-10 h-10  flex justify-center items-center p-2 my-2 rounded-full">
                                        <SiGmail />
                                    </div>
                                    <p className="text-sm desktop:text-base mb-4 mt-2 ml-2 min-w-0 break-words">
                                        {data.emailInp}
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col items-start w-full">
                                <div className="flex items-center w-full">
                                    <div style={{ backgroundColor: `${colorChanger}` }} className="w-10 h-10 flex justify-center items-center p-2 my-2 rounded-full">
                                        <TiLocation className="text-white" />
                                    </div>
                                    <p className="text-sm desktop:text-base mb-4 mt-2 ml-2 min-w-0 break-words">{data.addressInp}</p>
                                </div>
                            </div>

                            <div className="flex flex-col items-start w-full">
                                <div className="flex items-center w-full">
                                    <div style={{ backgroundColor: `${colorChanger}` }} className="w-10 h-10 flex justify-center items-center p-2 my-2 rounded-full">
                                        <FaLinkedinIn />
                                    </div>
                                    <p className="text-sm desktop:text-base mb-4 mt-2 ml-2 min-w-0 break-words">
                                        <a href={data.linkedInInp} target="_blank" rel="noopener noreferrer">LinkedIn Profile Link</a>
                                    </p>
                                </div>
                            </div>

                            <h2 style={{ borderColor: `${colorChanger}` }} className={`${resumeSubHeading} bg-black mt-6`}>Language</h2>
                            <p className=' text-sm desktop:text-base' >{data.languageInp}</p>
                        </div>

                        <div className="right p-5">

                            <h2 style={{ backgroundColor: `${colorChanger}` }} className=" text-white text-center  text-2xl sm:text-4xl  md:text-5xl lg:text-6xl   py-4 rounded-3xl">{data.nameInp}</h2>
                            <h2 style={{ fontFamily: "Dancing Script" }} className='font-bold text-center mb-6 mt-2  text-2xl sm:text-4xl  md:text-5xl lg:text-6xl '>{data.professionInp}</h2>

                            <h2 style={{ backgroundColor: `${colorChanger}` }} className={`${resumeSubHeading} `}>Education</h2>

                            <ul>



                                {data.diplomaInp && <>
                                    <li className={`${educationStyling}`} >Diploma</li>
                                    <p className={` text-sm desktop:text-base`} >{data.diplomaInp}</p>
                                </>}
                                {data.courseInp && <>
                                    <li className={`${educationStyling}`} >Courses</li>
                                    <p className={` text-sm desktop:text-base`} >{data.courseInp}</p>
                                </>}
                                {data.interInp && <>
                                    <li className={`${educationStyling}`} >Intermediate</li>
                                    <p className={` text-sm desktop:text-base`} >{data.interInp}</p>
                                </>}
                                <li className={`${educationStyling}`} >Matriculation</li>
                                <p className={` text-sm desktop:text-base`} >{data.matricInp}</p>
                            </ul>

                            <h2 style={{ backgroundColor: `${colorChanger}` }} className={`${resumeSubHeading}`}>Skills</h2>
                            <ul>
                                {showSkills && skillData.map((skills, ind) => (
                                    <li className={` text-sm desktop:text-base font-bold mt-5`} key={ind}>{skills}</li>
                                ))}
                            </ul>
                            <h2 style={{ backgroundColor: `${colorChanger}` }} className={`${resumeSubHeading} `}>Experience</h2>

                            <div >
                                {experienceData.map((exp, index) => (
                                    <div key={index}>
                                        <h4 className="text-1xl font-bold" >{exp.startYearInp} - {exp.endYearInp}</h4>
                                        <h5 className="text-2xl"  >{exp.instituteInp}</h5>
                                        <h4 className="text-1xl font-bold mb-2" >{exp.roleInp}</h4>
                                        <p >{exp.descriptionInp}</p>
                                        <hr className='mb-4' />
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>





                    <div className="flex justify-between items-center w-4/5 text-right mx-auto  max-w-full md:max-w-4xl lg:max-w-5xl my-12">
                        <div>
                            < p style={{ textAlign: 'left' }}>Select Theme</p>
                            <div className='bg-white w-fit flex flex-wrap mb-8 p-3 rounded-lg' style={{ display: "flex", gap: "10px" }}>

                                {colors.map((color, index) => (
                                    <div
                                        key={index}
                                        onClick={() => setColor(color.theme)} className='rounded-lg '
                                        style={{ width: "70px", height: "40px", backgroundColor: color.theme, cursor: "pointer" }}
                                    ></div>
                                ))}
                            </div>
                        </div>
                        <button onClick={downloadPDF} className={`${primaryBtn} h-fit mb-8`}>Download PDF</button>
                    </div>


                </>
            )}
        </>
    );
}
export default BuildYourResume;