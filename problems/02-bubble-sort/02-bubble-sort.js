/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
function bubbleSort(numArray) {
    let n = numArray.length;

    for(let i = 0; i < n-1; i++){
        for(let j = 0; j < n-i-1; j++){
            
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    console.log(numArray);
}

let arr = [9,8,7,6,5,4,3,2,1];
bubbleSort(arr);