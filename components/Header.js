import React from 'react'
import Slider from './Slider'

const Header = ({length, setLength, onStart}) => {

  
  return (
    <div className = 'header'>
        <h1>Array Length: </h1>
        <Slider 
        length = {length}
        setLength = {setLength}/>
        
    </div>
  )
}

export default Header
