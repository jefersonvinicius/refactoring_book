function printOwing(invoice: any) {
    let outstanding = 0;

    console.log("***********************");
    console.log("**** Customer Owes ****");
    console.log("***********************");

    // calcula o valor a pagar (outstanding)
    for (const o of invoice.orders) {
        outstanding += o.amount;
    }

    // registra a data de vencimento (due date)
    const today = new Date();
    invoice.dueDate = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate()
    );

    // exiba detalhes
    console.log(`name: ${invoice.customer}`);
    console.log(`amount: ${outstanding}`);
    console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
}
