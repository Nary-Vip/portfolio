import IntroComponent from '@/components/Intro'
import ProjectsPage from '@/components/Projects'
import SectionDivider from '@/components/SectionDivider'
import About from '@/components/About'

import Image from 'next/image'

export default function Home() {
  return (
    <main className='flex flex-col items-center px-4'>
      <IntroComponent />
      <SectionDivider />
      <About/>
      <ProjectsPage/>
    </main>
  )
}
