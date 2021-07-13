class Party {
    protected monthlyCost = 30;

    get annualCost() {
        return this.monthlyCost * 12;
    }
}

class Employee extends Party {}

class Department extends Party {}
