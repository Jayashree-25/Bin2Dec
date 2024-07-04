function convertToDecimal() {
    const inputBinary = document.getElementById('inputBinary').value; // Corrected line
    const resultElement = document.getElementById('result');

    // Check if input is a valid binary number or not
    if (/^[01]+$/.test(inputBinary)) { // Regular expression to check for binary digits only
        const decimalValue = parseInt(inputBinary, 2); // Convert binary to decimal
        resultElement.textContent = `Decimal Value: ${decimalValue}`; // Updated syntax for template literals
    } else {
        resultElement.textContent = 'Please enter a valid binary number.';
    }
}