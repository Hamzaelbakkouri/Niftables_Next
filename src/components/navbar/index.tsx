import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const index = () => {
    return (
        <nav className="flex justify-between items-center py-4 px-6 w-full">
            <div className="flex items-center gap-2">
                <Image src="/logo.png" width={30} height={30} alt="logo" />
                <Link href="/" className="text-white text-2xl font-bold">Creon</Link>
            </div>
            <div className="hidden md:flex space-x-6 items-center">
                <Link href="/" className="text-white hover:text-blue-300 transition-colors duration-300">
                    Creon Pass
                </Link>
                <Link href="/" className="text-white hover:text-blue-300 transition-colors duration-300">
                    Token
                </Link>
                <Link href="/" className="text-white hover:text-blue-300 transition-colors duration-300">
                    AI Revenue
                </Link>
                <Link href="/" className="text-white hover:text-blue-300 transition-colors duration-300">
                    AI Launchpad
                </Link>
                <Link href='/' className="border-2 border-white text-white px-8 py-2 rounded-md hover:bg-blue-400">
                    Connect
                </Link>
            </div>
        </nav>
    )
}

export default index