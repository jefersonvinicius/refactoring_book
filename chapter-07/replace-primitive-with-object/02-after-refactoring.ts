class Order {
    private _priority: Priority;

    constructor(data) {
        this._priority = data.priority;
    }

    get priority() {
        return this._priority;
    }

    get priorityString() {
        return this._priority.toString();
    }

    set priority(aString) {
        this._priority = new Priority(aString);
    }
}

class Priority {
    private _value;

    constructor(value) {
        if (value instanceof Priority) return value;
        if (Priority.legalValues().includes(value)) this._value = value;
        else throw new Error(`<${value}> is invalid for Priority`);
    }

    toString() {
        return this._value;
    }

    get _index() {
        return Priority.legalValues().findIndex((s) => s === this._value);
    }

    static legalValues() {
        return ["low", "normal", "high", "rush"];
    }

    // Now, with the new class, you can add new behaviors
    equals(other) {
        return this._index === other._index;
    }

    higherThan(other) {
        return this._index > other._index;
    }

    lowerThan(other) {
        return this._index < other._index;
    }
}

// Client
const orders = [new Order({ priority: "high" }), new Order({ priority: "low" })];
const highPriorityCount = orders.filter((o) => o.priority.higherThan(new Priority("normal"))).length;
