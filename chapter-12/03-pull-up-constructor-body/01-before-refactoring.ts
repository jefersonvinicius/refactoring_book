class Party {}

class Employee extends Party {
    id: string;
    name: string;
    monthlyCost: number;

    constructor(name, id, monthlyCost) {
        // name field is duplicated in Department too
        super();
        this.name = name;
        this.id = id;
        this.monthlyCost = monthlyCost;
    }
}

class Department extends Party {
    name: string;
    staff: number;

    constructor(name, staff) {
        super();
        this.name = name;
        this.staff = staff;
    }
}
