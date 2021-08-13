class Person {
    private telephoneNumber: TelephoneNumber;

    constructor() {
        this.telephoneNumber = new TelephoneNumber();
    }

    get officeAreaCode() {
        return this.telephoneNumber.areaCode;
    }

    set officeAreaCode(arg) {
        this.telephoneNumber.areaCode = arg;
    }

    get officeNumber() {
        return this.telephoneNumber.number;
    }

    set officeNumber(arg) {
        this.telephoneNumber.number = arg;
    }
}

class TelephoneNumber {
    private _areaCode: string;
    private _number: string;

    constructor() {}

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
