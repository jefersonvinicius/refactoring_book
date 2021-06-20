import plays from '../plays.json';
import invoices from '../invoices.json';
import { Invoice } from './types';
import { createStatementData, Plays, StatementData } from './createStatementData';
import fs from 'fs/promises';

function usd(value: number) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
    }).format(value / 100);
}

function statement(invoice: Invoice, plays: Plays) {
    return renderPlainText(createStatementData(invoice, plays));
}

function htmlStatement(invoice: Invoice, plays: Plays) {
    const content = renderHTML(createStatementData(invoice, plays));
    fs.writeFile('./html-statement.html', content);
    return content;
}

function renderHTML(data: StatementData) {
    let result = `<h1>Statement for ${data.customer}</h1>\n`;
    result += '<table>\n';
    result += '<tr><th>play</th><th>seats</th><th>cost</th></tr>\n';
    for (let perf of data.performances) {
        result += ` <tr><th>${perf.play.name}</th><th>${perf.audience}</th><th>${usd(perf.amount)}</th></tr>\n`;
    }
    result += '</table>\n';
    result += `<p>Amount owed is <em>${usd(data.totalAmount)}</em></p>`;
    result += `<p>You earned <em>${data.totalVolumeCredits}</em> credits</p>`;
    return result;
}

function renderPlainText(data: StatementData) {
    let result = `Statement for ${data.customer}\n`;

    for (let perf of data.performances) {
        result += ` ${perf.play.name}: ${usd(perf.amount)} (${perf.audience} seats)\n`;
    }

    result += `Amount owed is ${usd(data.totalAmount)}\n`;
    result += `You earned ${data.totalVolumeCredits} credits\n`;
    return result;
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

// for (const invoice of invoices) {
//     const result = htmlStatement(invoice, plays);
//     console.log(result);
// }
