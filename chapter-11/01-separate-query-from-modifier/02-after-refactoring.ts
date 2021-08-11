const _people = ["Don"];

function findMiscreant(people) {
    for (const p of people) {
        if (p === "Don") {
            return "Don";
        }
        if (p === "John") {
            return "John";
        }
    }
    return "";
}

function alertForMiscreant(people) {
    if (findMiscreant(people) !== "") setOffAlarms();
}

function setOffAlarms() {
    // Some logic
}

const found = findMiscreant(_people);
alertForMiscreant(_people);
