import React from 'react'
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

const Mapp = () => {
  return (
    <YMaps query={{apikey: '37ff45ff-5a52-41fa-a857-34d13707941b'}}>
    <Map defaultState={{ center: [46.1232512, 39.7661764], zoom: 13 }} width="100%" height="400px">
      <Placemark geometry={[46.1232512, 39.7661764]} />
    </Map>
  </YMaps>
  )
}
export default Mapp;
