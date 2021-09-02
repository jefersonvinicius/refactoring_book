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

    get isUnknown() {
        return false;
    }
}

class UnknownCustomer {
    get isUnknown() {
        return true;
    }
}

function isUnknown(arg) {
    if (!(arg instanceof Customer || arg === "unknown")) {
        throw new Error(`Investigate bad value: <${arg}>`);
    }
    return arg === "unknown";
}

// Client 1
const site = new Site();
const aCustomer = site.customer;
let customerName;
if (isUnknown(aCustomer)) customerName = "occupant";
else customerName = aCustomer.name;

// Client 2
const aCustomer2 = new Site().customer;
const registry = {
    billingPlan: {
        basic: 15,
        middle: 20,
    },
};
const plan = isUnknown(aCustomer2) ? registry.billingPlan.basic : aCustomer.billingPlan;

// Client 3
const aCustomer3 = new Site().customer;
const newPlan = 50;
if (aCustomer3 !== "unknown") aCustomer3.billingPlan = newPlan;

// Client 4
const aCustomer4 = new Site().customer;
const weeksDelinquent = aCustomer4 === "unknown" ? 0 : aCustomer4.paymentHistory;
