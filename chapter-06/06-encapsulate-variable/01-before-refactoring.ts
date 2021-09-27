// Global variable
let defaultOwner = { firstName: "Martin", lastName: "Fowler" };

// Client reading
const spaceshipOwner = defaultOwner;
spaceshipOwner.firstName = "Jeferson"; // This will be reflected in global variable

console.log(defaultOwner);
console.log(spaceshipOwner);

// Client updating
defaultOwner = { firstName: "Rebeca", lastName: "Parsons" };
