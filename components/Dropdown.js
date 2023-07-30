import React from 'react'


function Dropdown({setType}) {

    

    return (
        <div className='ldrop'>
            <select className="dropdown" onChange={(e) => setType(e.target.value)}>
                <option value="bubble">Bubble Sort</option>
                <option value="selection">Selection Sort</option>
                <option value="insertion">Insertion Sort</option>
                <option value="merge">Merge Sort</option>
                <option value="quick">Quick Sort</option>
                <option value="heap">Heap Sort</option>
            </select>
        </div>
            
    )
}

export default Dropdown
