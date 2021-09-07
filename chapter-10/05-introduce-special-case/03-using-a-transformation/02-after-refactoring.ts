function deepClone(arg) {
    return JSON.parse(JSON.stringify(arg));
}

type SiteData = {
    name: string;
    location: string;
    customer: any | "unknown";
};

// Creating special case to simple object instead of class
const data: SiteData = {
    name: "Acme Boston",
    location: "Malden MA",
    customer: {
        name: "Acme Industries",
        billingPlan: "plan-451",
        paymentHistory: {
            weeksDelinquentInLastYear: 7,
        },
    },
};

function acquireSiteData() {
    // Some logic to get data
    return data;
}

function enrichSite(inputSite) {
    const result = deepClone(inputSite);
    const unknownCustomer = {
        isUnknown: true,
        name: "occupant",
        billingPlan: registry.billingPlan.basic,
        paymentHistory: {
            weeksDelinquentInLastYear: 0,
        },
    };

    if (isUnknown(result.customer)) result.customer = unknownCustomer;
    else result.customer.isUnknown = false;

    return result;
}

function isUnknown(customer) {
    if (customer === "unknown") return true;
    return customer.isUnknown;
}

// Client 1
const aCustomer = acquireSiteData().customer;
const customerName = aCustomer.name;

// Client 2
const registry = {
    billingPlan: {
        basic: 15,
        middle: 20,
    },
};
const aCustomer2 = acquireSiteData().customer;
const plan = aCustomer2.billingPlan;

// Client 3
const aCustomer3 = acquireSiteData().customer;
const weeksDelinquent = aCustomer3.paymentHistory.weeksDelinquentInLastYear;
