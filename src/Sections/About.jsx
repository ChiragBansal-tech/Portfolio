import React from 'react'
import Bar from '../Components/ProgressBar'

const About = () => {
    return (
        <div className='grid  md:grid-cols-[40%_60%] lg:grid-cols-[40%_60%]'>
            <div className='flex flex-col justify-center items-center '>
                <div className='bg-orange1 w-[270px] h-[270px] lg:w-[350px] lg:h-[350px] rounded-full md:block hidden'>
                    <img
                        src='/PI-1.png'
                        className='z-100 rounded-full'
                    />
                </div>
            </div>
            <div className=' md:ml-8 lg:ml-8'>
                <h1 className='text-[50px]'><span className='text-orange1'>About</span> Me</h1>
                <p className='lg:w-[600px]'>Competent Front-end Developer with experience in building high-quality, user-friendly web applications. Strengths include expertise in React.js, Next.js, TailwindCSS, and modern front-end technologies. Adept at creating responsive and interactive user interfaces that enhance user experience. Proven ability to collaborate effectively with cross-functional teams to deliver scalable and efficient solutions. Known for problem-solving skills and a commitment to staying updated with the latest industry trends and best practices.</p>
                <Bar
                    label='HTML'
                    value='98'
                />
                <Bar
                    label='CSS'
                    value='97'
                />
                <Bar
                    label='JavaScript'
                    value='90'
                />
                <Bar
                    label='React.js'
                    value='95'
                />
                <Bar
                    label='TailwindCSS'
                    value='95'
                />
                <Bar
                    label='Next.js'
                    value='92'
                />
                <Bar
                    label='TypeScript'
                    value='85'
                />
                <Bar
                    label='Shopify'
                    value='80'
                />
            </div>
        </div>
    )
}

export default About