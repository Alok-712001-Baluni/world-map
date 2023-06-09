import React from 'react'

const Country = ({
    capital=[],
    flags={},
    name={},
    population=null,
    region='',
    languages={}
}) => {
  
  return (
    <div style={{
    marginLeft: '2rem',
    padding:'2rem',
    fontWeight: 'bold',
    background: 'radial-gradient(343px at 46.3% 47.5%, rgb(242, 242, 242) 0%, rgb(241, 241, 241) 72.9%)',    }}
    >
        <div>Country: {name.common}</div>
        <img 
        src={flags.png}
        style={{
            width: '75%',
            height: '35%',
            margin: '2rem 3rem 2rem 3rem',
            objectFit: 'contain'
            }}
        alt={flags.png}
            />
        <div style={{marginBottom:"2rem"}}>Capital(s): {capital.join(", ")} </div>
        <div style={{marginBottom:"2rem"}}>Population: {population}</div>
        <div style={{marginBottom:"2rem"}}>Language(s): {Object.values(languages).join(", ")}</div>
        <div style={{marginBottom:"2rem"}}>Region: {region}</div>
    </div>
  )
}

export default Country