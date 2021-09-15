class Order {
    private _number;
    private _customer: Customer;

    constructor(data) {
        this._number = data.number;
        this._customer = registerCustomer(data.customer); // Using reference
    }

    get customer() {
        return this._customer;
    }
}

class Customer {
    private _id;

    constructor(id) {
        this._id = id;
    }

    get id() {
        return this._id;
    }
}

// Repository module
let _repositoryData: { customers?: Map<string, Customer> };

function initialize() {
    _repositoryData = {};
    _repositoryData.customers = new Map();
}

function registerCustomer(id) {
    if (!_repositoryData.customers.has(id)) {
        _repositoryData.customers.set(id, new Customer(id));
    }
    return findCustomer(id);
}

function findCustomer(id) {
    return _repositoryData.customers.get(id);
}
