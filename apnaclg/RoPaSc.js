let choices=document.querySelectorAll(".choice");
let usersc=document.getElementById("userscore");
let compsc=document.getElementById("compscore");
let usercnt=0;
let compcnt=0;

const winner = (user,comp) => {
    let t=document.getElementById("text");
    if((user=="rock"&&comp=="scissors")||(user=="paper"&&comp=="rock")||(user=="scissors"&&comp=="paper")) {
        t.innerText="User Wins";
        t.style.backgroundColor= "aqua";
        usercnt++;
        usersc.innerText=usercnt;
    }
    else if((user=="scissors"&&comp=="rock")||(user=="rock"&&comp=="paper")||(user=="paper"&&comp=="scissors")) {
        t.innerText="Computer Wins! HUH NOOB";
        t.style.backgroundColor= "chartreuse";
        compcnt++;
        compsc.innerText=compcnt;
    }
    else {
        t.innerText="It's a Draw";
        t.style.backgroundColor= "cornflowerblue";
    }
}

const comp = (user) => {
    let arr=["rock","paper","scissors"];
    let idx=Math.floor(Math.random()*3);
    console.log("Comp chose "+arr[idx]);
    winner(user,arr[idx]);
}

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        let user=choice.id;
        console.log("User chose "+user);
        comp(user);
    })
})