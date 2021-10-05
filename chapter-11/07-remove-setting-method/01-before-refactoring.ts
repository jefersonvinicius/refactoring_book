class Person {
    private _name: string;
    private _id: string;

    get name() {
        return this._name;
    }
    set name(arg: string) {
        this._name = arg;
    }
    get id() {
        return this._id;
    }
    set id(arg: string) {
        this._id = arg;
    }
}

const person = new Person();
person.id = "1234";
person.name = "jeferson";
