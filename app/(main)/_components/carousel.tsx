import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React, { useState } from 'react';


export function ShowCaseCards({ title, description }: any) {
    return (
        <div className="border p-8 rounded shadow flex gap-4">
            <div className="">
                <Image
                    src={'/hero.png'}
                    alt=''
                    width={200}
                    height={200}
                    className='w-full h-[200px]'
                />
            </div>
            <div className="">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p>{description}</p>

                <div className="flex flex-wrap items-center  text-black">
                    <Button
                        className=''
                        variant={'outline'}
                    >Video</Button>
                    <Button
                        className='bg-yellow-400 hover:bg-yellow-800'
                    >Images</Button>
                </div>
            </div>
        </div>
    );
}


// Dummy data for demonstration purposes
const cardsData = [
    { id: 1, title: 'Card 1', description: 'Description 1' },
    { id: 2, title: 'Card 2', description: 'Description 2' },
    { id: 3, title: 'Card 3', description: 'Description 3' },
    { id: 4, title: 'Card 4', description: 'Description 4' },
    { id: 5, title: 'Card 5', description: 'Description 5' },
];

function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? cardsData.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === cardsData.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="relative p-8">
            <div className="flex overflow-hidden">
                {cardsData.map((card, index) => (
                    <div
                        key={card.id}
                        className={`flex-none w-full transition-transform duration-500 ${index === currentIndex ? 'block' : 'hidden'
                            }`}
                    >
                        <ShowCaseCards title={card.title} description={card.description} />
                    </div>
                ))}
            </div>
            <button
                onClick={handlePrev}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-yellow-500 text-black px-4 py-2 rounded"
            >
                &lt;
            </button>
            <button
                onClick={handleNext}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-yellow-500 text-black px-4 py-2 rounded"
            >
                &gt;
            </button>
        </div>
    );
}

export default Carousel;
