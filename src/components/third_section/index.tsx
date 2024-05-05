'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { FaAngleRight } from "react-icons/fa6";

const index = () => {
    const data = [
        { id: 1, icon: <Image src='/selectIcon.png' width={150} height={150} alt='logopic' />, text: "Profitability and Growth", description: "At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success." },
        { id: 2, icon: <Image src='/selectIcon.png' width={150} height={150} alt='logopic' />, text: "Profitability and Growth", description: "Helloooooooooo" },
        { id: 3, icon: <Image src='/selectIcon.png' width={150} height={150} alt='logopic' />, text: "Profitability and Growth", description: "Helloooooooooo" }
    ];

    const [isClicked, setIsClicked] = useState<number | null>(null);

    const handleClick = (id: number) => {
        setIsClicked(isClicked === id ? null : id);
    };
    return (
        <div className='flex justify-center items-center w-full text-white flex-wrap md:px-40'>
            <div className='md:w-[60%] flex flex-col gap-16'>
                <div className='uppercase text-5xl'>Our vision is to support the innovation of AI blockchain projects
                    <p className='bg-gradient-to-r from-blue-600 to-purple-500 inline-block text-transparent bg-clip-text'>
                        while prioritizing communities and democratizing profits
                    </p>
                </div>
                <div className='w-full flex justify-end items-center'>
                    <Image src='/banner.png' width={600} height={200} alt='logopic' />
                </div>
            </div>
            <div className='w-full flex flex-col justify-center md:w-[40%] gap-7'>
                {data.map((item) => (
                    <div key={item.id}>
                        <div className='w-full flex items-center'>
                            {item.icon}
                            <div className='flex justify-between w-full px-6 hover:text-indigo-400 transition-all duration-200'>
                                <p className='text-2xl'>{item.text}</p>
                                <button className='' onClick={() => handleClick(item.id)}>
                                    {isClicked === item.id ? (
                                        <FaAngleRight className='text-xl rotate-90 transition-all duration-200' />
                                    ) : (
                                        <FaAngleRight className='text-xl transition-all duration-200' />
                                    )}
                                </button>
                            </div>
                        </div>
                        {isClicked === item.id &&
                            <div className='text-md text-gray-300 transition-all duration-200'>
                                {item.description}
                            </div>
                        }
                    </div>
                ))}
            </div>
        </div >
    )
}

export default index
