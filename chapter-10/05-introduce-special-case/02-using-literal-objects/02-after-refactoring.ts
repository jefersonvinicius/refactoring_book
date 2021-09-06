// In this example, the clients only read data structures

const registry = {
    billingPlans: {
        basic: 15,
        middle: 20,
    },
};

function isUnknown(arg) {
    return arg.isUnknown;
}

function createUnknownCustomer() {
    return {
        isUnknown: true,
        name: "occupant",
        billingPlan: registry.billingPlans.basic,
        paymentHistory: {
            weeksDelinquentInLastYear: 0,
        },
    };
}

class Site {
    private _customer;

    get customer() {
        return this._customer === "unknown" ? createUnknownCustomer() : this._customer;
    }
}

class Customer {
    private _name;
    private _billingPlan;

    get name() {
        return this._name;
    }

    get billingPlan() {
        return this._billingPlan;
    }

    set billingPlan(arg) {
        this._billingPlan = arg;
    }

    get paymentHistory() {
        return [];
    }

    get isUnknown() {
        return false;
    }
}

// Client 1
const aCustomer = new Site().customer;
const customerName = aCustomer.name;

// Client 2

const plan = aCustomer.billingPlan;

// Client 3
const aCustomer3 = new Site().customer;
const weeksDelinquent = aCustomer3.paymentHistory.weeksDelinquentInLastYear;
