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
        return this._courses.slice(); // Return copy to ensure not modify _courses direct
    }

    set courses(list) {
        this._courses = list.slice();
    }

    addCourse(course: Course) {
        this._courses.push(course);
    }

    removeCourse(
        course: Course,
        fnIfAbsent = () => {
            throw new Error("Absent");
        }
    ) {
        const index = this._courses.indexOf(course);
        if (index === -1) fnIfAbsent();
        else this._courses.splice(index, 1);
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
basicCoursesName.forEach((name) => person2.addCourse(new Course(name, false)));

// Usage 3
const person3 = new Person("Jeferson 3");
for (const name of readBasicCourseNames()) {
    person3.addCourse(new Course(name, false));
}

function readBasicCourseNames() {
    return ["dummy", "any"];
}
