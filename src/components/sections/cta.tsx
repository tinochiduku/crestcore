import React from 'react'
import Button from '../ui/button'

export default function Cta() {
  return (
    <section className='bg-[var(--accent)] mb-10'>
        <div className='flex flex-col lg:flex-row gap-4 lg:items-center justify-around w-full text-white px-4 lg:px-10 min-h-[16rem] max'>
            <h4 className='text-3xl lg:text-5xl font-semibold'>Looking for a premium accounting for your business?</h4>
            <div className='flex items-center min-w-xs'>
                <Button label='Get Started' href='/contact' />
            </div>
        </div>
    </section>
  )
}
