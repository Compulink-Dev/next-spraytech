import React from 'react'
import MainLayout from '../_components/main-layout'
import { allCars } from '@/constants/data'
import CarCard from './_components/car-card'

function GalleryPage() {
    const isDataEmpty = !Array.isArray(allCars)
    return (
        <MainLayout>
            <div className='px-12'>
                {!isDataEmpty ? (
                    <section className=''>
                        <div className='grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14'>
                            {allCars?.map((car) => (
                                <CarCard
                                    key={car.city_mpg}
                                    car={car} />
                            ))}
                        </div>
                        {/* 
            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allCars.length}
            /> */}
                    </section>
                ) : (
                    <div className='mt-16 flex justify-center items-center flex-col gap-2'>
                        <h2 className='text-black text-xl font-bold'>{"Oops, no results"}</h2>
                        {/* <p>{allCars?.message}</p> */}
                    </div>
                )}
            </div>
        </MainLayout>
    )
}

export default GalleryPage