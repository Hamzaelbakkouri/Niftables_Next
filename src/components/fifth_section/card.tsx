import Image from 'next/image'
import React from 'react'

const Card = () => {
    return (
        <div className='grid grid-cols-3'>
            <div className='grid col-span-2 bg-[#13171D] bg-opacity-90 rounded-l-md'>
                <div className='flex flex-col justify-center items-start gap-3 px-8'>
                    <p className='text-5xl text-white'>AI Prospects, Market Size, and Development Pace</p>
                    <p className='text-lg text-gray-400'>AI tools refer to the technologies and software that enable computer systems to perform tasks usually requiring human intellect. The market for these tools is dynamic and diverse, encompassing areas such as Natural Language Processing (NLP), machine learning, computer vision, and robotics. With a wide range of applications, AI tools are becoming increasingly indispensable in many sectors, from healthcare to finance, retail, manufacturing, and many others.</p>
                </div>
            </div>

            <div className='grid col-span-1'>
                <div className="w-full justify-center items-center rounded-r-md">
                    <Image className='rounded-r-md' src="/aiLogo.png" width={500} height={300} objectFit='cover' alt="ban" />
                </div>
            </div>
        </div>
    )
}

export default Card
