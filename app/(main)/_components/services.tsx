'use client'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import SprayPainting from './spray'
import Ceramic from './ceramic'
import Accessories from './accessories'
import Rockford from './rockford'

function Services() {
    const [showPage, setShowPage] = useState("")

    const getButtonClass = (page: any) => {
        return `bg-transparent ${showPage === page ? 'bg-yellow-400' : 'hover:bg-yellow-600'}`
    }

    return (
        <div className=''>
            <div className="space-x-4">
                <Button
                    onClick={() => setShowPage("spray")}
                    className={getButtonClass("spray")}>
                    Spray Painting
                </Button>
                <Button
                    onClick={() => setShowPage("ceramic")}
                    className={getButtonClass("ceramic")}>
                    Ceramic Pro
                </Button>
                <Button
                    onClick={() => setShowPage("accessories")}
                    className={getButtonClass("accessories")}>
                    Accessories
                </Button>
                <Button
                    onClick={() => setShowPage("rockford")}
                    className={getButtonClass("rockford")}>
                    Rockford Fosgate
                </Button>
            </div>

            <div className="mt-4 px-3">
                {showPage === "spray" && <div>
                    <SprayPainting />
                </div>}
                {showPage === "ceramic" && <div>
                    <Ceramic />
                </div>}
                {showPage === "accessories" && <div>
                    <Accessories />
                </div>}
                {showPage === "rockford" && <div>
                    <Rockford />
                </div>}
            </div>
        </div>
    )
}

export default Services
