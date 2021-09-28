class Department {
    private _manager;

    get manager() {
        return this._manager;
    }
}

class Person {
    private _department: Department;

    get manager() {
        return this._department.manager;
    }
}

// Client
const manager = new Person().manager;
