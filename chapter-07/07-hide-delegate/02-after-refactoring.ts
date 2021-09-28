class Department {
    private _chargeCode;
    private _manager;

    get chargeCode() {
        return this._chargeCode;
    }

    set chargeCode(arg) {
        this._chargeCode = arg;
    }

    get manager() {
        return this._manager;
    }

    set manager(arg) {
        this._manager = arg;
    }
}

class Person {
    private _name;
    private _department;

    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    get department() {
        return this._department;
    }

    set department(arg) {
        this._department = arg;
    }

    get manager() {
        return this._department.manager;
    }
}

// Client
const person = new Person("jeferson");
person.department = new Department();

const manager = person.manager;
