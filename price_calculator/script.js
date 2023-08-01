window.onload = () => {
    calculatePrice();

    document.querySelector(`form.options-form`).addEventListener("change", () => {
        calculatePrice();
    });
};

function calculatePrice() {
    const prices = { "quotes": 50, "teachers": 50 };

    let activeOptions = document.querySelectorAll(`[class$="-radios__container"] input[type=radio]:checked`);
    let price = 0;

    activeOptions.forEach(element => {
        if (element.value == "true") {
            price += prices[element.name];
        }
    });

    document.querySelector(".price-field__span").textContent = price;
}