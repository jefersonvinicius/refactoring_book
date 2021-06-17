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
    const calculator = new PerformanceCalculator(performance, playFor(performance));
    const result = Object.assign({}, performance) as PerformanceEnriched;
    result.play = playFor(performance);
    result.amount = amountFor(result);
    result.volumeCredits = volumeCreditsFor(result);
    return result;
}

function volumeCreditsFor(performance: PerformanceEnriched) {
    let result = Math.max(performance.audience - 30, 0);
    if ('comedy' === performance.play.type) result += Math.floor(performance.audience / 5);
    return result;
}

function playFor(performance: Performance) {
    return plays[performance.playID];
}

function amountFor(performance: PerformanceEnriched) {
    let result = 0;
    switch (performance.play.type) {
        case 'tragedy':
            result = 40000;
            if (performance.audience > 30) {
                result += 1000 * (performance.audience - 30);
            }
            break;
        case 'comedy':
            result = 30000;
            if (performance.audience > 20) {
                result += 10000 + 500 * (performance.audience - 20);
            }
            result += 300 * performance.audience;
            break;
        default:
            throw new Error(`unknown type: ${performance.play.type}`);
    }
    return result;
}
