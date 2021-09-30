const people = [
    { age: 14, salary: 0 },
    { age: 18, salary: 1100 },
    { age: 20, salary: 3500 },
    { age: 50, salary: 5000 },
    { age: 30, salary: 1800 },
];

let youngest = people[0] ? people[0].age : Infinity;
let totalSalary = 0;
for (const p of people) {
    if (p.age < youngest) youngest = p.age;
    totalSalary += p.salary;
}

console.log(`youngestAge: ${youngest}, totalSalary: ${totalSalary}`);
console.log(youngest === 14);
console.log(totalSalary === 11400);
