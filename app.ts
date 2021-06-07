import plays from './plays.json';
import invoices from './invoices.json';
import { Invoice, Performance, Play } from './types';

function statement(invoice: Invoice, plays: { [key: string]: Play }) {
    let totalAmount = 0;
    let volumeCredits = 0;
    let result = `Statement for ${invoice.customer}\n`;
    const format = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
    }).format;

    for (let perf of invoice.performances) {
        volumeCredits += Math.max(perf.audience - 30, 0);

        if ('comedy' === playFor(perf).type) volumeCredits += Math.floor(perf.audience / 5);

        result += ` ${playFor(perf).name}: ${format(amountFor(perf) / 100)} (${perf.audience} seats)\n`;
        totalAmount += amountFor(perf);
    }

    result += `Amount owed is ${format(totalAmount / 100)}\n`;
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
}

for (const invoice of invoices) {
    console.log(statement(invoice, plays));
}
