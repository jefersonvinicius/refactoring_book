class Employee {
    private _id;
    private _name;
    private _monthlyCost;

    constructor(name, id, monthlyCost) {
        this._id = id;
        this._name = name;
        this._monthlyCost = monthlyCost;
    }

    get monthlyCost() {
        return this._monthlyCost;
    }

    get name() {
        return this._name;
    }

    get id() {
        return this._id;
    }

    get annualCost() {
        return this.monthlyCost * 12;
    }
}

class Department {
    private _name;
    private _staff;

    constructor(name, staff) {
        this._name = name;
        this._staff = staff;
    }

    get staff() {
        return this._staff;
    }

    get name() {
        return this._name;
    }

    get totalMonthlyCost() {
        return this.staff.map((e) => e.monthlyCost).reduce((sum, cost) => sum + cost);
    }

    get headCount() {
        return this.staff.length;
    }

    get totalAnnualCost() {
        return this.totalMonthlyCost * 12;
    }
}
