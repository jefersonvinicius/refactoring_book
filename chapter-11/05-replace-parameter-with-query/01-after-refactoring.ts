class Order {
    constructor(private quantity: number, private itemPrice: number) {}

    get finalPrice() {
        const basePrice = this.quantity * this.itemPrice;
        return this.discountedPrice(basePrice);
    }

    get discountLevel() {
        return this.quantity > 100 ? 2 : 1;
    }

    private discountedPrice(basePrice) {
        switch (this.discountLevel) {
            case 1:
                return basePrice * 0.95;
            case 2:
                return basePrice * 0.9;
        }
    }
}
