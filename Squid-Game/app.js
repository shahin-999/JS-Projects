// Tik Tac Toe
var gameSound = new Audio("game.mp3");
var gameTurn = "X";
gameSound.play();

//returning and changing game turn
changeTurn = ()=>{
    return gameTurn=="X"?"0":"X";
}

checkWin = ()=>{

}

// game mover here...(0/X) 
var boxes = document.querySelectorAll(".box");
Array.from(boxes).forEach(item=>{
   let boxText = item.querySelector(".box-item");
    item.addEventListener("click",()=>{
        if(boxText.innerText == ''){
            boxText.innerText = gameTurn;
            gameTurn = changeTurn();   
            document.querySelector("#turn-status").innerText = gameTurn;
        }
    })
})


