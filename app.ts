import plays from './plays.json';
import invoices from './invoices.json';
import { Invoice, Performance, Play } from './types';

function statement(invoice: Invoice, plays: { [key: string]: Play }) {
    let totalAmount = 0;
    let volumeCredits = 0;
    let result = `Statement for ${invoice.customer}\n`;

    for (let perf of invoice.performances) {
        volumeCredits += volumeCreditsFor(perf);
        result += ` ${playFor(perf).name}: ${usd(amountFor(perf))} (${perf.audience} seats)\n`;
        totalAmount += amountFor(perf);
    }

    result += `Amount owed is ${usd(totalAmount)}\n`;
    result += `You earned ${volumeCredits} credits\n`;
    return result;

    function amountFor(performance: Performance) {
        let result = 0;
        switch (playFor(performance).type) {
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
                throw new Error(`unknown type: ${playFor(performance).type}`);
        }
        return result;
    }

    function playFor(performance: Performance) {
        return plays[performance.playID];
    }

    function volumeCreditsFor(performance: Performance) {
        let result = Math.max(performance.audience - 30, 0);
        if ('comedy' === playFor(performance).type) result += Math.floor(performance.audience / 5);
        return result;
    }

    function usd(value: number) {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
        }).format(value / 100);
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
