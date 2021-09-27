class Reading {
    public customer: string;
    public quantity: number;
    public month: number;
    public year: number;

    constructor(data) {
        this.customer = data.customer;
        this.quantity = data.quantity;
        this.month = data.month;
        this.year = data.year;
    }

    get baseCharge() {
        return this.baseRate(this.month, this.year) * this.quantity;
    }

    get taxableCharge() {
        return Math.max(0, reading2.baseCharge - this.taxThreshold(reading2.year));
    }

    private baseRate(month: number, year: number) {
        // Some base rate calc
        return month + year;
    }

    private taxThreshold(year: number) {
        // Some tax threshold calc
        return year < 2020 ? 1 : 0.5;
    }
}

function acquireReading() {
    return { customer: "ivan", quantity: 10, month: 5, year: 2017 };
}

// Client 1
const rawReading1 = acquireReading();
const reading1 = new Reading(rawReading1);
const baseCharge = reading1.baseCharge;

// Client 2
const rawReading2 = acquireReading();
const reading2 = new Reading(rawReading2);
const taxableCharge = reading2.taxableCharge;

// Client 3
const rawReading3 = acquireReading();
const reading3 = new Reading(rawReading3);
const basicChargeAmount = reading3.baseCharge;
