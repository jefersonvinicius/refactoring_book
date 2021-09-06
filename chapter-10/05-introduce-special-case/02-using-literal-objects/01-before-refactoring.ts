// In this example, the clients only read data structures

class Site {
    private _customer;

    get customer() {
        return this._customer;
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
}

// Client 1
const site = new Site();
const aCustomer = site.customer;
let customerName;
if (aCustomer === "unknown") customerName = "occupant";
else customerName = aCustomer.name;

// Client 2
const registry = {
    billingPlan: {
        basic: 15,
        middle: 20,
    },
};
const plan = aCustomer === "unknown" ? registry.billingPlan.basic : aCustomer.billingPlan;

// Client 3
const aCustomer3 = new Site().customer;
const weeksDelinquent = aCustomer3 === "unknown" ? 0 : aCustomer3.paymentHistory.weeksDelinquentInLastYear;
