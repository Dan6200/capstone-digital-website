import React, { FC } from 'react'

const Topbar: FC = () => {
    return (
        <div className="flex justify-between md:h-[5vw] lg:h-[2vw] lg:w-[30vw] h-[10vw] self-center lg:self-end text-2xl lg:text-sm md:text-md sm:text-xl font-paragraph">
            <span className="text-primary">
                info@capstone-digital-solutions.com
            </span>
            <span className="text-black-800">+2349033117211</span>
        </div>
    )
}

export default Topbar
