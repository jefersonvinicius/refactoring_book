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

    get price() {
        const basePrice = this.quantity * this.item.price; // This variable will replace by method
        let discountFactor = 0.98; // And this too
        if (basePrice > 1000) discountFactor -= 0.03;
        return basePrice * discountFactor;
    }
}
