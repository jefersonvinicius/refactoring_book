class TelephoneNumber {
    private _areaCode: string;
    private _number: string;

    toString() {
        return `(${this.areaCode}) ${this.number}`;
    }

    get areaCode() {
        return this._areaCode;
    }
    set areaCode(arg) {
        this._areaCode = arg;
    }
    get number() {
        return this._number;
    }
    set number(arg) {
        this._number = arg;
    }
}

class Person {
    private _name: string;

    private _telephoneNumber: TelephoneNumber;

    constructor() {
        this._telephoneNumber = new TelephoneNumber();
    }

    get name() {
        return this._name;
    }
    set name(arg) {
        this._name = arg;
    }
    get telephoneNumber() {
        return this._telephoneNumber.toString();
    }
    get officeAreaCode() {
        return this._telephoneNumber.areaCode;
    }
    set officeAreaCode(arg) {
        this._telephoneNumber.areaCode = arg;
    }
    get officeNumber() {
        return this._telephoneNumber.number;
    }
    set officeNumber(arg) {
        this._telephoneNumber.number = arg;
    }
}
