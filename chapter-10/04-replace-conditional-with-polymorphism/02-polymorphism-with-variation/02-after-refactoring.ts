import assert from "assert";

function rating(voyage: Voyage, history: History) {
    return createRating(voyage, history).value;
}

class Rating {
    constructor(protected voyage: Voyage, protected history: History) {}

    get value() {
        const vpf = this.voyageProfitFactor;
        const vr = this.voyageRisk;
        const chr = this.captainHistoryRisk;
        if (vpf * 3 > vr + chr * 2) return "A";
        return "B";
    }

    get voyageRisk() {
        let result = 1;
        if (this.voyage.length > 4) result += 2;
        if (this.voyage.length > 8) result += this.voyage.length - 8;
        if (["china", "east-indies"].includes(this.voyage.zone)) result += 4;
        return Math.max(result, 0);
    }

    get captainHistoryRisk() {
        let result = 1;
        if (this.history.length < 5) result += 4;
        result += this.history.filter((v) => v.profit < 0).length;
        return Math.max(result, 0);
    }

    get hasChinaHistory() {
        return this.history.some((v) => "china" === v.zone);
    }

    get voyageProfitFactor() {
        let result = 2;
        if (this.voyage.zone === "china") result += 1;
        if (this.voyage.zone === "east-indies") result += 1;
        result += this.historyLengthFactor;
        result += this.voyageLengthFactor;
        return result;
    }

    get voyageLengthFactor(): number {
        return this.voyage.length > 14 ? -1 : 0;
    }

    get historyLengthFactor() {
        return this.history.length > 8 ? 1 : 0;
    }
}

class ExperiencedChinaRating extends Rating {
    get captainHistoryRisk() {
        const result = super.captainHistoryRisk - 2;
        return Math.max(result, 0);
    }

    get voyageProfitFactor() {
        return super.voyageProfitFactor + 3;
    }

    get voyageLengthFactor() {
        let result = 0;
        if (this.voyage.length > 12) result += 1;
        if (this.voyage.length > 18) result -= 1;
        return result;
    }

    get historyLengthFactor() {
        return this.history.length > 10 ? 1 : 0;
    }
}

function createRating(voyage: Voyage, history: History) {
    if (voyage.zone === "china" && history.some((v) => "china" === v.zone)) {
        return new ExperiencedChinaRating(voyage, history);
    }
    return new Rating(voyage, history);
}

type Voyage = {
    zone: string;
    length: number;
};

type HistoryItem = {
    zone: string;
    profit: number;
};

type History = HistoryItem[];

const _voyage: Voyage = { zone: "west-indies", length: 10 };
const _history: HistoryItem[] = [
    { zone: "east-indies", profit: 5 },
    { zone: "west-indies", profit: 15 },
    { zone: "china", profit: -2 },
    { zone: "west-africa", profit: 7 },
];

const myRating = rating(_voyage, _history);
assert.equal(myRating, "B", "Rating should be B");
