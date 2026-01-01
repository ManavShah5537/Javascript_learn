let b1=document.getElementById("bx1");
let b2=document.getElementById("bx2");
let b3=document.getElementById("bx3");
let b4=document.getElementById("bx4");
let b5=document.getElementById("bx5");
let b6=document.getElementById("bx6");
let b7=document.getElementById("bx7");
let b8=document.getElementById("bx8");
let b9=document.getElementById("bx9");
let turn=document.querySelector("h1");
let player=1;

turn.innerText="Player "+player;

const check = () => {
    if (
        (b1.innerText === b2.innerText && b2.innerText === b3.innerText && b1.innerText !== "") ||
        (b4.innerText === b5.innerText && b5.innerText === b6.innerText && b4.innerText !== "") ||
        (b7.innerText === b8.innerText && b8.innerText === b9.innerText && b7.innerText !== "") ||

        (b1.innerText === b4.innerText && b4.innerText === b7.innerText && b1.innerText !== "") ||
        (b2.innerText === b5.innerText && b5.innerText === b8.innerText && b2.innerText !== "") ||
        (b3.innerText === b6.innerText && b6.innerText === b9.innerText && b3.innerText !== "") ||

        (b1.innerText === b5.innerText && b5.innerText === b9.innerText && b1.innerText !== "") ||
        (b3.innerText === b5.innerText && b5.innerText === b7.innerText && b3.innerText !== "")
    ) {
        alert(`Player ${player === 1 ? 2 : 1} wins!`);
    }
};

function play(box) {
    if (box.innerText !== "") return;

    if (player === 1) {
        box.innerText = "O";
        player = 2;
    } else {
        box.innerText = "X";
        player = 1;
    }
    turn.innerText="Player "+player;
    check();
}

b1.addEventListener("click",()=>play(b1));
b2.addEventListener("click",()=>play(b2));
b3.addEventListener("click",()=>play(b3));
b4.addEventListener("click",()=>play(b4));
b5.addEventListener("click",()=>play(b5));
b6.addEventListener("click",()=>play(b6));
b7.addEventListener("click",()=>play(b7));
b8.addEventListener("click",()=>play(b8));
b9.addEventListener("click",()=>play(b9));