document.getElementById("convertButton").addEventListener("click", convertTemperature);

function convertTemperature() {
    const inputTemperature = parseFloat(document.getElementById("inputTemperature").value);
    const fromUnit = document.getElementById("fromUnit").value;
    let toUnit, result;

    if (fromUnit === "celsius") {
        toUnit = "fahrenheit";
        result = (inputTemperature * 9/5) + 32;
    } else {
        toUnit = "celsius";
        result = (inputTemperature - 32) * 5/9;
    }

    const resultText = document.getElementById("resultText");
    resultText.textContent = `${inputTemperature} ${fromUnit} is equal to ${result.toFixed(2)} ${toUnit}.`;
}
