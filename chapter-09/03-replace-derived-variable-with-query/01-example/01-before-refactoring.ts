type Adjustment = {
    amount: number;
};

class ProductionPlan {
    private _production: number;

    private _adjustments: Adjustment[] = [];

    get production() {
        return this._production;
    }
    applyAdjustment(adjustment: Adjustment) {
        this._adjustments.push(adjustment);
        this._production += adjustment.amount;
    }
}
