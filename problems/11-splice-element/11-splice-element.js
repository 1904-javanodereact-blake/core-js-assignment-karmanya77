/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/
function spliceElement(someArr, index) {

    if(index === 0){
        someArr.shift();
        return someArr;
    }
    else if(index === someArr.length-1){
        someArr.pop();
        return someArr;
    }
    else{
        for(let i = index; i < someArr.length-1; i++){
            let temp = someArr[i]    ;
            someArr[i] = someArr[i+1];
            someArr[i+1] = temp;
          }
          someArr.pop();
          return someArr;
    }
}

let arr = ['a','b','c','d','e'];
console.log(spliceElement(arr,4));