class Booking {
    private _premiumDelegate: PremiumBookingDelegate; // Using delegate
    public _show;
    protected _date;

    constructor(show, date) {
        this._show = show;
        this._date = date;
    }

    get hasTalkback() {
        return this._premiumDelegate
            ? this._premiumDelegate.hasTalkback
            : this._show.hasOwnProperty("talkback") && !this.isPeakDay;
    }

    get basePrice() {
        let result = this._show.price;
        if (this.isPeakDay) result += Math.round(result * 0.15);
        return this._premiumDelegate ? this._premiumDelegate.extendBasePrice(result) : result;
    }

    get isPeakDay() {
        // Some random logic
        return new Date().getDate() > 15 ? true : false;
    }

    _bePremium(extras) {
        this._premiumDelegate = new PremiumBookingDelegate(this, extras);
    }

    get hasDinner() {
        return this._premiumDelegate ? this._premiumDelegate.hasDinner : undefined;
    }
}

class PremiumBookingDelegate {
    private _host: Booking;
    private _extras;

    constructor(hostBooking: Booking, extras) {
        this._host = hostBooking;
        this._extras = extras;
    }

    get hasTalkback() {
        return this._host._show.hasOwnProperty("talkback");
    }

    extendBasePrice(base) {
        return Math.round(base + this._extras.premiumFee);
    }

    get hasDinner() {
        return this._host._show.hasOwnProperty("dinner") && !this._host.isPeakDay;
    }
}

function createBooking(show, date) {
    return new Booking(show, date);
}

function createPremiumBooking(show, date, extras) {
    const result = new Booking(show, date);
    result._bePremium(extras);
    return result;
}

// client of booking
const aBooking1 = createBooking({}, new Date());

// client of premium booking
const aBooking2 = createPremiumBooking({}, new Date(), {});
