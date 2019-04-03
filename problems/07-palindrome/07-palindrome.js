/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
function isPalindrome(someStr) {
    let last = someStr.length;
    
    str = someStr.toLowerCase();
    let reversed = '';

    for(let i = last-1; i >= 0; i-- ){
            reversed = reversed + str[i];
    }
    if(reversed === str){
            return 'Given String is a Palindrome';
    }
    else{
            return 'Given String is not a Palindrome';
    }
}

console.log(isPalindrome('snsnsA'));