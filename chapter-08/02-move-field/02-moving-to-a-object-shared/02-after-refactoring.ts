function assert(statement) {
    if (!statement) throw new Error("Assert failed");
}

class Account {
    private _number;
    private _type: AccountType;
    private _interestRate;

    constructor(number, type, interestRate) {
        this._number = number;
        this._type = type;
        assert(interestRate === this._type.interestRate); // Introduce Assertion
        this._interestRate = interestRate;
    }

    get interestRate() {
        return this._type.interestRate;
    }
}

class AccountType {
    private _name;
    private _interestRate;

    constructor(nameString, interestRate) {
        this._name = nameString;
        this._interestRate = interestRate;
    }

    get interestRate() {
        return this._interestRate;
    }
}
