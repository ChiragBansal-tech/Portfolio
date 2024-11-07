import React from 'react';

const Experience = () => {
    return (
        <div>
            <h1 className='text-[50px] text-center'>My <span className='text-orange1'>Work Experience</span></h1>
            <div className=' grid md:grid-rows-2 lg:grid-rows-2 gap-10 mt-10'>
                <div className=' flex flex-col md:grid lg:grid md:grid-cols-[30%_15%_50%] lg:grid-cols-[30%_15%_50%] gap-5 md:gap-10 lg:gap-10'>
                    <div>
                        <p className='text-2xl font-semibold'>DESIGNOWEB, Noida</p>
                        <p className='text-lg text-orange1 font-medium'>Jan/2024 ~ Present</p>
                    </div>
                    <div className='relative flex flex-col items-center md:flex hidden '>
                        <div className='border-dashed border-[3px] rounded-full w-[60px] h-[60px] flex items-center justify-center'>
                            <div className='bg-orange1 h-10 w-10 rounded-full'></div>
                        </div>
                        <div className='absolute border-dashed border-2 md:h-[90%] md:top-[63px] lg:h-[215px] lg:top-[67px] '></div>
                    </div>
                    <div>
                        <p className=' text-xl md:text-2xl lg:text-2xl text-orange1'>Front-end Developer</p>
                        <ul className=' md:w-[95%] lg:w-[95%] list-disc marker:text-orange1'>
                            <li>Implemented responsive web designs for mobile devices using HTML5, CSS3, JavaScript, React.js, TailwindCSS framework.</li>
                            <li>Integrated web applications with back-end systems using RESTful APIs.</li>
                            <li>Debugged front-end code issues and resolved cross-browser compatibility problems.</li>
                            <li>Created custom responsive designs that optimized the website layout for various devices.</li>
                            <li>Developed reusable components that can be used in future projects with minimal effort.</li>
                        </ul>
                    </div>
                </div>
                <div className=' flex flex-col md:grid lg:grid md:grid-cols-[30%_15%_50%] lg:grid-cols-[30%_15%_50%] gap-5 md:gap-10 lg:gap-10'>
                    <div>
                        <p className='text-2xl font-semibold'>DESIGNOWEB, Noida</p>
                        <p className='text-lg text-orange1 font-medium'>May/2023 ~ Aug/2023</p>
                    </div>
                    <div className='flex flex-col items-center md:flex hidden'>
                        <div className='border-dashed border-2 rounded-full w-[60px] h-[60px] flex items-center justify-center'>
                            <div className='bg-white h-10 w-10 rounded-full'></div>
                        </div>
                    </div>

                    <div>
                        <p className='text-2xl text-orange1'>Front-end Developer Intern</p>
                        <ul className='w-[95%] list-disc  marker:text-orange1'>
                            <li>Developed and maintained user-facing webpages using HTML, CSS, JavaScript, React.js.</li>
                            <li>Implemented responsive design techniques to ensure websites are optimized for mobile devices.</li>
                            <li>Integrated third-party APIs into existing web applications.</li>
                            <li>Worked closely with UX and UI Designers to implement their visual designs into functional code.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
