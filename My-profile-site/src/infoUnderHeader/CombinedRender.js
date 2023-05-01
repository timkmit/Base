import React from 'react'
import UnderHeader from '../components/underHeader/UnderHeader'
import Projects from '../pages/Projects'
import InfoUnderHeader from './InfoUnderHeader'

export default function CombinedRender() {
  return (
    <>
    <InfoUnderHeader/>
    <Projects/>
    </>
  )
}
