import React from 'react'
import { FaDiscord, FaFacebook ,FaTelegram} from 'react-icons/fa6'

const index = () => {
    return (
        <div className='text-white w-full flex justify-between items-center px-12 py-8'>
            <div className='w-full  flex justify-evenly items-center'>
                <div className='text-gray-400'>© Creon 2023. All rights reserved.</div>
                <div className='flex justify-center items-center gap-3'>
                    <div className='border-2 border-white rounded-full p-1'>
                        <FaDiscord className='text-xl' />
                    </div>
                    <div className='border-2 border-white rounded-full p-1'>
                        <FaFacebook className='text-xl' />
                    </div>
                    <div className='border-2 border-white rounded-full p-1'>
                        <FaTelegram className='text-xl' />
                    </div>
                </div>
            </div>
            <div className='w-full text-sm text-gray-400 flex justify-center items-center pl-48'>
                Powered by
                <p className='text-white text-md'>&#160;NIFTABLES</p>
            </div>
        </div>
    )
}

export default index
