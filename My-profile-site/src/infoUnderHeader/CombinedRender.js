import React from 'react'
import UnderHeader from '../components/underHeader/UnderHeader'
import Projects from '../pages/Projects'
import InfoUnderHeader from './InfoUnderHeader'
import InfoUnderHeader2 from '../components/SecondInfoUnderHeader/UndHeadModal'
import Advantage from '../components/Advantages/Advantage'
import Mapp from '../components/map/Map'

export default function CombinedRender() {
  return (
    <>
    <InfoUnderHeader2/>
    <Projects/>
    <Mapp/>
    <Advantage/>
    
    
    </>
  )
}
