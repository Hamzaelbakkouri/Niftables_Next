import React from 'react'
import GradienText from '../paragraph/GradienText'

const index = () => {
    const paragraphs = [
        "Hold the Creon Pass NFT and earn passive income from AI Tools",
        "The Creon NFT pass unlocks access to AI projects, the Creon launchpad, and a ticket to generate passive income through AI-driven tools",
        "The Creon NFT pass unlocks access to AI projects, the Creon launchpad",
        "a ticket to generate passive income through AI-driven tools",
    ]
    const text: string = "The Creon NFT pass unlocks access to AI projects, the Creon launchpad, and a ticket to generate passive income through AI-driven tools"
    return (
        <div className='flex w-full justify-center items-center gap-5 px-36 py-8'>

            <div className='flex flex-col w-full h-full justify-center items-center'>
                <div className='w-full uppercase text-white md:text-6xl'>
                    CREON PASS <br /> NFT
                </div>
                <div className='w-full flex justify-start py-3'>
                    <div className='w-4/6'>
                        <GradienText text={text} />
                    </div>
                </div>
                {paragraphs.map((data, index) => {
                    return (
                        <div key={index} className='w-full py-3'>
                            <p className='w-[60%] text-sm text-start px-6 border border-gray-800 py-3 rounded-md text-gray-300 truncate'>{data}</p>
                        </div>
                    )
                })
                }

                <div className='w-full py-3'>
                    <button className='bg-gradient-to-r from-blue-600 to-purple-600 text-white px-36 py-3 rounded-md hover:bg-blue-400 transition-colors duration-300'>Buy Creon Pass</button>
                </div>
            </div>

            <div className='flex flex-col w-full justify-center items-center p-5 relative'>
                <span className='absolute top-5 h-10 bg-black blur-md w-full'>&#160;</span>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="min-w-full min-h-full "
                >
                    <source src="./videos/nft-video.mp4" type="video/mp4" />
                </video>
                <span className='absolute bottom-5 h-10 bg-black blur-md w-full'>&#160;</span>
            </div>
        </div>
    )
}

export default index

