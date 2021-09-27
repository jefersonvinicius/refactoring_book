function acquireReading() {
    return { customer: "ivan", quantity: 10, month: 5, year: 2017 };
}

function baseRate(month, year) {
    return month * year;
}

function taxThreshold(year) {
    return year < 2018 ? 1 : 0.5;
}

// Client 1
const reading1 = acquireReading();
const base1 = baseRate(reading1.month, reading1.year) * reading1.quantity;

// Client 2
const reading2 = acquireReading();
const base2 = baseRate(reading2.month, reading2.year) * reading2.quantity;
const taxableCharge = Math.max(0, base2 * taxThreshold(reading2.year));

// Client 3
const reading3 = acquireReading();
const basicChargeAmount = calculateBaseCharge(reading3);

function calculateBaseCharge(reading) {
    return baseRate(reading.month, reading.year) * reading.quantity;
}
