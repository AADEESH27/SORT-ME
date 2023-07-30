import React from 'react'
import {useState, useEffect, useRef} from 'react'
import Dropdown from './Dropdown';
import Dropdown2 from './Dropdown2';

const Graph1 = ({length}) => {

    const [arr, setArr] = useState([]);
    const [type, setType] = useState('bubble');
    const [type2, setType2] = useState('bubble');
    const [color, setColor] = useState('#156064')
    const stopRef = useRef(false);
    const barWidth = 400/length;
    const barGap = 150/length;
    const arrayBars = document.getElementsByClassName("arrayBar");
    const arrayBars2 = document.getElementsByClassName("arrayBar2");

    useEffect(() => {
        const newArray = [];
        for (let i = 0; i< length; i++){
            newArray.push(Math.floor(Math.random() * 100))
        }
        setArr(newArray);
        
    }, [length]);

    const reset  = () => {
        stopRef.current = true;
        const newArray = [];
        for (let i = 0; i< length; i++){
            newArray.push(Math.floor(Math.random() * 100));
        }
        setArr(newArray);
        for(let j = 0; j< length; j++){
            arrayBars[j].style.background = '#f2fdff';
            arrayBars2[j].style.background = '#f2fdff'
        }
    };



    function swap(elementOne, elementTwo){
        let temp = elementOne.style.height;
        elementOne.style.height = `${parseInt(elementTwo.style.height)}px`;
        elementTwo.style.height = `${parseInt(temp)}px`;
    }
    
    //delay function to slow down for loop to create animation
    function delay(ms){
        return new Promise(resolve => {
            setTimeout(() => {resolve('')}, ms)
        })
    }

    //Disable function to prevent sort button and slider from being used while already sorting
    function disableBtns(){
        document.querySelector(".start").disabled = true;
        document.querySelector(".slider").disabled = true;
        setColor('#333333')
    }

    function enableBtns(){
        document.querySelector(".start").disabled = false;
        document.querySelector(".slider").disabled = false;
        setColor('#156064');
    }

    //Bubble Sort
    async function bubbleSort(arrayBars){
        for(let i=0;i<length;i++){
            for(let j= 0; j<length-i-1; j++){
                if(stopRef.current){
                    return;
                }
                //color adjacent values
                arrayBars[j].style.background = '#fac748';
                arrayBars[j+1].style.background = '#fac748';
                
                //compare adjacent values
                if(parseInt(arrayBars[j].style.height) > parseInt(arrayBars[j+1].style.height)){
                    await delay(50);
                    //swap if left is greater than right 
                    swap(arrayBars[j],arrayBars[j+1]);

                }
                //remove color
                arrayBars[j].style.background = '#f2fdff';
                arrayBars[j+1].style.background = '#f2fdff';
            }
            // color correct value
            arrayBars[length - 1-i].style.backgroundColor = 'lightgreen';    
        }
        // color first value (last value remaining)
        arrayBars[0].style.backgroundColor = 'lightgreen';    
       
    }


    //Selection Sort
    async function selectionSort(arrayBars){
        for(let i =0; i<length; i++){
            let min =i;   //Set baseline min value
            if(!stopRef.current){
                arrayBars[min].style.background = '#fac748' //color the key
            }
            for(let j = i+1; j<length; j++){
                if(stopRef.current){
                    return;
                }
                arrayBars[j].style.background = 'coral';    //color comparisons
                await delay(50);
                if(parseInt(arrayBars[j].style.height)<parseInt(arrayBars[min].style.height)){
                    if(!stopRef.current){arrayBars[j].style.background = '#6495ED'}
                    if(min !== i){
                        arrayBars[min].style.background = '#f2fdff';    //remove old key color
                    }
                    min = j;    //Find true min value
                }
                else{
                    arrayBars[j].style.background = '#f2fdff';  //remove old comparison color
                }
            }
            await delay(50);
            swap(arrayBars[min], arrayBars[i]) //Swap baseline value with true min value
            arrayBars[min].style.background = '#f2fdff';    //remove key color
            if(!stopRef.current){
                arrayBars[i].style.background = 'lightgreen';  //color correct values
            }
        }
    }

    //Insertion Sort
    async function insertionSort(arrayBars){
        arrayBars[0].style.background = 'lightgreen';
        for(let i = 1;i<length;i++){
            if(stopRef.current){
                return;
            }
            let j = i-1;    //correct index of last element
            let current = parseInt(arrayBars[i].style.height);    //last element of array
            arrayBars[i].style.background = '#fac748';
            
            await delay(50);

            while(j>= 0 && parseInt(arrayBars[j].style.height)>current){    
                if(stopRef.current){
                    return;
                }
                //find correct index of last element
                arrayBars[j].style.background ='#fac748';
                arrayBars[j+1].style.height = arrayBars[j].style.height;  //shift sorted elements up by one index
                j--;
                
                await delay(50);
                //color correctly sorted 
                if(!stopRef.current){
                    for(let n = i; n>=0; n--){
                        arrayBars[n].style.background = 'lightgreen';
                    }
                }
            }
            if(!stopRef.current){
                arrayBars[j+1].style.height = `${current}px`;    //set last element to correct index
                arrayBars[i].style.background = 'lightgreen';   //color current index
            }
        }
    }

    //Merge Sort
    async function merge(arrayBars, low, mid, high){
        const n1 = mid - low + 1;
        const n2 = high - mid;
        //create subarrays by splitting arrayBars in half
        let left = new Array(n1);
        let right = new Array(n2);

        //color each sub-array being compared 

        //left array
        for(let i = 0; i < n1; i++){
            if(stopRef.current){return}
            await delay(50);
            if(!stopRef.current){
                arrayBars[low + i].style.background = '#fac748';
                left[i] = arrayBars[low + i].style.height;
            }
        }

        //right array
        for(let i = 0; i < n2; i++){
            if(stopRef.current){return}
            await delay(50);
            if(!stopRef.current){
                arrayBars[mid + 1 + i].style.background = 'coral';
                right[i] = arrayBars[mid + 1 + i].style.height;
            }
        }

        await delay(50);
        let i = 0, j = 0, k = low;
        while(i < n1 && j < n2){
            if(stopRef.current){return}
            await delay(50);
            //comparing two elements before merging
            if(parseInt(left[i]) <= parseInt(right[j])){
                if((n1 + n2) == length){
                    if(!stopRef.current){
                        arrayBars[k].style.background = 'lightgreen';
                    }
                }
                else{
                    if(!stopRef.current){
                        arrayBars[k].style.background = '#6495ED';
                    }
                }
                
                arrayBars[k].style.height = left[i];
                i++;
                k++;
            }
            else{
                // colors completed if sum of sub-array lengths equals arrayBars length
                if((n1 + n2) == length){
                    if(!stopRef.current){
                        arrayBars[k].style.background = 'lightgreen';
                    }
                }
                else{
                    if(!stopRef.current){
                        arrayBars[k].style.background = '#6495ED';
                    }
                } 
                arrayBars[k].style.height = right[j];
                j++;
                k++;
            }
        }
        while(i < n1){
            if(stopRef.current){return}
            await delay(50);
            // colors completed if sum of sub-array lengths equals arrayBars length
            if((n1 + n2) == length){
                if(!stopRef.current){
                    arrayBars[k].style.background = 'lightgreen';
                }
            }
            else{
                if(!stopRef.current){
                    arrayBars[k].style.background = '#6495ED';
                }
            }
            arrayBars[k].style.height = left[i];
            i++;
            k++;
        }
        while(j < n2){
            if(stopRef.current){return}
            await delay(50);
            // color correctly sorted elements
            if((n1 + n2) == length){
                if(!stopRef.current){
                        arrayBars[k].style.background = 'lightgreen';
                    }
                }
                else{
                    if(!stopRef.current){
                        arrayBars[k].style.background = '#6495ED';
                    }
            }
            arrayBars[k].style.height = right[j];
            j++;
            k++;
        }
    }
    
    async function mergeSort(arrayBars, left, right){
        if(left >= right){
            return; //when only one element remains break loop
        }
        const mid = left + Math.floor((right - left) / 2);
        if(!stopRef.current){await mergeSort(arrayBars, left, mid)}
        if(!stopRef.current){await mergeSort(arrayBars, mid + 1, right)}
        if(!stopRef.current){await merge(arrayBars, left, mid, right)}
    }

    //Quick Sort
    async function partition(arrayBars, left, right){
        stopRef.current = false;
        let i = left -1;
        if(!stopRef.current){
            arrayBars[right].style.background = '#6495ED';    //color pivot
        }
        for(let j = left; j<=right-1; j++){
            if(stopRef.current){return}
            arrayBars[j].style.background = '#fac748';    //color current element
            await delay(50);

            if(parseInt(arrayBars[j].style.height) < parseInt(arrayBars[right].style.height)){
                if(!stopRef.current){
                    i++;
                    swap(arrayBars[i], arrayBars[j]);
                    arrayBars[i].style.background = '#fac748';
                    if(i !== j){arrayBars[j].style.background = '#fac748'}
                    await delay(50);
                }
            }
            else{
                //if current > pivot, color
                if(!stopRef.current){
                    arrayBars[j].style.background = 'coral';
                }
            }
        }
        i++;
        await delay(50);
        if(!stopRef.current){
            swap(arrayBars[i], arrayBars[right]);
            arrayBars[right].style.background = 'coral';
            arrayBars[i].style.background = 'lightgreen';   //color correct element
        }
        await delay(50);

        //remove color if not correctly sorted
        for(let n = 0; n<length; n++){
            if(stopRef.current){return}
            if(arrayBars[n].style.background !== 'lightgreen'){
                arrayBars[n].style.background = '#f2fdff'
            }
        }

        return i;
    }

    async function quickSort(arrayBars, left, right){
        if(left < right && !stopRef.current){
            let pivot = await partition(arrayBars, left, right);
            await quickSort(arrayBars, left, pivot-1);
            await quickSort(arrayBars, pivot+1, right);
        }
        else{
            // color correct end elements
            if(left >= 0 && right >= 0 && left < length && right < length && !stopRef.current){
                arrayBars[left].style.background = 'lightgreen';
                arrayBars[right].style.background = 'lightgreen';
            }
        }
    }

    //Heap Sort 
    async function maxHeapify(arrayBars, n, i) {
        let largest = i;
        let l = 2 * i + 1; //left child index
        let r = 2 * i + 2; //right child index
        
        arrayBars[largest].style.background = '#6495ED'

        if(l<n){
            arrayBars[l].style.background = '#fac748'
        }
        if(r<n){
            arrayBars[r].style.background = '#fac748'
        }
        //If left child is smaller than root
         if (l < n && parseInt(arrayBars[l].style.height) > parseInt(arrayBars[largest].style.height)) {
            largest = l; 
         }
        
         // If right child is smaller than smallest so far 
         if (r < n && parseInt(arrayBars[r].style.height) > parseInt(arrayBars[largest].style.height)) {
            largest = r; 
         }
         await delay(50);
         arrayBars[i].style.background = '#f2fdff'
         if(l<n){
            arrayBars[l].style.background = '#f2fdff'
        }
        if(r<n){
            arrayBars[r].style.background = '#f2fdff'
        }
         // If smallest is not root 
         if (largest !== i) {
            if(stopRef.current){return}
            await delay(50);
            swap(arrayBars[i], arrayBars[largest]);
            // Recursively heapify the affected sub-tree 
            await delay(50);
            await maxHeapify(arrayBars, n, largest); 
          }
           
    }
      
    async function heapSort(arrayBars, n){ 
        // Build heap (rearrange array) 
        for (let i = parseInt(n / 2 - 1); i >= 0; i--) {
            await delay(50);
            if(stopRef.current){return}
            await maxHeapify(arrayBars, n, i); 
        }
        
        // One by one extract an element from heap 
        for (let i = n - 1; i >= 0; i--) { 
            await delay(50);
            if(stopRef.current){return}
            // Move current root to end
            swap(arrayBars[0], arrayBars[i]);
            arrayBars[i].style.background = 'lightgreen'
            await delay(50);
            // call max heapify on the reduced heap 
            await maxHeapify(arrayBars, i, 0);

        }
        if(!stopRef.current){
            arrayBars[0].style.background = 'lightgreen' 
        }
           
    }

    async function start(){
        if(type ==='bubble'){await bubbleSort(arrayBars)}
        if(type === 'selection'){await selectionSort(arrayBars)}
        if(type === 'insertion'){await insertionSort(arrayBars)}
        if(type === 'quick'){await quickSort(arrayBars, 0, length - 1)}
        if(type === 'merge'){await mergeSort(arrayBars, 0, length - 1)}
        if(type === 'heap'){await heapSort(arrayBars,length)}
    }

    async function start2(){
        if(type2 ==='bubble'){await bubbleSort(arrayBars2)}
        if(type2 === 'selection'){await selectionSort(arrayBars2)}
        if(type2 === 'insertion'){await insertionSort(arrayBars2)}
        if(type2 === 'quick'){await quickSort(arrayBars2, 0, length - 1)}
        if(type2 === 'merge'){await mergeSort(arrayBars2, 0, length - 1)}
        if(type2 === 'heap'){await heapSort(arrayBars2,length)}
    }
  return (
    <>
    <div className = 'graphContainer'>
        <div className = 'btns'>
            <div>
                <button className = 'start' 
                    onClick = {() => {
                    stopRef.current = false;
                    disableBtns();
                    start() &&
                    start2()
                }}
                style={{background: `${color}`}}>
                    Sort
                </button>
            </div>
            <div >
                <button className = 'reset' onClick = {() => {
                    reset();
                    enableBtns();
                }}>
                    Reset
                </button>
            </div>
        </div>
        <div className = "graphs">
            <div className = "lGraph">
                <Dropdown  setType={setType} />
                <div className="main"
                    style={{ gap: `${barGap}px` }}>
                        {arr.map((value, index) => {
                            return (
                                <div
                                    className="arrayBar"
                                    key={index}
                                    style={{
                                        height: `${value * 3}px`,
                                        width: `${barWidth}px`,
                                        background: '#f2fdff',
                                    }}
                                ></div>
                            );
                        })}
                    </div>
            </div>
            <div className = 'rGraph'>
                <Dropdown2  setType2={setType2} />
                <div className ="main"
                style={{ gap: `${barGap}px` }}>
                {arr.map((value, index) => {
                    return (
                        <div
                            className="arrayBar2"
                            key={index}
                            style={{
                                height: `${value * 3}px`,
                                width: `${barWidth}px`,
                                background: '#f2fdff',
                            }}
                        ></div>
                    );
                })}
                </div>
                </div>
            </div>
            </div>
          </>
  )
}

export default Graph1
