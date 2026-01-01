// const { createElement } = require("react");

let dropdown = document.querySelectorAll(".sel-container select");

for (let select of dropdown) {
    for (let code in countryList) {
        console.log(code);
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
}
