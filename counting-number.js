// count how many numbers is present in a single line
var number = '102 201 201 202 20 11 15';
function WordCount(str) { 
    return str.split(" ").length;
  }
  
console.log(WordCount(number));