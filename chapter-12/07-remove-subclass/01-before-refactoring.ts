class Person {
    private _name;

    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    get genderCode() {
        return "X";
    }
}

class Male extends Person {
    get genderCode() {
        return "M";
    }
}

class Female extends Person {
    get genderCode() {
        return "F";
    }
}

// Client
const people: Person[] = [];
const numberOfMales = people.filter((p) => p instanceof Male).length;

function loadFromInput(data) {
    const result = [];
    data.forEach((record) => {
        let p;
        switch (record.gender) {
            case "M":
                p = new Male(record.name);
            case "F":
                p = new Female(record.name);
            default:
                p = new Person(record.name);
        }
        result.push(p);
    });
    return result;
}
