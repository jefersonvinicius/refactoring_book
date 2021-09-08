class Department {
    private _manager;

    get manager() {
        return this._manager;
    }
}

class Person {
    private _department: Department;

    get department() {
        return this._department;
    }
}

// Client
const manager = new Person().department.manager;
