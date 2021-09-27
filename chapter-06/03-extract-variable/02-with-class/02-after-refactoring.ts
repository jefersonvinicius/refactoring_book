class Order {
    private _data;

    constructor(record) {
        this._data = record;
    }

    get quantity() {
        return this._data.quantity;
    }

    get itemPrice() {
        return this._data.itemPrice;
    }

    get price() {
        return this.basePrice - this.quantityDiscount + this.shipping;
    }

    get basePrice() {
        return this.quantity * this.itemPrice;
    }

    get quantityDiscount() {
        return Math.max(0, this.quantity - 500) * this.itemPrice * 0.05;
    }

    get shipping() {
        return Math.min(this.quantity * this.itemPrice * 0.1, 100);
    }
}
