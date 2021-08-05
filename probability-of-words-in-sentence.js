// find the probability of a sentence. 

var sentence  = "I am full stack web developer. I love python."
var count_word = sentence.split(" ");
let words = sentence.split(" ");
let wordMap = {};

for (let i = 0; i < words.length; i++) {
    let currentWordCount = wordMap[words[i]];
    let count = currentWordCount ? currentWordCount : 0;
    wordMap[words[i]] = count + 1;
}
console.log(wordMap)
console.log(count_word.length)