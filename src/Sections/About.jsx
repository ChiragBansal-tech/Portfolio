import React from 'react'
import Bar from '../Components/ProgressBar'

const About = () => {
    return (
        <div className='grid grid-cols-[40%_60%]'>
            <div className='flex justify-center items-center'>
                <div className='bg-orange1 w-[350px] h-[350px] rounded-full'></div>
            </div>
            <div>
                <h1 className='text-[50px]'>About Me</h1>
                <p className='w-[600px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat voluptatum placeat ut perferendis mollitia? Eum explicabo et labore! Praesentium, alias tempore officiis possimus accusantium dolores odio qui error nulla est obcaecati, perferendis eveniet beatae atque odit magni consectetur soluta facere recusandae nesciunt. Temporibus ipsa quisquam asperiores accusantium aut eos corrupti!</p>
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