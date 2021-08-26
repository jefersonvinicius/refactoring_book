class Account {
    private _daysOverdrawn: number;
    private type: any;

    get daysOverdrawn() {
        return this._daysOverdrawn;
    }

    get bankCharge() {
        let result = 4.5;
        if (this._daysOverdrawn > 0) result += this.overdraftCharge;
        return result;
    }

    get overdraftCharge() {
        if (this.type.isPremium) {
            const baseCharge = 10;
            if (this.daysOverdrawn <= 7) return baseCharge;
            else return baseCharge + (this.daysOverdrawn - 7) * 0.85;
        }
        return this.daysOverdrawn * 1.75;
    }
}
