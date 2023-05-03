import React from 'react'
import UnderHeader from '../components/underHeader/UnderHeader'
import Projects from '../pages/Projects'
import InfoUnderHeader from './InfoUnderHeader'
import InfoUnderHeader2 from '../components/SecondInfoUnderHeader/UndHeadModal'

export default function CombinedRender() {
  return (
    <>
    <InfoUnderHeader2/>
    <Projects/>
    
    </>
  )
}
