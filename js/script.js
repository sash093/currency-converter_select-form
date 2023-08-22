console.log("Hello!");

let formElement = document.querySelector(".js-form");
let selectCurrencyElement = document.querySelector(".js-selectCurrency");
let currencyRateElement = document.querySelector(".js-currencyRate");
let amountElement = document.querySelector(".js-amount");
let resultElement = document.querySelector(".js-result");

selectCurrencyElement.addEventListener("change", (event) => {
    currencyRateElement.value = selectCurrencyElement.value;
});

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let currency = selectCurrencyElement.value;
    let amount = amountElement.value;

    let result = amount / currency;

    resultElement.innerText = result.toFixed(2);
});
