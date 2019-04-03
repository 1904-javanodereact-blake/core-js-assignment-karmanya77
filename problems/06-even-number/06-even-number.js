/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */
function isEven(someNum) {
  let temp = someNum;
  let remainder;
  if(someNum == 0){
      return 'Number is Even.';
  }
  else{
    for(let i = 0; i < someNum/2; i++){
      remainder = temp-2;
      temp = temp-2;
    }
    if(remainder == 0){
        return 'Number is Even.';
    }
    else{
        return 'Number is odd.';
    }
  }
}

console.log(isEven(21));