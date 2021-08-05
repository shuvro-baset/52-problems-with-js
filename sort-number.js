// sort numbers in ascending order

var a = 25;
var b = 5;
var c = 15;
var sort_number = [];
if (a < b){
    if(a<c){
        sort_number.push(a);
        if(b>c){
            sort_number.push(c);
            sort_number.push(b);
        }
        else{
            sort_number.push(b);
            sort_number.push(c);
        }
    }
}
else if (a > b){
    if(b<c){
        sort_number.push(b);
        if(a>c){
            sort_number.push(c);
            sort_number.push(a);
        }
        else{
            sort_number.push(a);
            sort_number.push(c);
        }
    }

}
else{
    sort_number.push(c);
    if(a<b){
        sort_number.push(a);
        sort_number.push(b);
    }
    else{
        sort_number.push(b);
        sort_number.push(a);

    }
}
console.log(sort_number);

// this is not a good solution. its beginner solution proper use of if else condition. 

// Now I will try to find a better solution 

var number1 = 25;
var number2 = 5;
var number3 = 15;
var temp;
if(number1 < number2 && number1<number3) {
    if(number2<number3) {
        console.log( "case:1 -", number1, number2,number3);
    }
    else{
        console.log( "case:1 -", number1, number3,number2);
    }
}
else if(number2 < number1 && number2<number3) {
    if(number1<number3) {
        console.log( "case:2 -", number2, number1,number3);
    }
    else{
        console.log( "case:2 -", number2, number3,number1);
    }
}
else{
    if(number1<number2) {
        console.log( "case:3 -", number3, number1,number2);
    }
    else{
        console.log( "case:3 -", number3, number2,number1);
    }
}
// above method is another method but not good yet. I will try another way later.

