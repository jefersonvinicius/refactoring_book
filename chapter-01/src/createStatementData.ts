import plays from '../plays.json';
import { Invoice, Play, Performance } from './types';

export type Plays = { [key: string]: Play };

export type StatementData = {
    customer: string;
    performances: PerformanceEnriched[];
    totalAmount: number;
    totalVolumeCredits: number;
};

export type PerformanceEnriched = Performance & {
    play: Play;
    amount: number;
    volumeCredits: number;
};

class PerformanceCalculator {
    performance: Performance;
    play: Play;

    constructor(performance: Performance, play: Play) {
        this.performance = performance;
        this.play = play;
    }

    get amount(): number {
        throw new Error('subclass responsibility');
    }

    get volumeCredits() {
        return Math.max(this.performance.audience - 30, 0);
    }
}

function createPerformanceCalculator(performance: Performance, play: Play) {
    switch (play.type) {
        case 'tragedy':
            return new TragedyCalculator(performance, play);
        case 'comedy':
            return new ComedyCalculator(performance, play);
        default:
            throw new Error(`unknown type: ${play.type}`);
    }
}

class TragedyCalculator extends PerformanceCalculator {
    get amount() {
        let result = 40000;
        if (this.performance.audience > 30) {
            result += 1000 * (this.performance.audience - 30);
        }
        return result;
    }
}

class ComedyCalculator extends PerformanceCalculator {
    get amount() {
        let result = 30000;
        if (this.performance.audience > 20) {
            result += 10000 + 500 * (this.performance.audience - 20);
        }
        result += 300 * this.performance.audience;
        return result;
    }

    get volumeCredits() {
        return super.volumeCredits + Math.floor(this.performance.audience / 5);
    }
}

export function createStatementData(invoice: Invoice, plays: Plays) {
    const enrichedPerformances = invoice.performances.map(enrichPerformance);
    const statementData: StatementData = {
        customer: invoice.customer,
        performances: enrichedPerformances,
        totalAmount: totalAmount(enrichedPerformances),
        totalVolumeCredits: totalVolumeCredits(enrichedPerformances),
    };
    return statementData;
}

function totalVolumeCredits(performances: PerformanceEnriched[]) {
    return performances.reduce((total, p) => total + p.volumeCredits, 0);
}

function totalAmount(performances: PerformanceEnriched[]) {
    return performances.reduce((total, p) => total + p.amount, 0);
}

function enrichPerformance(performance: Performance) {
    const calculator = createPerformanceCalculator(performance, playFor(performance));
    const result = Object.assign({}, performance) as PerformanceEnriched;
    result.play = calculator.play;
    result.amount = calculator.amount;
    result.volumeCredits = calculator.volumeCredits;
    return result;
}

function playFor(performance: Performance) {
    return plays[performance.playID];
}
