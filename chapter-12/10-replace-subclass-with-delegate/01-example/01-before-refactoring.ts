class Booking {
    protected _show;
    protected _date;

    constructor(show, date) {
        this._show = show;
        this._date = date;
    }

    get hasTalkback() {
        return this._show.hasOwnProperty("talkback") && !this.isPeakDay;
    }

    get basePrice() {
        let result = this._show.price;
        if (this.isPeakDay) result += Math.round(result * 0.15);
        return result;
    }

    get isPeakDay() {
        // Some random logic
        return new Date().getDate() > 15 ? true : false;
    }
}

// Using inheritance
class PremiumBooking extends Booking {
    private _extras;

    constructor(show, date, extras) {
        super(show, date);
        this._extras = extras;
    }

    override get hasTalkback() {
        return this._show.hasOwnProperty("talkback");
    }

    override get basePrice() {
        return Math.round(super.basePrice + this._extras.premiumFee);
    }

    get hasDinner() {
        return this._show.hasOwnProperty("dinner") && !this.isPeakDay;
    }
}

// client of booking
const aBooking1 = new Booking({}, new Date());

// client of premium booking
const aBooking2 = new PremiumBooking({}, new Date(), {});
