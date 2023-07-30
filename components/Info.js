import React from 'react'
import { Link } from 'react-router-dom'
import bubble from './images/bubble.png'
import select from './images/select.png'
import insert from './images/insert.png'
import merge from './images/merge.png'
import quick from './images/quick.png'
import heap from './images/heap.png'

const Info = () => {
    const text = '< Back'
  return (
    <div>
    <div className='info'>
      <Link className = 'backBtn' to='/'>{text}</Link>
      <img src={bubble} alt="Bubble Sort Visual" />
      <h3>Bubble Sort</h3>
      <h4>Bubble sort is the simplest sorting algorithm. The algorithm works by traversing an array and comparing adjacent elements, if one's precursor has a higher value, the elements are swapped. In SortMe's bubble sort animation, each adjacent pair being compared is highlighted in a yellow color as the algorithm traverses through the array. Bubble Sort has a time complexity of O(N^2), meaning that as data sets become larger, the bubble sort algorithm will become slower and extremely inefficient (ten times the number of elements will take almost one hundred times as long to sort). Bubble sort is however one of the easiest sorting algorithms to understand and implement, it is a stable sorting algorithm (two objects with equal key will retain their initial order), and it doesn't require much additional memory.
      </h4>
      <img src={select} alt="Selection Sort Visual" />
      <h3>Selection Sort</h3>
      <h4>Selection sort is another fairly simple sorting algorithm. This algorithm iterates through an unsorted array to find the smallest element, then brings that element to the front. In SortMe's animation, the current "key" element is colored in yellow, the current minimum element is colored in blue, and as the algorithm iterates through the array the current selected element is colored in orange. Selection sort also has a time complexity of O(N^2), making it inefficient for larger arrays. Similarly to bubble sort, selection sort performs very well on smaller lists and doesn't requre much memory for sorting. 
      </h4>
      <img src={insert} alt="Insertion Sort Visual" />
      <h3>Insertion Sort</h3>
      <h4>The insertion sort algorithm works similarly to how one would sort a hand of cards: it splits the array into sorted and unsorted sections and elements from the unsorted section are then compared to their predecessor in the sorted section, if it is less than that value, it's compared to the next value preceding that one and so forth. The greater elements are then moved up one index to make room for inserting the selected element. In the animation, the green section of the array represents the "sorted" section, and the current element is colored yellow as it is compared. Insertion sort also has a time complexity of O(N^2) and does not perform well with large lists. Insertion sort is a very simple algorthm to understand, and is most ideal on simple, smaller lists, especially those already sorted. </h4>
      <img src={merge} alt="Merge Sort Visual" />
      <h3>Merge Sort</h3>
      <h4>Merge Sort works by repeatedly halving the array into two sub-arrays until each sub array contains just one element. The elements are then sorted and the halves are merged back together until the array is whole and sorted. In the animation, when comparing the sub-arrays the left sub-array is colored yellow and the right sub-array is colored orange, and after sorting the merged sub-array is colored blue. Merge sort is a recursive algorithm and has a time complexity of O(Nlog(N)), meaning it performs well with large data sets. Merge sort can be less efficient than the previous sorting algorithms for smaller arrays, and it also takes up significantly more memory as each sub-array requires additional memory. As a result of this, merge sort is popular for external sorting, when the data that needs to be sorted is too large to be sorted internally.  </h4>
      <img src={quick} alt="Quick Sort Visual" />
      <h3>Quick Sort</h3>
      <h4>The Quick Sort algorithm relies on a partition algorithm. A "pivot" element is selected (any element can be the pivot element, but we choose the last element as the pivot) and is placed in its correct spot in the array, then the array is sorted recursively around it. To place it in its correct spot, the partition algorithm repeatedly splits the array into two sub-arrays, one with values less than the pivot and one with values greater than the pivot. For each sub-array a new pivot is chosen and the partition is ran until the array is completely sorted around the original pivot element. In the animation, the pivot is colored blue, the partition elements are colored in yellow and orange. Quick sort has a best case time complexity of O(Nlog(N)) and a worst case time complexity of O(N^2), making it efficient with large data sets. The worst case complexity is when the pivot is poorly chosen, making it not a good choice for smaller data sets. Quick sort is not a stable sort (unlike bubble sort), but it doesn't require much memory to function.</h4>
      <img className='heapVisual' src={heap} alt="Heap Sort Visual" />
      <h3>Heap Sort</h3>
      <h4>A heap (or binary heap) is tree shaped data structure, similar to a completed binary tree. To apply heap sort, the array first needs to be "max heapified", or converted into a heap in which each parent node is greater than their corresponding child node. In the visual above, top row shows the process of converting an array into a max heap, with blue color reprsenting the parent node and yellow respresenting their child nodes. Once the array is max heapified, the sorting can begin. The heap sort algorithm works by removing the top-most, or largest, element and placing it in a new array, then moving the bottom left most element to the top position, and calling the max heap funtion to position that element in its correct place. This process is repeated and the sorted array is populated by removing the top most values during each iteration and placing them into the zeroth index of the sorted array. In SortMe's animation, you can see that the array is first max heapified and then it begins sorting, with the current selected parent node in blue and its two child nodes in yellow. Heap sort has a time complexity of O(Nlog(N)), making it efficient only for larger data sets. This algorithm also uses minimal memory, but it is an unstable sorting algorithm, and also struggles with more complex types of data.  </h4>

      </div>
    </div>
  )
}

export default Info
