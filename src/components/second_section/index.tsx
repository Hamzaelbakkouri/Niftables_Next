import React from 'react'

const index = () => {
    return (
        <div className='w-full p-5 md:p-20'>
            <div className='w-full md:pl-28 uppercase text-white md:text-7xl'>
                Profiting Through
            </div>
            <div className='w-full uppercase bg-gradient-to-r from-blue-600 to-purple-500 inline-block text-transparent bg-clip-text md:text-5xl text-end md:pr-40 '>
                AI Innovation & Decentralization
            </div>

            <div className='grid md:grid-cols-3 p-6 md:p-36'>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="min-w-full min-h-full grid md:col-span-2 rounded-md object-cover"
                >
                    <source src="./videos/creon-logo.mp4" type="video/mp4" />
                </video>
                <div className='grid md:col-span-1 border border-gray-900 rounded-md md:px-4 md:mx-4 h-full'>
                    <div className='flex flex-col justify-center items-center md:gap-7'>
                        <p className='text-white md:text-xl'>The dynamic community driven business model of the future.</p>
                        <p className='text-gray-400 md:text-md'>At Creon, we blend the power of AI tools with the dynamic crypto and NFT markets, utilizing an innovative business model to drive profitability. This approach empowers our community, as our NFT and token holders directly benefit from the growth and prosperity of the Creon network, creating a win-win scenario for both our community and for the projects we launch.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default index