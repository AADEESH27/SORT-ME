import React from 'react'

const Slider = ({length, setLength}) => {

  
    return (
    <div className = 'slide-container'>
        <input type="range" className='slider' min='2' max='99' step='1' value={length} onChange = {(e) => setLength(e.target.value)}/>
        <h1 className='slider-value'>{length}</h1>
    </div>
  )
}

export default Slider
