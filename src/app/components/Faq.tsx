"use client";
import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

interface FaqInterface{
    id: number;
    question: string;
    answer: string;
}

export const Faq = (): JSX.Element => {
    const [activeId, setActiveId] = useState<number | null>(null);

    const FaqContent: FaqInterface[] = [
        {
            id: 1,
            question: "What is a resume generator?",
            answer: "A resume generator is an online tool that helps you create professional resumes easily by providing templates and guiding you through the necessary sections."
        },
        {
            id: 2,
            question: "How do I download my resume?",
            answer: "After completing your resume, you can download it in various formats, including PDF and Word, directly from the website."
        },
        {
            id: 3,
            question: "Do I need an account to use the resume generator?",
            answer: "No, you can use the generator without an account."
        },
        {
            id: 4,
            question: "Can I edit my resume after downloading it?",
            answer: "Yes, you can edit your downloaded resume using a word processor to make any additional changes as needed."
        },
        {
            id: 5,
            question: "Is there a cost to use the resume generator?",
            answer: "NO , we offer free templates."
        }
    ];

    const handleToggleBtn = (id: number) => {
        setActiveId(activeId === id ? null : id);
    };

    return (
        <div className="mx-auto mb-12" style={{ width: "80%" }}>
            {FaqContent.map((item) => (
                <div key={item.id} style={{ borderLeft: "1px solid black" }} className="bg-white px-3 py-4 m-4 rounded-md ">
                    <div className="flex justify-between items-center">
                        <p className="my-2">{item.question}</p>
                        <button style={{ transition: "0.5s" }} onClick={() => handleToggleBtn(item.id)}>
                            {activeId === item.id ? <IoIosArrowUp /> : <IoIosArrowDown />}
                        </button>
                    </div>
                    <div >
                        {activeId === item.id && <p className="my-2">{item.answer}</p>}
                    </div>
                </div>
            ))}
        </div>
    );
}
