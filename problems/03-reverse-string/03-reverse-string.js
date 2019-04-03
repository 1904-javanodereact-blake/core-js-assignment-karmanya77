/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */
function reverseStr(someStr) {
  
    let s = someStr.toLowerCase();
    let len = s.length;
    let reversedStr = '';
    
    for(let i = len-1; i >= 0; i--){
        reversedStr += s[i];
    }
    console.log(reversedStr);
}

let str = 'Hello World';
reverseStr(str);