import React from 'react'


function Dropdown2({setType2}) {

    

    return (
        <div className='rdrop'>
            <select className="dropdown" onChange={(e) => setType2(e.target.value)}>
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

export default Dropdown2
