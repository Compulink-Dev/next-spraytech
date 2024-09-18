"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
    const [state, setState] = React.useState(false)

    const menus = [
        { title: "Home", path: "/" },
        { title: "About Us", path: "/about" },
        { title: "Service", path: "/services" },
        { title: "Appointment", path: "/booking" },
        { title: "Gallery", path: "/gallery" },
        { title: "Contact Us", path: "/contact" },
    ]

    return (
        <nav className="bg-black w-full border-b md:border-0">
            <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
                <div className="flex items-center justify-between py-3 md:py-5 md:block">
                    <Link href="/">
                        <h1 className="text-3xl font-bold text-yellow-400">SprayTech</h1>
                    </Link>
                    <div className="md:hidden flex gap-4">
                        <Button className="bg-yellow-500 hover:bg-yellow-400 text-black">
                            <Link href={'/register'}>Register</Link>
                        </Button>
                        <Button
                            className="text-white outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                            onClick={() => setState(!state)}
                        >
                            <Menu className="text-yellow-400" />

                        </Button>

                    </div>
                </div>
                <div
                    className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? "block" : "hidden"
                        }`}
                >
                    <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                        {menus.map((item, idx) => (
                            <li key={idx} className="text-yellow-600 text-sm hover:text-gray-600">
                                <Link href={item.path}>{item.title}</Link>
                            </li>
                        ))}
                    </ul>

                </div>
                <div className="hidden md:block">
                    <Button className="bg-yellow-400 hover:bg-yellow-600 text-black">
                        <Link href={'/register'}>Register</Link>
                    </Button>
                </div>
            </div>
        </nav>
    )
}