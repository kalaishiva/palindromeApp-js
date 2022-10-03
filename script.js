let inputText = document.querySelector(".input");
//console.log(inputText);

let output = document.querySelector(".output");



function checkWord() {
    let word = inputText.value;
    let wordLength = word.length - 1; //length of a word
    //console.log(wordLength);

    for (let index = 0; index < wordLength / 2; index++) {
        let fromLastNum = wordLength - index; //get the last letter

        if (word[index] != word[fromLastNum]) {
            return output.innerHTML = "It's NOT a Palindrome";
        }

    }
    output.style.color = 'orange';
    return output.innerHTML = "It's a Palindrome";


}