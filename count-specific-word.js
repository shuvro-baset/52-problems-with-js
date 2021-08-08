// from a text count a specific word.

var myText = 'I am a shuvro. Full-stack developer. I love programming and also I love error.Every error gives lots of information and lessons.';
var findWord = 'baset';
function findSpecificWord(text, word) {
    var wordCount = 0;
    for(const t of text) {
        if(t.match(word)){
            wordCount++;
        }
    }
    return `"${word}" is present in "${text}" ${wordCount} times`;
}
console.log(findSpecificWord(myText, findWord));