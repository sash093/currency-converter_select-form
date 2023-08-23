{
    const onSelectCurrency = () => {
        const currencyRateElement = document.querySelector(".js-currencyRate");
        const selectCurrencyElement =
            document.querySelector(".js-selectCurrency");

        currencyRateElement.value = selectCurrencyElement.value;
    };

    const calculateResult = (amount, currency) => {
        return amount / currency;
    };

    const updateResult = (result) => {
        const resultElement = document.querySelector(".js-result");

        resultElement.innerText = result.toFixed(2);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const selectCurrencyElement =
            document.querySelector(".js-selectCurrency");

        const currency = selectCurrencyElement.value;
        const amount = amountElement.value;

        const result = calculateResult(amount, currency);

        updateResult(result);
    };

    const selectCurrency = () => {
        const selectCurrencyElement =
            document.querySelector(".js-selectCurrency");

        selectCurrencyElement.addEventListener("change", onSelectCurrency);

        onSelectCurrency();
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);

        selectCurrency();
    };

    init();
}
