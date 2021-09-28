class Person {
    private _name;
    private _courses: Course[];

    constructor(name) {
        this._name = name;
        this._courses = [];
    }

    get name() {
        return this._name;
    }

    get courses() {
        return this._courses;
    }

    set courses(list) {
        this._courses = list;
    }
}

class Course {
    private _name;
    private _isAdvanced;

    constructor(name, isAdvanced) {
        this._name = name;
        this._isAdvanced = isAdvanced;
    }

    get name() {
        return this._name;
    }

    get isAdvanced() {
        return this._isAdvanced;
    }
}

// Usage 1
const person = new Person("Jeferson");
const numAdvancedCourses = person.courses.filter((c) => c.isAdvanced).length;

// Usage 2
const basicCoursesName = readBasicCourseNames();
const person2 = new Person("Jeferson 2");
person2.courses = basicCoursesName.map((name) => new Course(name, false)); // WARNING: The courses collection isn't encapsulated

// Usage 3
const person3 = new Person("Jeferson 3");
for (const name of readBasicCourseNames()) {
    person3.courses.push(new Course(name, false)); // WARNING: The courses collection isn't encapsulated
}

function readBasicCourseNames() {
    return ["dummy", "any"];
}
