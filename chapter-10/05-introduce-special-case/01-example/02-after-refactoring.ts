class Site {
    private _customer;

    get customer() {
        return this._customer === "unknown" ? new UnknownCustomer() : this._customer;
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
        return { weeksDeliquentInLastYear: 1 };
    }

    get isUnknown() {
        return false;
    }
}

class NullPaymentHistory {
    get weeksDeliquentInLastYear() {
        return 0;
    }
}

class UnknownCustomer {
    get isUnknown() {
        return true;
    }

    get name() {
        return "occupant";
    }

    get billingPlan() {
        return registry.billingPlan.basic;
    }

    set billingPlan(arg) {
        // When the customer is unknown, shouldn`t possible set a billing plan. So, the set do anything
    }

    get paymentHistory() {
        return new NullPaymentHistory();
    }
}

// Client 1
const site = new Site();
const aCustomer = site.customer;
const customerName = aCustomer.name;

// Client 2
const aCustomer2 = new Site().customer;
const registry = {
    billingPlan: {
        basic: 15,
        middle: 20,
    },
};
const plan = aCustomer2.billingPlan;

// Client 3
const aCustomer3 = new Site().customer;
const newPlan = 50;
aCustomer3.billingPlan = newPlan;

// Client 4
const aCustomer4 = new Site().customer;
const weeksDelinquent = aCustomer4.paymentHistory.weeksDeliquentInLastYear;

// Extra client with different behavior
// In this case, the client want use different string ("unknown occupant" instead of "occupant")
// So, you have to use a conditional again rather than "name" property used by Client 1
const aCustomer5 = new Site().customer;
const _name = aCustomer5.isUnknown ? "unknown occupant" : aCustomer5.name;
