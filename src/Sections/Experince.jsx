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
                        {/* <div className='absolute border-dashed border-2 md:h-[90%] md:top-[63px] lg:h-[310px] lg:top-[67px] '></div> */}
                    </div>
                    <div>
                        <p className=' text-xl md:text-2xl lg:text-2xl text-orange1'>SDE-1</p>
                        <ul className=' md:w-[95%] lg:w-[95%] list-disc marker:text-orange1'>
                            <li>Solely Worked on an admin Panel of a client using TailwindCSS and Next.js</li>
                            <li>Integrated route an location find map functionalities using OpenLayers.js for location-based data visualization.</li>
                            <li>Visualized analytics data through dynamic and interactive charts using ApexCharts.js for actionable insights.</li>
                            <li>Implemented state management using Redux and Redux Thunk to enhance application performance and maintainability.</li>
                            <li>Acquired basic proficiency in Redux Saga (latest version) for asynchronous data management in preparation for future projects.</li>
                            <li>Collaborated on Shopify project, delivering client-driven updates, expanding website functionalities, and enhancing user engagement.</li>
                            <li>Designed and developed custom animations for improved UI/UX, including an auto-scrolling search bar placeholder and an interactive premium purchase card animation.</li>
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
