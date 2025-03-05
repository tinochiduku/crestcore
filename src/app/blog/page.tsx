import Help from '@/components/sections/help'
import Breadcrumb from '@/components/ui/breadcrumb'
import posts from '@/lib/posts'
import Image from 'next/image'
import React from 'react'

export default function Page() {
  return (
     <main className='min-h-screen'>
      <Breadcrumb page='Our Blog' />
      <section className='mt-10 max'>
        <div className='space-y-10'>
            <div className='flex flex-col lg:items-center lg:flex-row gap-4'>
                <div className='lg:w-1/2 space-y-2'>
                    <span className='text-sm font-semibold'>CHECK OUR FEED</span>
                    <h4 className='text-3xl lg:text-4xl font-semibold'>Uncover our latest posts and updates</h4>
                </div>
                <div className='lg:w-1/2'>
                    <p>
                    Welcome to the Crestcore Consulting and Advisory blog, where we share valuable insights, industry trends, and expert advice to help you navigate the ever-evolving financial landscape. 
                    </p>
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-8'>
                {posts.map(({title, excerpt, img}, index) =>
                    <div key={title} className='flex flex-col items-start space-y-4 bg-white rounded-4xl p-5'>
                        <div>
                            <div className='flex items-center justify-around relative overflow-hidden group rounded-2xl xl:rounded-3xl aspect-[16/11]'>
                                <Image 
                                    src={img}
                                    alt='About Us Image' 
                                    width={0} 
                                    height={0}
                                    sizes='100svw' 
                                    className='object-cover w-full h-[25rem] group-hover:scale-125 transition-all duration-500 ease-in-out'
                                />
                                <div className='absolute inset-0 bg-white opacity-0 w-0 rotate-45 group-hover:w-[100%] scale-200 group-hover:opacity-20 transition-all duration-500 ease-in-out'/>
                            </div>
                        </div>
                        <h4 className='text-xl font-semibold line-clamp-1'>
                            {title}
                        </h4>
                        <p className='line-clamp-4'>
                            {excerpt}
                        </p>
                    </div>
                )}
            </div>
        </div>
    </section>
    <Help />
    </main>
  )
}
