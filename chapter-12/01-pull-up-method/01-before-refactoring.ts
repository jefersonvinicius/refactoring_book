class Party {
    protected monthlyCost = 30;
}

class Employee extends Party {
    get annualCost() {
        return this.monthlyCost * 12;
    }
}

class Department extends Party {
    get totalAnnualCost() {
        return this.monthlyCost * 12;
    }
}
