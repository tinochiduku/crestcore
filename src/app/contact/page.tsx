import Affairs from '@/components/sections/affairs'
import Contact from '@/components/sections/contact'
import Breadcrumb from '@/components/ui/breadcrumb'
import React from 'react'

export default function Page() {
  return (
     <main className='min-h-screen'>
      <Breadcrumb page='Contact Us' />
      <Contact />
      <Affairs />
    </main>
  )
}
