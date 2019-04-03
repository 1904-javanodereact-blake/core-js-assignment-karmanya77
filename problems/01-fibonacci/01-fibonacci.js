/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */
function fib(n) {

    let firstNumber = 0;
    let secondNumber = 1;
    let sum = 0;
    console.log(firstNumber);
    console.log(secondNumber);

    for(let i = 0; i < n-1; i++) {
        sum = firstNumber + secondNumber;
        console.log(sum);
        firstNumber = secondNumber;
        secondNumber = sum;

    }
}

fib(12);