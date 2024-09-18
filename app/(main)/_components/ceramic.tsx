import React from 'react'
import ShowCaseCards from './showCaseCards'

function Ceramic() {
    return (
        <div>
            <p className="text-2xl font-bold">
                Ceramic
            </p>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-4">
                <ShowCaseCards />
                <ShowCaseCards />
                <ShowCaseCards />
                <ShowCaseCards />
            </div>
        </div>
    )
}

export default Ceramic