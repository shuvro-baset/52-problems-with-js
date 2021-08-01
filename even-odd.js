// find a number even or odd. 

let num = 20
if (num%2 == 0) {
    console.log(num, ": is a even number");
}
else {
    console.log(num, ": is a odd number");
}


function evenOrOdd(num) { //for string length take string
    if (num % 2 == 0) {//and replace numm with string.length here
      return "even";
    } else {
      return "odd";
    }
  }
console.log(evenOrOdd(21))
