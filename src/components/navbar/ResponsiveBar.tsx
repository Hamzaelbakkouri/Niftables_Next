'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CiMenuBurger } from 'react-icons/ci'
import { BiX } from 'react-icons/bi'

const ResponsiveBar = () => {
    const [isClick, setIsClick] = React.useState<boolean>(false);
    return (
        <nav className="flex justify-between items-center py-4 px-6 w-full relative">
            <div className="flex items-center gap-2">
                <Image src="/logo.png" width={30} height={30} alt="logo" />
                <Link href="/" className="text-white text-2xl font-bold">Creon</Link>
            </div>
            <div onClick={() => {
                setIsClick(!isClick)
            }}>
                <CiMenuBurger className='text-2xl' />
            </div>
            {isClick &&
                <div className="fixed right-0 top-0 flex flex-col items-start pl-10 justify-start py-20 gap-5 bg-black h-screen w-60">
                    <div className='w-full flex justify-between items-center'>
                        <Link href='/' className="py-2 border-2 border-white text-white px-8 rounded-md hover:bg-blue-400">
                            Connect
                        </Link>
                        <BiX onClick={() => setIsClick(false)} className='text-white text-4xl bg-blue-500 rounded-md py-1 mx-2' />
                    </div>
                    <hr className='w-full border-gray-800' />
                    <Link href="/" className="text-whitepy-4 flex gap-5 hover:text-blue-300 transition-colors duration-300">
                        Creon Pass
                    </Link>
                    <hr className='w-full border-gray-800' />
                    <Link href="/" className="text-whitepy-4 flex gap-3 hover:text-blue-300 transition-colors duration-300">
                        Token
                        <p className='text-purple-600 text-sm pb-2'>SOON</p>
                    </Link>
                    <hr className='w-full border-gray-800' />
                    <Link href="/" className="text-whitepy-4 flex gap-3 hover:text-blue-300 transition-colors duration-300">
                        AI Revenue
                        <p className='text-purple-600 text-sm pb-2'>SOON</p>
                    </Link>
                    <hr className='w-full border-gray-800' />
                    <Link href="/" className="text-whitepy-4 flex gap-3 hover:text-blue-300 transition-colors duration-300">
                        AI Launchpad
                        <p className='text-purple-600 text-sm pb-2'>SOON</p>
                    </Link>
                    <hr className='w-full border-gray-800' />
                </div>
            }
        </nav>
    )
}

export default ResponsiveBar
