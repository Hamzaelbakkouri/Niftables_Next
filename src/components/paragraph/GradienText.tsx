import React, { FC } from 'react'
interface component {
    text: string
}
const GradienText: FC<component> = ({ text }) => {
    return (
        <>
            <p className="py-2 md:text-2xl bg-gradient-to-r from-blue-600 to-purple-500 inline-block text-transparent bg-clip-text">
                {text}
            </p>
        </>
    )
}
export default GradienText
