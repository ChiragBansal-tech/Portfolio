import React from 'react';

const Experience = () => {
    return (
        <div>
            <h1 className='text-[50px] text-center'>My <span className='text-orange1'>Work Experience</span></h1>
            <div className='grid grid-rows-2 gap-10 mt-10'>
                <div className='grid grid-cols-[30%_15%_50%] gap-10'>
                    <div>
                        <p className='text-2xl font-semibold'>DESIGNOWEB, Noida</p>
                        <p className='text-lg text-orange1 font-medium'>Jan/2024 ~ Present</p>
                    </div>
                    <div className='relative flex flex-col justify-center items-center'>
                        <div className='border-dashed border-[3px] rounded-full w-[60px] h-[60px] justify-center items-center flex'>
                            <div className='bg-orange1 h-10 w-10 rounded-full'></div>
                        </div>
                        <div className='absolute border-dashed border-2 h-[215px] top-[160px]'></div>
                    </div>
                    <div>
                        <p className='text-2xl text-orange1'>Front-end Developer</p>
                        <ul className='w-[95%] list-disc marker:text-white'>
                            <li>Implemented responsive web designs for mobile devices using HTML5, CSS3, JavaScript, React.js, TailwindCSS framework.</li>
                            <li>Integrated web applications with back-end systems using RESTful APIs.</li>
                            <li>Debugged front-end code issues and resolved cross-browser compatibility problems.</li>
                            <li>Created custom responsive designs that optimized the website layout for various devices.</li>
                            <li>Developed reusable components that can be used in future projects with minimal effort.</li>
                        </ul>
                    </div>
                </div>
                <div className='grid grid-cols-[30%_15%_50%] gap-10'>
                    <div>
                        <p className='text-2xl font-semibold'>DESIGNOWEB, Noida</p>
                        <p className='text-lg text-orange1 font-medium'>May/2023 ~ Aug/2023</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='border-dashed border-2 rounded-full w-[60px] h-[60px] justify-center items-center flex'>
                            <div className='bg-white h-10 w-10 rounded-full'></div>
                        </div>
                    </div>
                    <div>
                        <p className='text-2xl text-orange1'>Front-end Developer Intern</p>
                        <ul className='w-[95%] list-disc  marker:text-white'>
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
