type Adjustment = {
    amount: number;
};

class ProductionPlan {
    private _production: number;

    private _initialProduction: number;

    private _productionAccumulator: number;

    private _adjustments: Adjustment[] = [];

    constructor(production) {
        this._initialProduction = production;
        this._adjustments = [];
    }

    get production() {
        return this._initialProduction + this.calculatedProductionAccumulator;
    }

    get calculatedProductionAccumulator() {
        return this._adjustments.reduce((sum, a) => sum + a.amount, 0);
    }

    applyAdjustment(adjustment) {
        this._adjustments.push(adjustment);
    }
}
