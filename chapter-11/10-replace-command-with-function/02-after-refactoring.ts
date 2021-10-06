function charge(customer, usage, provider) {
    const baseCharge = customer.baseRate * usage;
    return baseCharge + provider.connectionCharge;
}

// Client
const customer = {};
const usage = 100;
const provider = {};
const monthCharge = charge(customer, usage, provider);
