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

function acquireSiteData(): SiteData {
    // Some logic to get data
    return data;
}

// Client 1
const aCustomer = acquireSiteData().customer;
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
const aCustomer2 = acquireSiteData().customer;
const plan = aCustomer2 === "unknown" ? registry.billingPlan.basic : aCustomer2.billingPlan;

// Client 3
const aCustomer3 = acquireSiteData().customer;
const weeksDelinquent = aCustomer3 === "unknown" ? 0 : aCustomer3.paymentHistory.weeksDelinquentInLastYear;
