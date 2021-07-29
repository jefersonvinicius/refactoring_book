function plumages(birds) {
    return new Map(birds.map((b) => [b.name, plumage(b)]));
}

function speeds(birds) {
    return new Map(birds.map((b) => [b.name, airSpeedVelocity(b)]));
}

function plumage(bird) {
    return new Bird(bird).plumage;
}

function airSpeedVelocity(bird) {
    return new Bird(bird).airSpeedVelocity;
}

class Bird {
    private type: string;
    private numberOfCoconuts: number;
    private voltage: number;
    private isNailed: boolean;

    constructor(birdObject) {
        Object.assign(this, birdObject);
    }

    get plumage() {
        switch (this.type) {
            case "EuropeanSwallow":
                return "average";
            case "AfricanSwallow":
                return this.numberOfCoconuts > 2 ? "tired" : "average";
            case "NorwegianBlue":
                return this.voltage > 100 ? "scorched" : "beautiful";
            default:
                return "unknown";
        }
    }

    get airSpeedVelocity() {
        switch (this.type) {
            case "EuropeanSwallow":
                return 35;
            case "AfricanSwallow":
                return 40 - 2 * this.numberOfCoconuts;
            case "NorwegianBlue":
                return this.isNailed ? 0 : 10 + this.voltage / 10;
            default:
                return null;
        }
    }
}

function createBird(bird) {
    switch (bird.type) {
        case "EuropeanSwallow":
            return new EuropeanSwallow(bird);
        case "AfricanSwallow":
            return new AfricanSwallow(bird);
        case "NorwegianBlue":
            return new NorwegianBlue(bird);
        default:
            return new Bird(bird);
    }
}

class EuropeanSwallow extends Bird {}

class AfricanSwallow extends Bird {}

class NorwegianBlue extends Bird {}
