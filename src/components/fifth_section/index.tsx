import React from 'react'
import Card from './card'

const index = () => {
    return (
        <>
            <div className="relative overflow-hidden w-full h-[130vh]">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 z-[-1] object-cover"
                >
                    <source src="./videos/roadmap-video.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-[black] to-transparent to-[80%]"></div>
                <div className='absolute flex flex-col gap-3 px-52 py-8'>
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </>
    )
}

export default index
