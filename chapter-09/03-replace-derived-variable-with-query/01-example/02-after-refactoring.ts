type Adjustment = {
    amount: number;
};

class ProductionPlan {
    private _production: number;

    private _adjustments: Adjustment[] = [];

    get production() {
        // Now, exists one source for this data
        return this._adjustments.reduce((sum, a) => sum + a.amount, 0);
    }

    applyAdjustment(adjustment: Adjustment) {
        this._adjustments.push(adjustment);
    }
}
