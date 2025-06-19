import React from 'react'
import { Hero } from '@/components/landing/Hero'
import { About } from '@/components/landing/About'
import { HowItWorks } from '@/components/landing/HowItWorks'

const page = () => {
  return (
    <div><Hero></Hero>
    <section id='about'>
    <About></About>
    </section>
    <section id='working'>
    <HowItWorks></HowItWorks>
    </section>
    </div>

  )
}

export default page