// This object is used widely in system and I want change 'name' field to 'title'
// const organization = { name: "Acme Gooseberries", country: "GB" };

// 1. Encapsulate the plain object in a instance
class Organization {
    private _name: string;
    private _country: string;

    constructor(data: any) {
        this._name = data.name;
        this._country = data.country;
    }

    get name() {
        return this._name;
    }

    set name(newName: string) {
        this._name = newName;
    }
}
