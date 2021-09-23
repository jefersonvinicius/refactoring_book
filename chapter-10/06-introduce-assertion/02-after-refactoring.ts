class Customer {
    private _discountRate;

    get discountRate() {
        return this._discountRate;
    }

    set discountRate(arg) {
        assert(arg === null || arg >= 0);
        this._discountRate = arg;
    }

    applyDiscount(aNumber) {
        if (!this.discountRate) return aNumber;

        assert(this.discountRate >= 0); // This line communicate the state of software should be true
        return aNumber - this.discountRate * aNumber;
    }
}

function assert(statement) {
    if (Boolean(statement) === false) throw new Error("Assert failed");
}
