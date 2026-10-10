import { useEffect } from 'react'
import { About } from '../components/About'
import { Closing, EducationContact } from '../components/EducationContact'
import { EngineeringFocus } from '../components/EngineeringFocus'
import { Hero } from '../components/Hero'
import { MoreProjects } from '../components/MoreProjects'
import { SelectedWorks } from '../components/SelectedWorks'

export function HomePage() {
  useEffect(() => {
    document.title = 'Fiona — AI × Product'
  }, [])

  return (
    <>
      <Hero />
      <About />
      <SelectedWorks />
      <MoreProjects />
      <EngineeringFocus />
      <EducationContact />
      <Closing />
    </>
  )
}
