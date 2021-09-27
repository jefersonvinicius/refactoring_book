class Organization {
    private _name: string;

    private _country: string;

    constructor(data: any) {
        this._name = data.name;
        this._country = data.country;
    }

    set name(newName: string) {
        this._name = newName;
    }

    get name() {
        return this._name;
    }

    set country(newCountry: string) {
        this._country = newCountry;
    }

    get country() {
        return this._country;
    }
}

const organization = new Organization({
    name: "Acme Gooseberriess",
    country: "GB",
}); // The plain object has transformed to a class instance

function getOrganization() {
    return organization;
}

// In other place of system...
const result = `<h1>${getOrganization().name}</h1>`;

// In other place of system...
getOrganization().name = "New Cool Name";
