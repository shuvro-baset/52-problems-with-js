// find nth number factorial

// 3! = 3*2*1
// 4! = 4*3*2*1

// first approach

var num = 4;
var factorial = 1;

for (var i = 1; i<=num; i++){
    factorial = factorial * i;
}
console.log(factorial)


// 2nd approach

function factorial(n) {
    var factorial = 1;

    for (var i = 1; i<=n; i++){
        factorial = factorial * i;
    }
    return factorial;
}
console.log(factorial(5))



// 3rd approach using recursive function
function recursiveFactorial(n) {
    //base case
    if(n == 0 || n == 1){
        return 1;
    //recursive case
    }else{
        return n * recursiveFactorial(n-1);
    }
}
console.log(recursiveFactorial(5))