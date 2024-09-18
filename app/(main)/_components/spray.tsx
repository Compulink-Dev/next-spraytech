import React from 'react'
import ShowCaseCards from './showCaseCards'

function SprayPainting() {
    return (
        <div className=''>
            <div className="">
                <p className="text-2xl font-bold">Spray Painting</p>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-4">
                    <ShowCaseCards />
                    <ShowCaseCards />
                    <ShowCaseCards />
                    <ShowCaseCards />
                </div>
            </div>
            <div className="my-8">
                <p className="text-2xl font-bold">Panel Beating</p>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-4">
                    <ShowCaseCards />
                    <ShowCaseCards />
                    <ShowCaseCards />
                    <ShowCaseCards />
                </div>
            </div>
        </div>
    )
}

export default SprayPainting