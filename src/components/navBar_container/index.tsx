import React from 'react';
import Navbar from '../navbar';
import ResponsiveBar from '../navbar/ResponsiveBar';
import GradienText from '../paragraph/GradienText';

const Index = () => {
    return (
        <div className="relative overflow-hidden w-full h-screen">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-1/2 left-1/2 min-w-full md:min-h-full w-auto h-full -translate-x-1/2 -translate-y-1/2 z-[-1] object-cover"
            >
                <source src="./videos/main-background-video.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[black] to-[140%]"></div>
            <div className="relative z-10 flex flex-col md:items-center h-full text-white">
                <div className='w-full hidden md:block'>
                    <Navbar />
                </div>
                <div className='w-full block md:hidden'>
                    <ResponsiveBar />
                </div>
                <div className='h-full flex flex-col w-full justify-end md:justify-end p-8 md:p-32 flex-wrap'>
                    <h1 className="md:text-6xl font-bold text-start mb-4">
                        THE WORLD&#39;S FIRST <br />
                        PLATFORM FOR TOKENIZING <br />
                        AI BLOCKCHAIN PROJECTS
                    </h1>
                    <div className='pt-9'>
                        <div className="w-[44%] h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"></div>
                        <GradienText text='Hold the Creon Pass NFT and earn passive income from AI Tools' />
                        <div className="w-[44%] h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;