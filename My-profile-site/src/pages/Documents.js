import React from 'react'
import doc from "../assets/Р Индивидуальный_предприниматель.jpg"

export default function Documents() {
  return (
    <div style={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <img src={doc} alt="document" style={{ width: '100%', height: '100%', maxWidth: '1000px' }} />
  </div>
  )
}
