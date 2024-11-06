import React, { useState } from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Main = () => {
    const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

    const handleHireMeClick = () => {
        setIsResumeModalOpen(true);
    };

    const handleModalClose = () => {
        setIsResumeModalOpen(false);
    };

    return (
        <div className='grid grid-cols-[60%_40%] gap-5'>
            <div>
                <p className='text-lg'>Hi I am</p>
                <p className='text-orange1 text-3xl'>Chirag Bansal</p>
                <p className='text-[60px]'>Front-end</p>
                <p className='text-[60px] leading-8 text-center '>Developer</p>
                <p className='w-[600px] mt-6'>Proficient front-end developer effective at creating robust websites that meet customer objectives. Experienced in collaborating with clients to assess needs, develop plans, and enhance design usability and performance. Skilled in using html, css, javascript, React.js, as well as other resources to fulfill design requirements.</p>
                <button
                    onClick={handleHireMeClick}
                    className='bg-orange1 p-2 rounded-md px-4 mt-5 hover:bg-white hover:text-orange1'
                >
                    Hire Me
                </button>
            </div>
            <div className='flex flex-col justify-center items-center gap-5'>
                <div className='bg-orange1 w-[350px] h-[350px] rounded-full'>
                    <img
                        src='/PI-1.png'
                        className='z-100 rounded-full'
                    />
                </div>
                <div className='flex justify-center gap-3'>
                    <a href="https://github.com/ChiragBansal-tech" target="_blank" rel="noopener noreferrer">
                        <div className='hover:underline hover:text-orange1 text-xl'>
                            <FaGithub />
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/chirag-bansal-938725230/" target="_blank" rel="noopener noreferrer">
                        <div className='hover:underline hover:text-orange1 text-xl'>
                            <FaLinkedin />
                        </div>
                    </a>
                </div>
            </div>

            {isResumeModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-60">
                    <div className="bg-black border-orange1 border-2 p-6 rounded-lg shadow-lg max-w-lg w-full">
                        <h2 className="text-lg font-semibold mb-4 text-white">My Resume</h2>
                        <iframe
                            src="/CHIRAG BANSAL.pdf" 
                            title="Resume PDF"
                            className="w-full h-96 mb-4"
                        />
                        <div className="flex justify-between">
                            <button
                                onClick={handleModalClose}
                                className="bg-gray-300 hover:bg-gray-400 text-black py-2 px-4 rounded"
                            >
                                Close
                            </button>
                            <a
                                href="/path/to/your-resume.pdf"
                                download="Chirag_Bansal_Resume.pdf"
                                className="bg-orange1 hover:bg-orange-500 text-white py-2 px-4 rounded"
                            >
                                Download Resume
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Main;
