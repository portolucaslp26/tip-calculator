const bill = document.querySelector("#bill-input");
const tipBtn = document.querySelectorAll(".tip-btn");
const custom = document.querySelector("#custom");
const numberOfPeople = document.querySelector("#number-of-people");
const tipAmount = document.querySelector("#tip-amount");
const total = document.querySelector("#total"); 
const reset = document.querySelector("#reset");

let tip = 0;
let billValue = 0;
let numberOfPeopleValue = 0;

// TODO: total person
// bill * (1 + tip) / number of people

const validation = (value, arg1, arg2) => {
    if (!value) {
        tipAmount.innerHTML = "$0.00";
    } else if (arg1 && arg2) {
        tipAmount.innerHTML = "$" + ((billValue * tip) / numberOfPeopleValue).toFixed(2);
        total.innerHTML = "$" + ((billValue * (1 + tip)) / numberOfPeopleValue).toFixed(2); 
    } 
}

for (let i = 0; i < tipBtn.length; i++) {
    tipBtn[i].addEventListener("click", function() {
        if (tipBtn[i].innerHTML === "5%") {
            tip = `.0${parseInt(this.innerHTML)}`;
        } else {
            tip = `.${parseInt(this.innerHTML)}`;
        }
        for (let i = 0; i < tipBtn.length; i++) {
            tipBtn[i].style.backgroundColor = "hsl(183, 100%, 15%)";
            tipBtn[i].style.color = "white";
        }
        this.style.backgroundColor = "hsl(172, 67%, 45%)";
        this.style.color = "black";
        validation(tip, billValue, numberOfPeopleValue);
    })
}

bill.addEventListener("keyup", function(e) {
    billValue = parseInt(e.target.value);
    validation(billValue, tip, numberOfPeopleValue);
})

numberOfPeople.addEventListener("keyup", function(e) {
    numberOfPeopleValue = parseInt(e.target.value);
    validation(numberOfPeopleValue, bill, tip);
})

custom.addEventListener("keyup", function(e) {
    for (let i = 0; i < tipBtn.length; i++) {
        tipBtn[i].style.backgroundColor = "hsl(183, 100%, 15%)";
        tipBtn[i].style.color = "white";
    }
    tip = (parseInt(e.target.value) / 100);
    validation(tip, billValue, numberOfPeopleValue);
})

reset.addEventListener("click", function() {
    tip = 0;
    billValue = 0;
    numberOfPeopleValue = 0;
    tipAmount.innerHTML = "$0.00";
    total.innerHTML = "$0.00";
    bill.value = "";
    custom.value = "";
    numberOfPeople.value = "";
    for (let a = 0; a < tipBtn.length; a++) {
        tipBtn[a].style.backgroundColor = "hsl(183, 100%, 15%)";
        tipBtn[a].style.color = "white";
    }
})