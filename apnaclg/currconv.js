// const { createElement } = require("react");
const baseURL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

let dropdown = document.querySelectorAll(".sel-container select");
let btn = document.querySelector("button");
let toCur = document.querySelector("#opt2");
let fromCur = document.querySelector("#opt");

for (let select of dropdown) {
    // console.log(select);
    for (let code in countryList) {
        // console.log(code);
        let newOpt = document.createElement("option");
        newOpt.innerText = code;
        newOpt.value = code;
        select.append(newOpt);
        if (select.name == "from" && code == "USD") {
            newOpt.selected = "selected";
        }
        else if (select.name == "to" && code == "INR") {
            newOpt.selected = "selected";
        }
    }
    select.addEventListener("change",(evt)=>{
        updateFlag(evt.target);
    })
}

const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let flagSrc = `https://flagsapi.com/${countryCode}/shiny/64.png`;
    let flag = element.parentElement.querySelector("img");
    flag.src = flagSrc;
}

btn.addEventListener("click",async (evt) => {
    // console.log(toCur.value);
    evt.preventDefault();
    let amt = document.querySelector("#amount");
    if (amt.value <= 0) amt.value = 1;
    const URL = `${baseURL}/eur.json`;
    let response = await fetch(URL);
    let data = await response.json();
    let toRate = data["eur"][toCur.value.toLowerCase()];
    let fromRate = data["eur"][fromCur.value.toLowerCase()];
    // console.log(fromRate, toRate);
    let ch = 0;
    if (toRate > fromRate) {
        exchRate = toRate/fromRate;
    }
    else {
        exchRate = fromRate/toRate;
        ch = 1;
    }
    let info = toRate/fromRate;
    // console.log(info*amt.value);
    let exchTxt = document.querySelector("#exch-info");
    if(!ch) {
        exchTxt.innerText = "1 " + fromCur.value + " = " + info + " " + toCur.value;
    }
    else {
        exchTxt.innerText = "1 " + toCur.value + " = " + info + " " + fromCur.value;
    }
    // console.log(exchTxt.innerText);
    let finalAmt = document.querySelector("#total");
    finalAmt.innerText = "Total Amount: " + info*amt.value;
});