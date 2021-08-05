const people = [
    { age: 14, salary: 0 },
    { age: 18, salary: 1100 },
    { age: 20, salary: 3500 },
    { age: 50, salary: 5000 },
    { age: 30, salary: 1800 },
];

function youngestAge() {
    return Math.min(...people.map((p) => p.age));
}

function totalSalary() {
    return people.reduce((total, p) => total + p.salary, 0);
}

console.log(`youngestAge: ${youngestAge()}, totalSalary: ${totalSalary()}`);
console.log(youngestAge() === 14);
console.log(totalSalary() === 11400);
