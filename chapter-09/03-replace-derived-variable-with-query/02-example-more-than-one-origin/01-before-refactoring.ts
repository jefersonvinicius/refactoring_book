type Adjustment = {
    amount: number;
};

class ProductionPlan {
    private _production: number;

    private _adjustments: Adjustment[] = [];

    constructor(production) {
        this._production = production;
        this._adjustments = [];
    }

    get production() {
        return this._production;
    }

    applyAdjustment(adjustment) {
        this._adjustments.push(adjustment);
        this._production += adjustment.amount;
    }
}
