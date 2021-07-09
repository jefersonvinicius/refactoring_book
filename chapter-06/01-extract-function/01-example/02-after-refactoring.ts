function printOwing(invoice: any) {
    printBanner();
    const outstanding = calculateOutstanding();
    recordDueDate();
    printDetails();

    function printBanner() {
        console.log("***********************");
        console.log("**** Customer Owes ****");
        console.log("***********************");
    }

    function calculateOutstanding() {
        let result = 0;
        for (const o of invoice.orders) {
            result += o.amount;
        }
        return result;
    }

    function recordDueDate() {
        const today = new Date();
        invoice.dueDate = new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate()
        );
    }

    function printDetails() {
        console.log(`name: ${invoice.customer}`);
        console.log(`amount: ${outstanding}`);
        console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
    }
}
