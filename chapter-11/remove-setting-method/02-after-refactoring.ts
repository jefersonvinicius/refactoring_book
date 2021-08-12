class Person {
    private _name: string;

    constructor(private _id: string) {} // Now, it's very clear that _id field not change after create an objected

    get name() {
        return this._name;
    }

    set name(arg: string) {
        this._name = arg;
    }

    get id() {
        return this._id;
    }
}

const person = new Person("1234");
person.name = "jeferson";
