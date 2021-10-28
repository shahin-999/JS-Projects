// String Machine

var textArea = document.querySelector("#textarea");
const wordArea = document.querySelector("#word");
const letterArea = document.querySelector("#letter");


// listenning event (change)
textArea.addEventListener("keyup", function() {
    let txt = textArea.value; // given text store here

    //let numberOfSentance = txt.split(".").length; // txt.split(".") return a array. I find length of this array
    let numberOfWord = txt.match(/\w+/g).length; // w+ take the hole letter as a group
    let numberOfLetter = txt.match(/\w/g).length; // w take only one letter
    //let numberOfPara = txt.match(/\n+/g).length;

    //sentenceArea.innerHTML = `${numberOfSentance} Sentances`;
    wordArea.innerHTML = numberOfWord
    letterArea.innerHTML = numberOfLetter;
    //paraArea.innerHTML = `${numberOfPara} Paragraps`;
})

const clrBtn = document.querySelector("#clearBtn");
clrBtn.addEventListener("click", ()=>{
    textArea.value = "";
    wordArea.innerHTML = "0";
    letterArea.innerHTML = "0";
    
})

