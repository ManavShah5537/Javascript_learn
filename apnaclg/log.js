// // console.log(window);
// // console.dir(window);
// const product = {
//     name: "Parker",
//     price: 219,
//     offer: "5%",
//     rating: 4.1,
// };

// import { createElement } from "react";

// const vowels = (s) => {
//     let cnt=0;
//     for(let i=0;i<s.length;i++) {
//         if("aeiouAEIOU".includes(s[i])) {
//             cnt++;
//         }
//     }
//     return cnt;
// }

// let vow=vowels("Manav Shaha");
// // console.log(vow);

// let arr=[1,2,3,4,5,6];

// let out=arr.forEach((val,idx)=>{
//     return val;
// });
// // console.log(out[0],out[1]);

// let marks=[85,97,72,93,32];

// let avg=marks.reduce((prev,cur)=>{
//     return (prev+cur)/marks.length;
// })
// // console.log(avg);
// let h2=document.querySelector("h2");
// h2.innerText=h2.innerText+" from apna clg students";
// console.log(h2);
// let d=document.getElementsByClassName("box");
// for(i of d) {
//     console.log(i.innerText);
// }
// d[0].innerText="YOYOU";
// console.log(d);
// for(i of d) {
//     console.log(i.innerText);
// }

// let but=document.querySelector("button");
// let cnt=0;
// but.addEventListener("click",()=>{
//     cnt++;
//     but.innerText=cnt;
// });
let but=document.querySelector("#add");
const d=document.querySelector("div");
const task=document.querySelector("ul");
d.append(task);
let height=30;
let cnt=0;
let toggle=document.querySelector(".lightDark");
toggle.addEventListener("click",()=>{
    cnt++;
    let bod=document.querySelector("body");
    if(cnt%2!=0) {
        // let bod=document.querySelector("body");
        bod.style.background="#121212";
        bod.style.color="white";
    }
    else {
        bod.style.background="white";
        bod.style.color="black";
    }
})
but.addEventListener("click",()=>{
    let text=document.querySelector("input");
    let li=document.createElement("li");
    // let bx=document.createElement("input");
    let bx = document.createElement("input");
    bx.type = "checkbox";

    bx.style.appearance = "none";
    bx.style.height = "18px";
    bx.style.width = "18px";
    bx.style.borderRadius = "50%";
    bx.style.border = "2px solid black";
    bx.style.cursor = "pointer";
    bx.style.backgroundColor = "white";

    // Make it tick (fill circle)
    let sp=document.createElement("span");
    sp.innerText=text.value;
    // bx.type="checkbox";
    li.append(bx);
    li.append(sp);
    let dlt=document.createElement("button");
    dlt.innerText="Delete";
    li.append(dlt);
    task.append(li);
    height+=27;
    d.style.height=height+"px";
    task.style.visibility="visible";
    text.value="";
    bx.addEventListener("change", () => {
        bx.style.backgroundColor = bx.checked ? "black" : "white";
    });
    dlt.addEventListener("click", () => {
        li.remove(); // removes that specific li
        
        // decrease height when an item is removed
        height -= 27;
        d.style.height = height + "px";

        if (task.children.length === 0) {
            task.style.visibility = "hidden";
        }
    });
});