class Person {
    private telephoneNumber: TelephoneNumber;

    constructor() {
        this.telephoneNumber = new TelephoneNumber(null, null);
    }

    get officeAreaCode() {
        return this.telephoneNumber.areaCode;
    }

    set officeAreaCode(arg) {
        this.telephoneNumber = new TelephoneNumber(arg, this.officeNumber);
    }

    get officeNumber() {
        return this.telephoneNumber.number;
    }

    set officeNumber(arg) {
        this.telephoneNumber = new TelephoneNumber(this.officeAreaCode, arg);
    }
}

class TelephoneNumber {
    private _areaCode: string;
    private _number: string;

    constructor(areaCode, number) {
        this._areaCode = areaCode;
        this._number = number;
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

    equals(other) {
        if (!(other instanceof TelephoneNumber)) return false;
        return this.areaCode === other.areaCode && this.number === other.number;
    }
}
