class Person {
    private _name;
    private _genderCode;

    constructor(name, genderCode) {
        this._name = name;
        this._genderCode = genderCode;
    }

    get isMale() {
        return this._genderCode === "M";
    }

    get name() {
        return this._name;
    }

    get genderCode() {
        return this._genderCode;
    }
}

// Client

const people: Person[] = [];
const numberOfMales = people.filter((p) => p.isMale).length;

function createPerson(record) {
    switch (record.gender) {
        case "M":
            return new Person(record.name, "M");
        case "F":
            return new Person(record.name, "F");
        default:
            return new Person(record.name, "X");
    }
}

function loadFromInput(data) {
    return data.map((record) => createPerson(record));
}
