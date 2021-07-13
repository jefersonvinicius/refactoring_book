class Party {
    name: string;

    constructor(name) {
        this.name = name;
    }
}

class Employee extends Party {
    id: string;
    monthlyCost: number;

    constructor(name, id, monthlyCost) {
        // name field is duplicated in Department too
        super(name);
        this.id = id;
        this.monthlyCost = monthlyCost;
    }
}

class Department extends Party {
    staff: number;

    constructor(name, staff) {
        super(name);
        this.staff = staff;
    }
}
