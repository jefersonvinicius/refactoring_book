type Item = {
    price: number;
};

class Order {
    private quantity: number;
    private item: Item;

    constructor(quantity: number, item: Item) {
        this.quantity = quantity;
        this.item = item;
    }

    get basePrice() {
        return this.quantity * this.item.price;
    }

    get discountFactor() {
        let discountFactor = 0.98;
        if (this.basePrice > 1000) discountFactor -= 0.03;
        return discountFactor;
    }

    get price() {
        return this.basePrice * this.discountFactor;
    }
}
