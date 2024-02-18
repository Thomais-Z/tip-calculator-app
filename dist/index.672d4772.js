const billInput = document.getElementById("bill-input");
const customTipInput = document.getElementById("custom-input");
const numberPeople = document.getElementById("people-input");
const errorMessage = document.querySelector(".error-message");
const btns = document.querySelectorAll(".tip-btn");
const btn5 = document.querySelector(".tip-btn-5");
const btn10 = document.querySelector(".tip-btn-10");
const btn15 = document.querySelector(".tip-btn-15");
const btn25 = document.querySelector(".tip-btn-25");
const btn50 = document.querySelector(".tip-btn-50");
const btnReset = document.querySelector(".btn-reset");
let tip;
let bill;
let people;
let clicked;
let customTip;
let totalPerPerson;
let totalTipPerPerson;
billInput.addEventListener("change", function() {
    bill = +billInput.value;
    btnReset.style.backgroundColor = "var(--primary-color)";
});
customTipInput.addEventListener("change", function() {
    customTip = +customTipInput.value / 100;
});
customTipInput.addEventListener("click", function() {
    defaultColors(btn10, btn15, btn25, btn50);
    btn5.style.backgroundColor = "var(--dark-secondary-color)";
    btn5.style.color = "var(--very-light-cyan)";
});
numberPeople.addEventListener("blur", function() {
    people = +numberPeople.value;
    if (people === 0) {
        errorMessage.classList.remove("hidden");
        numberPeople.classList.add("error-border");
    } else {
        errorMessage.classList.add("hidden");
        numberPeople.classList.remove("error-border");
        calcAll();
        totalPerPerson = totalPerPerson + totalTipPerPerson;
        document.querySelector(".tip-amount-price").textContent = `$${totalTipPerPerson.toFixed(2)}`;
        document.querySelector(".tip-amount-total").textContent = `$${totalPerPerson.toFixed(2)}`;
    }
});
const calcTotalPerPerson = function(totalBill, people) {
    return totalBill / people;
};
const calcTipPerPerson = function(totalBill, tipPerc, people) {
    return totalBill * tipPerc / people;
};
const calcAll = function() {
    totalPerPerson = calcTotalPerPerson(bill, people);
    if (!customTip) totalTipPerPerson = calcTipPerPerson(bill, tip, people);
    if (customTip) totalTipPerPerson = calcTipPerPerson(bill, customTip, people);
};
btn5.addEventListener("click", function() {
    clicked = btn5;
    tip = 0.05;
    defaultColors(btn10, btn15, btn25, btn50);
    btn5.style.backgroundColor = "var(--primary-color)";
    btn5.style.color = "var(--dark-secondary-color)";
});
btn10.addEventListener("click", function() {
    clicked = btn10;
    tip = 0.1;
    defaultColors(btn5, btn15, btn25, btn50);
    btn10.style.backgroundColor = "var(--primary-color)";
    btn10.style.color = "var(--dark-secondary-color)";
});
btn15.addEventListener("click", function() {
    clicked = btn15;
    tip = 0.15;
    defaultColors(btn5, btn10, btn25, btn50);
    btn15.style.backgroundColor = "var(--primary-color)";
    btn15.style.color = "var(--dark-secondary-color)";
});
btn25.addEventListener("click", function() {
    clicked = btn25;
    tip = 0.25;
    defaultColors(btn10, btn15, btn5, btn50);
    btn25.style.backgroundColor = "var(--primary-color)";
    btn25.style.color = "var(--dark-secondary-color)";
});
btn50.addEventListener("click", function() {
    clicked = btn50;
    tip = 0.5;
    defaultColors(btn10, btn15, btn5, btn25);
    btn50.style.backgroundColor = "var(--primary-color)";
    btn50.style.color = "var(--dark-secondary-color)";
});
btns.forEach((btn)=>btn.addEventListener("click", function(e) {
        e.preventDefault();
    }));
btns.forEach((btn)=>btn.addEventListener("mouseover", function() {
        btn.style.backgroundColor = "var(--light-grayish-cyan)";
        btn.style.color = "var(--dark-secondary-color)";
    }));
btns.forEach((btn)=>btn.addEventListener("mouseout", function() {
        if (clicked !== btn) {
            btn.style.backgroundColor = "var(--dark-secondary-color)";
            btn.style.color = "var(--very-light-cyan)";
        } else {
            btn.style.backgroundColor = "var(--primary-color)";
            btn.style.color = "var(--dark-secondary-color)";
        }
    }));
const defaultColors = function(btn1, btn2, btn3, btn4) {
    btn1.style.backgroundColor = "var(--dark-secondary-color)";
    btn1.style.color = "var(--very-light-cyan)";
    btn2.style.backgroundColor = "var(--dark-secondary-color)";
    btn2.style.color = "var(--very-light-cyan)";
    btn3.style.backgroundColor = "var(--dark-secondary-color)";
    btn3.style.color = "var(--very-light-cyan)";
    btn4.style.backgroundColor = "var(--dark-secondary-color)";
    btn4.style.color = "var(--very-light-cyan)";
};
btnReset.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(".tip-amount-price").textContent = "$0.00";
    document.querySelector(".tip-amount-total").textContent = "$0.00";
    billInput.value = "";
    bill = 0;
    numberPeople.value = "";
    errorMessage.classList.add("hidden");
    numberPeople.classList.remove("error-border");
    btnReset.style.backgroundColor = "var(--dark-grayish-cyan)";
    if (!customTip) {
        defaultColors(btn10, btn15, btn25, btn50);
        btn5.style.backgroundColor = "var(--dark-secondary-color)";
        btn5.style.color = "var(--very-light-cyan)";
    } else customTipInput.value = "";
});

//# sourceMappingURL=index.672d4772.js.map
