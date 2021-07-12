// This object is used widely in system and I want change 'name' field to 'title'
// const organization = { name: "Acme Gooseberries", country: "GB" };

// 1. Encapsulate the plain object in a instance
// 2. Rename the internal field to use new field
// 3. Add support for new field in constructor. Keeping compatibility with previous field
class Organization {
    private _title: string;
    private _country: string;

    constructor(data: any) {
        this._title = data.title !== undefined ? data.title : data.name;
        this._country = data.country;
    }

    get title() {
        return this._title;
    }

    set title(newName: string) {
        this._title = newName;
    }

    get country() {
        return this._country;
    }

    set country(countryCode: string) {
        this._country = countryCode;
    }
}

const organization = new Organization({
    title: "Acme Gooseberries",
    country: "GB",
});

console.log("Name:", organization.title);

organization.title = "Google Inc.";

console.log("Name:", organization.title);
