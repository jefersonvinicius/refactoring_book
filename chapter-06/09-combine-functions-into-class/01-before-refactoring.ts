function acquireReading() {
    return { customer: "ivan", quantity: 10, month: 5, year: 2017 };
}

function baseRate(month: number, year: number) {
    // Some base rate calc
    return month + year;
}

function taxThreshold(year: number) {
    // Some tax threshold calc
    return year < 2020 ? 1 : 0.5;
}

// Client 1
const reading1 = acquireReading();
const baseCharge = baseRate(reading1.month, reading1.year) * reading1.quantity;

// Client 2
const reading2 = acquireReading();
const base = baseRate(reading2.month, reading2.year) * reading2.quantity;
const taxableCharge = Math.max(0, base - taxThreshold(reading2.year));

// Client 3
const reading3 = acquireReading();
const basicChargeAmount = calculateBaseCharge(reading3);
function calculateBaseCharge(reading) {
    baseRate(reading.month, reading.year) * reading.quantity;
}
