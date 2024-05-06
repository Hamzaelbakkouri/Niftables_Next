import Image from 'next/image'
import React from 'react'
import GradienText from '../paragraph/GradienText'

const index = () => {
    return (
        <>
            <div className="bg-[#111111] rounded-md h-auto w-[500px] flex flex-col items-center justify-center relative m-5 py-7">
                <span className="absolute top-0 right-0 -translate-x-6 -translate-y-6 bg-white text-black px-2 rounded-full text-sm mt-4">COMING SOON</span>
                <div className="text-start px-8">
                    <span className="text-white uppercase tracking-widest text-2xl md:text-5xl">TOKEN</span>
                    <GradienText text='The Gateway token to the world of AI' />
                </div>
                <div className="mt-2 md:mt-8 w-full justify-center items-center">
                    <Image src="/banner.png" width={500} height={200} className='hover:w-[900px]' alt="ban" />
                </div>
                <div className="mt-2 md:mt-8 text-sm md:text-lg w-full px-6 h-full text-gray-200">
                    The Creon AI Launchpad, an essential component of our initiative, represents a groundbreaking opportunity in the realm of AI and blockchain. It provides the first known platform for acquiring allocations in tokenized AI projects, offering our community of NFT and CREON token holders early access to innovative and promising AI endeavors.
                </div>
            </div>
        </>
    )
}

export default index
