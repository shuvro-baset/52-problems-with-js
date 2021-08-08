// read a string and reverse every single word then print it.

function reverseString(string){
    var myArray = string.split(" ");
    var newArray = [];
    for (var i = 0; i < myArray.length; i++){
        var word = myArray[i];
        var reverse = word.split("").reverse().join("");
        newArray = newArray + reverse + " ";
    }
    return newArray;
}
console.log(reverseString('shuvro baset is a full stack web developer'));