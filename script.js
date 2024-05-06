console.log("Welcome to tic tac toe")
let music = new Audio("")
let gameover = new Audio("")
let turn = "X"
let isgameover = false;

const changeTurn = ()=>{
    return turn ==="X" ? "0": "X"
}

const checkWin =()=>{
    let boxtext = document.getElementsByClassName("boxtext");
    let wins =[
        [0,1,2]
        [3,4,5]
        [6,7,8]
        [0,3,6]
        [1,4,7]
        [2,5,8]
        [3,4,7]
        [1,4,8]
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !=="")){
            document.querySelector('.Info').innerText = boxtext[e[0]].innerText + "Won"
            isgameover = true;
        }
    })
}

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click' , ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();        
            checkWin();
            if(isgameover){
            document.getElementsByClassName("Info")[0].innerText = "Turn For" + turn;
            }
        }
    })
})