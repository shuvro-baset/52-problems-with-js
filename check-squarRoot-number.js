// check that is the number is square root or not

function squareroot(number) {
    var number;
    for (var i = number; i >= 1; i--) {
        console.log(i)
        if (i * i === number) {
            number = i;
            break;
       }
   }
   return number;
}
console.log(squareroot(25));
