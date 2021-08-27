class Account {
    private _number;
    private _type;
    private _interestRate;

    constructor(number, type, interestRate) {
        this._number = number;
        this._type = type;
        this._interestRate = interestRate;
    }

    get interestRate() {
        return this._interestRate;
    }
}

class AccountType {
    private _name;

    constructor(nameString) {
        this._name = nameString;
    }
}
