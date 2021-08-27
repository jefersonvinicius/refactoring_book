class Customer {
    private _name;
    private _discountRate;
    private _contract: CustomerContract;

    constructor(name, discountRate) {
        this._name = name;
        this._contract = new CustomerContract(new Date(), discountRate);
        this._setDiscountRate(discountRate);
    }

    get discountRate() {
        return this._contract.discountRate;
    }

    _setDiscountRate(aNumber) {
        this._contract.discountRate = aNumber;
    }

    becomePreferred() {
        this._setDiscountRate(this._discountRate + 0.03);
        // Some logic
    }

    applyDiscount(amount) {
        return amount.subtract(amount.multiply(this.discountRate));
    }
}

class CustomerContract {
    private _startDate;
    private _discountRate;

    constructor(startDate, discountRate) {
        this._startDate = startDate;
        this._discountRate = discountRate;
    }

    get discountRate() {
        return this._discountRate;
    }

    set discountRate(arg) {
        this._discountRate = arg;
    }
}
