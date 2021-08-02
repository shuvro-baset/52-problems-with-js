// adding 1st and last digit from a number.

var number = 10240;
var str_number = number.toString();
var first_num = str_number.slice(0,1);
var last_num = str_number.slice(-1);

var add_two_num = parseInt(first_num) + parseInt(last_num);
console.log(add_two_num);