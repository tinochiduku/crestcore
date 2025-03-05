import About from '@/components/sections/about'
import Affairs from '@/components/sections/affairs'
import Choosing from '@/components/sections/choosing'
import Breadcrumb from '@/components/ui/breadcrumb'
import React from 'react'

export default function Page() {
  return (
    <main className='min-h-screen'>
      <Breadcrumb page='About Us' />
      <About />
      <Affairs />
      <Choosing />
    </main>
  )
}
