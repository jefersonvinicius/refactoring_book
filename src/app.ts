import plays from '../plays.json';
import invoices from '../invoices.json';
import { Invoice } from './types';
import { createStatementData, Plays, StatementData } from './createStatementData';

function statement(invoice: Invoice, plays: Plays) {
    return renderPlainText(createStatementData(invoice, plays));
}

function renderPlainText(data: StatementData) {
    let result = `Statement for ${data.customer}\n`;

    for (let perf of data.performances) {
        result += ` ${perf.play.name}: ${usd(perf.amount)} (${perf.audience} seats)\n`;
    }

    result += `Amount owed is ${usd(data.totalAmount)}\n`;
    result += `You earned ${data.totalVolumeCredits} credits\n`;
    return result;

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
