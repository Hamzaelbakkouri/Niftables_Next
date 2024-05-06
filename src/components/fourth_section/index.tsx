import React from 'react'
import Card from "./card"

const index = () => {
    return (
        <div className='w-full flex justify-around items-center flex-wrap p-4 md:p-24'>
            <Card />
            <Card />
            <Card />
        </div>
    )
}

export default index
