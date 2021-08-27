class Customer {
    private _name;
    private _discountRate;
    private _contract;

    constructor(name, discountRate) {
        this._name = name;
        this._discountRate = discountRate;
        this._contract = new CustomerContract(new Date());
    }

    get discountRate() {
        return this._discountRate;
    }

    becomePreferred() {
        this._discountRate += 0.03;
        // Some logic
    }

    applyDiscount(amount) {
        return amount.subtract(amount.multiply(this._discountRate));
    }
}

class CustomerContract {
    private _startDate;

    constructor(startDate) {
        this._startDate = startDate;
    }
}
