class Order {
    constructor(private quantity: number, private itemPrice: number) {}

    get finalPrice() {
        const basePrice = this.quantity * this.itemPrice;

        let discountLevel;
        if (this.quantity > 100) discountLevel = 2;
        else discountLevel = 1;

        return this.discountedPrice(basePrice, discountLevel);
    }

    private discountedPrice(basePrice, discountLevel) {
        switch (discountLevel) {
            case 1:
                return basePrice * 0.95;
            case 2:
                return basePrice * 0.9;
        }
    }
}
