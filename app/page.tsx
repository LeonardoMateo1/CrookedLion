import { Blog, Empower, Hero } from '@/components'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='relative'>
      <Hero/>
      <Empower/>
      <Blog/>
    </main>
  )
}
