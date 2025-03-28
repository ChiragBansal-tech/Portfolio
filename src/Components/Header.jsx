import React, { useState, useEffect } from 'react';
import ScrollButton from './ScrollButton';
import { Link } from 'react-scroll';


const Header = () => {
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY) {
                setShowHeader(false);
            } else {
                setShowHeader(true);
            }
            
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const handleResumeClick = () => {
        setIsResumeModalOpen(true);
    };

    const handleModalClose = () => {
        setIsResumeModalOpen(false);
    };
    
    const handleClick = () => {
        handleModalClose(false);
        toast.success("Resume Downloading!"); 
    };

    return (
        <>
            {/* Header for medium and larger screens */}
            <div
                className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${showHeader ? 'translate-y-5' : '-translate-y-full'} bg-white/10 backdrop-blur-md p-2 rounded-full shadow-lg border border-white/20 mx-5 lg:mx-20 hidden md:block`}
            >
                <div className='grid grid-cols-7 justify-between items-center text-center gap-1 lg:gap-2'>
                    <div className=' hover:text-orange1 lg:p-2'>
                        <Link to="home" smooth={true} duration={500}><ScrollButton title="Home" /></Link>
                    </div>
                    <div className=' hover:text-orange1 lg:p-2'>
                        <Link to="about" smooth={true} duration={500}><ScrollButton title="About" /></Link>
                    </div>
                    <div className=' hover:text-orange1 lg:p-2'>
                        <Link to="experience" smooth={true} duration={500}><ScrollButton title="Experience" /></Link>
                    </div>
                    <div className='rounded-full bg-orange1 px-1 lg:p-2'>
                        <p className='text-white justify-center align-middle'>Chirag Bansal</p>
                    </div>
                    <div className=' hover:text-orange1 lg:p-2'>
                        <Link to="project" smooth={true} duration={500}><ScrollButton title="Project" /></Link>
                    </div>
                    <div className=' hover:text-orange1 lg:p-2'>
                        <Link to="contact" smooth={true} duration={500}><ScrollButton title="Contact" /></Link>
                    </div>
                    <div className=' hover:text-orange1 lg:p-2'>
                        <button onClick={handleResumeClick}><ScrollButton title="Resume" /></button>
                    </div>
                </div>
            </div>

            {/* Resume Modal */}
            {isResumeModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-60">
                    <div className="bg-black border-orange1 border-2 p-6 rounded-lg shadow-lg max-w-lg w-full">
                        <h2 className="text-lg font-semibold mb-4 text-white">My Resume</h2>
                        <iframe
                            src="/CB.pdf" 
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
                                href="/CB.pdf" 
                                download="CB.pdf"
                                className="bg-orange1 hover:bg-orange-500 text-white py-2 px-4 rounded"
                                onClick={handleClick}
                            >
                                Download Resume
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/* Div to render on smaller screens */}
            <div className='absolute bg-orange1 rounded-full w-20 h-20 md:hidden flex text-3xl justify-center items-center left-[290px] '>
                <p className=''>CB</p>
            </div>
        </>
    );
};

export default Header;
