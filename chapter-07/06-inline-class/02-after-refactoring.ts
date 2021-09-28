class Shipment {
    private _shippingCompany: string;
    private _trackingNumber: string;

    set shippingCompany(arg) {
        this._shippingCompany = arg;
    }

    get shippingCompany() {
        return this._shippingCompany;
    }

    get trackingNumber() {
        return this._trackingNumber;
    }

    set trackingNumber(arg) {
        this._trackingNumber = arg;
    }

    get trackingInfo() {
        return `${this.shippingCompany}: ${this.trackingNumber}`;
    }
}

// Usage
const shipment = new Shipment();
shipment.shippingCompany = "Amazon";
