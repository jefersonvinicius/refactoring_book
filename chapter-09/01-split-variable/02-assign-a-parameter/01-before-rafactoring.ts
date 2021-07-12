function discount(inputValue, quantity) {
    // The inputValue parameter is used as result too
    if (inputValue > 50) inputValue = inputValue - 2;
    if (quantity > 100) inputValue = inputValue - 1;
    return inputValue;
}
