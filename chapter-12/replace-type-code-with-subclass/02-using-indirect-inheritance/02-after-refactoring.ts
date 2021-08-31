class EmployeeType {
    toString() {
        return "";
    }

    get capitalizedName() {
        return this.toString().charAt(0).toUpperCase() + this.toString().substr(1).toLowerCase();
    }
}

class Engineer extends EmployeeType {
    toString() {
        return "engineer";
    }
}

class Manager extends EmployeeType {
    toString() {
        return "manager";
    }
}

class Salesman extends EmployeeType {
    toString() {
        return "salesman";
    }
}

class Employee {
    private _name;
    private _type: EmployeeType;

    constructor(name, type) {
        this.validateType(type);
        this._name = name;
        this._type = type;
    }

    validateType(arg) {
        if (!["engineer", "manager", "salesman"].includes(arg)) throw new Error(`Employee cannot be of type ${arg}`);
    }

    get typeString() {
        return this._type.toString();
    }

    get type() {
        return this._type;
    }

    set type(arg) {
        this._type = Employee.createEmployeeType(arg);
    }

    static createEmployeeType(aString) {
        switch (aString) {
            case "engineer":
                return new Engineer();
            case "salesman":
                return new Salesman();
            case "manager":
                return new Manager();
            default:
                throw new Error(`Employee cannot be of type ${aString}`);
        }
    }

    toString() {
        return `${this._name} (${this.type.capitalizedName})`;
    }
}
