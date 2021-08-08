// find the divisor for the following numbers. print it in different line.
var s = "";
var numbers = [10,24,49];
for(var i =0; numbers[i]; i=i+1) {
    var temp = numbers[i];
    for(var j =1; j<=temp; j=j+1) {
        if(numbers[i]%j==0){

            s+= j + "\t"; 
        }
    }
    console.log(s);
    s = " " + "\n";
}