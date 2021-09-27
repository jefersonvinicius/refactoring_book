// Global variable
let defaultOwnerData = { firstName: "Martin", lastName: "Fowler" };

function defaultOwner() {
    return Object.assign({}, defaultOwnerData); // return copy, prevent side effects
}

function setDefaultOwner(arg: any) {
    defaultOwnerData = arg;
}

// Client reading
const spaceshipOwner = defaultOwner();
spaceshipOwner.firstName = "Jeferson"; // This won't be reflected in global variable

console.log(defaultOwner());
console.log(spaceshipOwner);

// Client updating
setDefaultOwner({ firstName: "Rebeca", lastName: "Parsons" });
