class Account {
    private _daysOverdrawn: number;
    private type: AccountType;

    get daysOverdrawn() {
        return this._daysOverdrawn;
    }

    get bankCharge() {
        let result = 4.5;
        if (this._daysOverdrawn > 0) result += this.overdraftCharge;
        return result;
    }

    get overdraftCharge() {
        return this.type.overdraftCharge(this.daysOverdrawn);
    }
}

class AccountType {
    private isPremium: boolean;

    overdraftCharge(daysOverdrawn) {
        if (this.isPremium) {
            const baseCharge = 10;
            if (daysOverdrawn <= 7) return baseCharge;
            else return baseCharge + (daysOverdrawn - 7) * 0.85;
        }
        return daysOverdrawn * 1.75;
    }
}
