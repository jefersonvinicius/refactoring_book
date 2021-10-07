class Employee {
    private _name;
    private _type;

    constructor(name, type) {
        this.validateType(type);
        this._name = name;
        this._type = type;
    }

    validateType(arg) {
        if (!["engineer", "manager", "salesman"].includes(arg)) throw new Error(`Employee cannot be of type ${arg}`);
    }

    get type() {
        return this._type;
    }

    set type(arg) {
        this._type = arg;
    }

    get capitalizedType() {
        return this._type.charAt(0).toUpperCase() + this._type.substr(1).toLowerCase();
    }

    toString() {
        return `${this._name} (${this.type})`;
    }
}
