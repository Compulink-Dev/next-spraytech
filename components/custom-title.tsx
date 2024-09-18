import React from 'react'

function CustomTitle({ title }: any) {
    return (
        <div className=''>
            <p className="text-2xl font-bold">{title}</p>
            <div className="flex gap-2 items-center mt-1">
                <div className=" w-[100px]  h-1  bg-yellow-400 rounded-full"></div>
                <div className="w-1 h-1 rounded-full bg-yellow-400"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            </div>
        </div>
    )
}

export default CustomTitle