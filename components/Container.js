import React from 'react'
import Graphs from './Graphs'

const Container = ({length, showStart}) => {
  return (
    <div className='container'>
        <div className="graph">
          <Graphs
          length = {length} 
          showStart = {showStart}/>
        </div>
    </div>
  )
}

export default Container
