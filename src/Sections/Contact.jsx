import React, { useState } from 'react';

const Contact = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    return (
        <div className='w-[50%] text-center'>
            <h1 className='text-[50px]'>Let's Work Together</h1>
            <p className='text-base mt-2'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore earum ipsum eveniet. Ipsam obcaecati natus corrupti deleniti, illum illo? Sint nam aut optio. Accusamus repudiandae dolor officiis error ipsum unde?
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
                        <p>Email: <a href="mailto:youremail@example.com" className='text-blue-500 underline'>chiragbansalji400@gmail.com</a></p>
                        <p>LinkedIn: <a href="https://www.linkedin.com/in/chirag-bansal-938725230/" target="_blank" rel="noopener noreferrer" className='text-blue-500 underline'>LinkedIn Profile</a></p>
                        <p>Phone: <span className='font-semibold'>8006891886</span></p>
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
