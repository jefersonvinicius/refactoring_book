class Order {
    private _number;
    private _customer: Customer;

    constructor(data) {
        this._number = data.number;
        // This property references a value, so, if have more than one
        // order with same customer id, it'll be necessary sync all theses instances
        this._customer = new Customer(data.customer);
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
