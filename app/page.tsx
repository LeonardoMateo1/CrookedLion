import { Blog, Empower, Footer, GetStarted, Hero, Navbar, Testimonials } from '@/components'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='relative'>
      <Navbar/>
      <Hero/>
      <Empower/>
      <Blog/>
      <Testimonials/>
      {/* <GetStarted/>
      <Footer/> */}
    </main>
  )
}
