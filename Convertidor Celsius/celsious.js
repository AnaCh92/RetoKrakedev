function convertirACelsiusAFahrenheit() {
    let celsiusInput = document.getElementById("valorTemperatura");
    let celsiusValue = parseFloat(celsiusInput.value);

    let fahrenheitValue = celsiusValue * (9/5) + 32;

    let fahrenheitDisplay = document.getElementById("gradosFarenheit");
    fahrenheitDisplay.innerHTML = `${fahrenheitValue} Farenheit`;
}