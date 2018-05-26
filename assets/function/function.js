var x=document.querySelector(".x");
var o=document.querySelector(".o");
var gameBody=document.querySelector(".gamebody");
var prompt=document.querySelector(".prompt");
var huPlayer="X";
var aiPlayer="O";
// for x change display
x.addEventListener("click",function (){
 prompt.classList.toggle("hidden");
 gameBody.classList.toggle("hidden");
})

//for o change display
o.addEventListener("click", function () {
    prompt.classList.toggle("hidden");
    gameBody.classList.toggle("hidden");  
})
var origBoard;
const winCombos=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2]
];
const cell=document.querySelectorAll(".cell")

//game start
startgame();
function startgame() {
    origBoard=Array.from(Array(9).keys());
    for (var i=0;i<cell.length;i++){
        cell[i].innerHTML="";
        cell[i].style.removeProperty("background-color");
        cell[i].addEventListener("click",turnClick,false);

    }
    
}
function turnClick(square){
turn(square.target.id,huPlayer);
}
function turn(squareId,player){
    origBoard[squareId]=player;
    document.getElementById(squareId).innerText=player;
    let gameWon=checkWin(origBoard,player);
    if (gameWon){
        gameOver(gameWon);
    }
}

function checkWin(board,player){
    let plays=board.reduce((a,e,i) => 
(e===player)) ? a.concat(i):a,[];
gameWon=null;

}