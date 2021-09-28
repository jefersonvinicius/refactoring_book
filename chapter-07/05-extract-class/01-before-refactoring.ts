class Person {
    private _name: string;
    private _officeAreCode: string;
    private _officeNumber: string;

    get name() {
        return this._name;
    }
    set name(arg) {
        this._name = arg;
    }
    get telephoneNumber() {
        return `(${this.officeAreaCode}) ${this.officeNumber}`;
    }
    get officeAreaCode() {
        return this._officeAreCode;
    }
    set officeAreaCode(arg) {
        this._officeAreCode = arg;
    }
    get officeNumber() {
        return this._officeNumber;
    }

    set officeNumber(arg) {
        this._officeNumber = arg;
    }
}
