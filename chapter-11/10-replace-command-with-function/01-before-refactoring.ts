class ChargeCalculator {
    private _customer;
    private _usage;
    private _provider;

    constructor(customer, usage, provider) {
        this._customer = customer;
        this._usage = usage;
        this._provider = provider;
    }

    get baseCharge() {
        return this._customer.baseRate * this._usage;
    }

    get charge() {
        return this.baseCharge + this._provider.connectionCharge;
    }
}

// Client
const customer = {};
const usage = 100;
const provider = {};
const monthCharge = new ChargeCalculator(customer, usage, provider).charge;
