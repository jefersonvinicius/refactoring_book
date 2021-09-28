class Order {
    priority;

    constructor(data) {
        this.priority = data.priority;
    }
}

// Client
const orders = [new Order({ priority: "high" }), new Order({ priority: "low" })];
const highPriorityCount = orders.filter((o) => "high" === o.priority || "rush" === o.priority).length;
