function createEmployee(name, typeCode) {
    return new Employee(name, typeCode);
}

function createEngineer(name) {
    return new Employee(name, "E");
}

class Employee {
    private _name;

    private _typeCode;

    constructor(name, typeCode) {
        this._name = name;
        this._typeCode = typeCode;
    }

    get name() {
        return this._name;
    }

    get type() {
        return Employee.legalTypeCodes[this._typeCode];
    }

    static get legalTypeCodes() {
        return { E: "Engineer", M: "Manager", S: "Salesman" };
    }
}

// Client 1
const databaseDocument = { name: "Jeferson", empType: "S" };
const candidate = createEmployee(databaseDocument.name, databaseDocument.empType);

// Client 2
const databaseDocument2 = { name: "Jeferson" };
const leadEngineer = createEngineer(databaseDocument2.name);
