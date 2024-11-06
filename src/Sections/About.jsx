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
                <p className='lg:w-[600px]'>Hello! I'm a passionate Front-end Developer with a love for creating intuitive, responsive, and visually appealing user interfaces. With experience in HTML, CSS, JavaScript, and modern frameworks like React, I focus on building seamless and dynamic web experiences. I thrive on turning design concepts into functional code and ensuring every detail aligns with the vision. My goal is to combine creativity and technical expertise to bring your ideas to life and provide users with smooth, engaging digital experiences.</p>
                <Bar
                    label='HTML'
                    value='95'
                />
                <Bar
                    label='CSS'
                    value='92'
                />
                <Bar
                    label='JavaScript'
                    value='90'
                />
                <Bar
                    label='React.js'
                    value='92'
                />
                <Bar
                    label='TailwindCSS'
                    value='95'
                />
            </div>
        </div>
    )
}

export default About