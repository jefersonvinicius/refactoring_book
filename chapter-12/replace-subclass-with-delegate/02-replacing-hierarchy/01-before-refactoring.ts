function createBird(data) {
    switch (data.type) {
        case "EuropeanSwallow":
            return new EuropeanSwallow(data);
        case "AfricanSwallow":
            return new AfricanSwallow(data);
        case "NorweigianBlueParrot":
            return new NorweigianBlueParrot(data);
        default:
            return new Bird(data);
    }
}

class Bird {
    private _name;
    private _plumage;

    constructor(data) {
        this._name = data.name;
        this._plumage = data.plumage;
    }

    get name() {
        return this._name;
    }

    get plumage() {
        return this._plumage || "average";
    }

    get airSpeedVelocity() {
        return null;
    }
}

class EuropeanSwallow extends Bird {
    get airSpeedVelocity() {
        return 35;
    }
}

class AfricanSwallow extends Bird {
    private _numberOfCoconuts;

    constructor(data) {
        super(data);
        this._numberOfCoconuts = data.numberOfCoconuts;
    }

    get airSpeedVelocity() {
        return 40 - 2 * this._numberOfCoconuts;
    }
}

class NorweigianBlueParrot extends Bird {
    private _voltage;
    private _isNailed;

    constructor(data) {
        super(data);
        this._voltage = data.voltage;
        this._isNailed = data.isNailed;
    }

    get plumage() {
        if (this._voltage > 100) return "scorched";
        else return this.plumage || "beautiful";
    }

    get airSpeedVelocity() {
        return this._isNailed ? 0 : 10 + this._voltage / 10;
    }
}
