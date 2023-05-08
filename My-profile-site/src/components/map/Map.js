import React from 'react'
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

const Mapp = () => {
  return (
    <YMaps>
    <Map defaultState={{ center: [46.1232512, 39.7661764], zoom: 13 }} width="100%" height="400px">
      <Placemark geometry={[46.1232512, 39.7661764]} />
    </Map>
  </YMaps>
  )
}
export default Mapp;
