class Customer {
    private _discountRate;

    get discountRate() {
        return this._discountRate;
    }

    set discountRate(arg) {
        this._discountRate = arg;
    }

    applyDiscount(aNumber) {
        return this.discountRate ? aNumber - this.discountRate * aNumber : aNumber;
    }
}
