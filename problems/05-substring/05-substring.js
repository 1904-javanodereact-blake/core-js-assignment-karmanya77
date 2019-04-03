/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */
function substring(someStr, startIndex, endIndex) {

    let sub = '';
    if(typeof(someStr) == "string"){
        sub = someStr.slice(startIndex,endIndex);
        return sub;
    }
    else{
        console.log("The input was incorrect.");
    }
}

let str = 'hello world';
console.log(substring(str,2,5));