// count how many 0 present as in the last number from a factorial number 

function trailing_zeros_factorial(n) {
    var result = 0;
    for (var i = 5; i <= n; i += 5) {
        var num = i;
        while (num % 5 === 0) {
            num /= 5;
            result++;
        }
    }
    return result;
}

console.log(trailing_zeros_factorial(10))
console.log(trailing_zeros_factorial(15))
console.log(trailing_zeros_factorial(100))