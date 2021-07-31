function plumages(birds) {
    return new Map(birds.map((b) => createBird(b)).map((bird) => [bird.name, bird.plumage]));
}

function speeds(birds) {
    return new Map(birds.map((b) => createBird(b)).map((bird) => [bird.name, bird.airSpeedVelocity]));
}

class Bird {
    protected type: string;
    protected numberOfCoconuts: number;
    protected voltage: number;
    protected isNailed: boolean;

    constructor(birdObject) {
        Object.assign(this, birdObject);
    }

    get plumage(): string {
        return "unknown";
    }

    get airSpeedVelocity() {
        return null;
    }
}

function createBird(bird) {
    // Which case have changed to own class, and then, each subclass implements its logic
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

class EuropeanSwallow extends Bird {
    get plumage() {
        return "average";
    }

    get airSpeedVelocity() {
        return 35;
    }
}

class AfricanSwallow extends Bird {
    get plumage() {
        return this.numberOfCoconuts > 2 ? "tired" : "average";
    }

    get airSpeedVelocity() {
        return 40 - 2 * this.numberOfCoconuts;
    }
}

class NorwegianBlue extends Bird {
    get plumage() {
        return this.voltage > 100 ? "scorched" : "beautiful";
    }

    get airSpeedVelocity() {
        return this.isNailed ? 0 : 10 + this.voltage / 10;
    }
}
