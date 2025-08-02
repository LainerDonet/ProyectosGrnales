const poundsInput = document.getElementById('pounds');
const convertButton = document.getElementById('convertButton');
const resultSpan = document.querySelector('main span');
const conversionRate = 0.453592; // 1 pound = 0.453592 kilograms
convertButton.addEventListener('click', () => {
    const pounds = parseFloat(poundsInput.value);
    if (isNaN(pounds)) {
        resultSpan.textContent = 'Please enter a valid number.';
    } else {
        const kilograms = pounds * conversionRate;
        resultSpan.textContent = `${pounds} pounds is equal to ${kilograms.toFixed(2)} kilograms.`;
    }
});