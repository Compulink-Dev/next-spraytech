'use client'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';


const words = ["Creative", "Innovative", "Dynamic", "Bold"];

const HeroSelection = () => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    // Change word every 2 seconds
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }, 2000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className={'relative h-[100vh] flex items-center justify-center text-white text-center'}>
            {/* Background Video */}
            <video autoPlay muted loop className={'absolute top-0 left-0 w-full object-cover -z-10'}>
                <source src="/video/background.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Hero Content */}
            <div className="z-10">
                <h1 className={"text-[4rem] font-bold"}>
                    We are <span className={"text-yellow-400"}>
                        <motion.span
                            key={currentWordIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            {words[currentWordIndex]}
                        </motion.span>
                    </span>
                </h1>
            </div>
        </div>
    );
};

export default HeroSelection;
