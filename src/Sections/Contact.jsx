import React, { useState } from 'react';

const Contact = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    return (
        <div className='w-[50%] text-center'>
            <h1 className='text-[50px]'>Let's <span className='text-orange1'>Work Together</span></h1>
            <p className='text-base mt-2'>
            I'm always open to new opportunities and collaborations! If you're looking for a dedicated front-end developer who values creativity, attention to detail, and building user-centric solutions, let's connect. Whether you have a project in mind or need help bringing your ideas to life, I'm excited to work with you.
            </p>
            <div className='flex justify-center mt-3'>
                <button
                    onClick={handleOpenModal}
                    className='border-2 border-orange1 bg-orange1 p-2 rounded-md text-base px-10 hover:border-white'
                >
                    Contact Me
                </button>
            </div>

            {isModalOpen && (
                <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-60'>
                    <div className='bg-black border-orange1 border-2 p-5 rounded-lg shadow-lg text-center w-[80%] sm:w-[40%]'>
                        <h2 className='text-2xl font-semibold mb-4'>Contact Information</h2>
                        <p c>Email: <span className='text-orange1'>chiragbansalji400@gmail.com</span></p>
                        <p>LinkedIn: <a href="https://www.linkedin.com/in/chirag-bansal-938725230/" target="_blank" rel="noopener noreferrer" className='text-orange1 underline'>LinkedIn Profile</a></p>
                        <p>Phone: <span className='font-semibold text-orange1'>8006891886</span></p>
                        <button
                            onClick={handleCloseModal}
                            className='mt-4 px-6 py-2 bg-orange1 rounded-md text-white hover:bg-orange-500'
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Contact;
