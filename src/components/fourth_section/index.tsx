import Image from 'next/image'
import React from 'react'

const index = () => {
    return (
        <>
            <div className="bg-[#111111] rounded-md h-[70vh] w-[500px] flex flex-col items-center justify-center relative m-5">
                <span className="absolute top-0 right-0 -translate-x-6 -translate-y-6 bg-white text-black px-2 rounded-full text-sm mt-4">COMING SOON</span>
                <div className="text-center">
                    <span className="text-white uppercase tracking-widest text-5xl">TOKEN</span>
                    <p className="text-blue-500 mt-2">The Gateway token to the world of AI</p>
                </div>
                <div className="mt-8 w-full justify-center items-center">
                    <Image src="/banner.png" width={500} height={200} className='hover:w-[900px]' alt="ban" />
                </div>
                <div className="mt-8 max-w-md text-gray-400">
                </div>
            </div>
        </>
    )
}

export default index
