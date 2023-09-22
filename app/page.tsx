import { Blog, Empower, Hero, Testimonials } from '@/components'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='relative'>
      <Hero/>
      <Empower/>
      <Blog/>
      <Testimonials/>
    </main>
  )
}
