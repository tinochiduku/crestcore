import Choosing2 from '@/components/sections/choosing2'
import Cta from '@/components/sections/cta'
import Breadcrumb from '@/components/ui/breadcrumb'
import ServiceCard from '@/components/ui/service-card'
import services from '@/lib/services'
import React from 'react'

export default function Page() {
  return (
     <main className='min-h-screen'>
      <Breadcrumb page='Our Services' />
      <section className='bg-gray-50 rounded-lg xl:rounded-4xl max mt-10 py-10'>
          <div className='space-y-10 px-4 xl:px-10'>
              <div className='flex flex-col lg:items-center lg:flex-row gap-4'>
                  <div className='lg:w-1/2 space-y-2'>
                      <span className='text-sm font-semibold'>OUR SERVICES</span>
                      <h4 className='text-3xl lg:text-4xl font-semibold'>Your Business Goals, Our Priority</h4>
                  </div>
                  <div className='lg:w-1/2'>
                      <p>
                          At Crestcore Consulting and Advisory, we deliver expert accounting, tax, and advisory solutions tailored to your unique needs.</p>
                  </div>
              </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-8 px-4 xl:px-10'>
              {services.map(({label, description, img}, index) => 
                  <ServiceCard
                      key={label}
                      img={img}
                      label={label}
                      href='/services'
                  />
              )}
          </div>
      </section>
      <Cta />
      <Choosing2 />
    </main>
  )
}
