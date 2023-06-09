import React, { useState, useEffect } from 'react';
import Country from './Country';
import countries from '../data/countries.json';
import axios from 'axios';
import { MapContainer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './MyMap.css';

const MyMap = () => {
  const [data, setData] = useState(null);
  const [country, setCountry] = useState(null);

  useEffect(() => {
    fetchCountryInfo();
  }, [country])
  
  const fetchCountryInfo = async () => {
    try{
      const { data } = await axios.get(`https://restcountries.com/v3.1/name/${country}?fullText=true`)
      console.log(data[0]);
      setData(data[0]);
    } catch(e){
      console.log('>>>>>>>>',e);
    }
  }


  let countryStyle = {
    fillColor: "red", // country color
    fillOpacity: 0.5, //opacity of map with the background
    color: 'black', //border color
    weight: 2, // border width
    // dashArray: 5 //to get dashed border.

  }

  const onEachCountry = (countries, layer) => {

    const nation = countries.properties.ADMIN;
    // console.log('country', country);
    layer.bindPopup(nation);
    layer.on({
      click: async (e) => {
        setCountry(nation); 
      }
    })
  }

    return (
    <div>
      <h1 style={{textAlign: 'center'}}>My Map</h1>
      <div style={{
        display: 'flex'
      }}>
      <MapContainer style={{
        height: '80vh',
        width: '70vw'
      }}
      zoom={2}
      center={[20, 100]}
      >
          <GeoJSON
          style={countryStyle} 
          data={countries.features}
          onEachFeature={onEachCountry}
          />
        </MapContainer>
        {data && <Country {...data} />}
      </div>
    </div>
  )
}

export default MyMap