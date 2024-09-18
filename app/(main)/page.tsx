import React from 'react'
import Navbar from './_components/header'
import MainLayout from './_components/main-layout'
import Hero from './_components/hero'
import CustomTitle from '@/components/custom-title'
import AboutUs from './_components/about-us'
import SearchBar from '@/components/search-bar'
import CustomFilter from '@/components/custom-filter'
import { fuels, yearsOfProduction } from '@/constants'
import { allCars } from '@/constants/data'
import CarCard from './_components/car-card'
import Services from './_components/services'

function HomePage() {
  const isDataEmpty = !Array.isArray(allCars)
  return (
    <MainLayout>
      <main className="overflow-hidden">
        <Hero />

        <div className="px-12 pb-8">
          <CustomTitle title="About" />
          <AboutUs />
        </div>

        <div className='my-12 w-full flex justify-between items-center flex-wrap gap-5 px-12'>
          <SearchBar />
          <div className='flex justify-start flex-wrap items-center gap-2'>
            <CustomFilter title='fuel' options={fuels} />
            <CustomFilter title='year' options={yearsOfProduction} />
          </div>
        </div>


        <div className='pb-12 px-12'>
          {!isDataEmpty ? (
            <section className=''>
              <div className='grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14'>
                {allCars?.map((car) => (
                  <CarCard car={car} />
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
              <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
              {/* <p>{allCars?.message}</p> */}
            </div>
          )}
        </div>

        <div className="px-12 pb-12">
          <Services />
        </div>

      </main>
    </MainLayout>
  )
}

export default HomePage