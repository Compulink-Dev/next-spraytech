import React from 'react'
import Navbar from './header'

function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className='bg-black relative'>
            <Navbar />
            <main className="">
                {children}
            </main>
        </div>
    )
}

export default MainLayout