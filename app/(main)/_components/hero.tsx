"use client";

import CustomButton from "@/components/custom-button";
import { Button } from "@/components/ui/button";
import Image from "next/image";


const Hero = () => {
    const handleScroll = () => {
        const nextSection = document.getElementById("discover");

        if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="flex xl:flex-row flex-col gap-5 relative max-w-[1440px] mx-auto  text-white">
            <div className="flex-1 pt-8 sm:px-16 px-6">
                <h1 className="2xl:text-[64px] sm:text-[54px] text-[50px] font-extrabold">
                    Auto Body Repair & Spray Painting Services
                </h1>

                <p className="text-[27px] text-slate-100 font-light mt-5">
                    Your trusted workshop for panel beating and spray painting.
                </p>

                <div
                    className="space-x-2">
                    <Button
                        className="text-black"
                        variant="outline"
                    >Book Appointment</Button>
                    <CustomButton
                        title="Get a Free Qoute"
                        containerStyles="bg-yellow-400 hover:bg-yellow-600 text-black mt-10"
                        handleClick={handleScroll}
                    />
                </div>
            </div>
            <div className="xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen">
                <div className="relative xl:w-full w-[90%] xl:h-full h-[590px] z-0">
                    <Image src="/hero.png" alt="hero" fill className="object-contain shadow-md" />
                </div>

                <div className="absolute xl:-top-24 xl:-right-1/2 -right-1/4 bg-hero-bg bg-repeat-round -z-10 w-full xl:h-screen h-[590px] overflow-hidden" />
            </div>
        </div>
    );
};

export default Hero;
