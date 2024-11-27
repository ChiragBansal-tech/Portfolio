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
                <p className='lg:w-[600px]'>Hello! I'm a dedicated MERN Stack Developer with a passion for crafting full-stack web applications that are intuitive, responsive, and scalable. With expertise in MongoDB, Express.js, React, and Node.js, I specialize in building end-to-end solutions that seamlessly integrate dynamic front-end interfaces with robust back-end architectures.</p>
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
                <Bar
                    label='Node.js'
                    value='75'
                />
                <Bar
                    label='Express.js'
                    value='80'
                />
                <Bar
                    label='MongoDB'
                    value='70'
                />
            </div>
        </div>
    )
}

export default About