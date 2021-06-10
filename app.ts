import plays from './plays.json';
import invoices from './invoices.json';
import { Invoice, Performance, Play } from './types';

type Plays = { [key: string]: Play };

type StatementData = {
    customer: string;
    performances: PerformanceEnriched[];
};

type PerformanceEnriched = Performance & {
    play: Play;
    amount: number;
};

function statement(invoice: Invoice, plays: Plays) {
    const statementData: StatementData = {
        customer: invoice.customer,
        performances: invoice.performances.map(enrichPerformance),
    };
    return renderPlainText(statementData, plays);

    function enrichPerformance(performance: Performance) {
        const result = Object.assign({}, performance) as PerformanceEnriched;
        result.play = playFor(performance);
        result.amount = amountFor(result);
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
}

function renderPlainText(data: StatementData, plays: Plays) {
    let result = `Statement for ${data.customer}\n`;

    for (let perf of data.performances) {
        result += ` ${perf.play.name}: ${usd(perf.amount)} (${perf.audience} seats)\n`;
    }

    result += `Amount owed is ${usd(totalAmount())}\n`;
    result += `You earned ${totalVolumeCredits()} credits\n`;
    return result;

    function volumeCreditsFor(performance: PerformanceEnriched) {
        let result = Math.max(performance.audience - 30, 0);
        if ('comedy' === performance.play.type) result += Math.floor(performance.audience / 5);
        return result;
    }

    function usd(value: number) {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
        }).format(value / 100);
    }

    function totalVolumeCredits() {
        let result = 0;
        for (let perf of data.performances) {
            result += volumeCreditsFor(perf);
        }
        return result;
    }

    function totalAmount() {
        let result = 0;
        for (let perf of data.performances) {
            result += perf.amount;
        }
        return result;
    }
}
const EXPECTED = `Statement for BigCo
 Hamlet: $650.00 (55 seats)
 As You Lite It: $580.00 (35 seats)
 Othello: $500.00 (40 seats)
Amount owed is $1,730.00
You earned 47 credits
`;

for (const invoice of invoices) {
    const result = statement(invoice, plays);
    console.log(result);
    console.log(result === EXPECTED ? 'OK' : "Error: result doesn't expected");
}
