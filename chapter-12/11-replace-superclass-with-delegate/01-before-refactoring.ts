const ChronoUnit = {
    DAYS: 1000,
};

class CatalogItem {
    constructor(private _id, private _title, private _tags) {}

    get id() {
        return this._id;
    }

    get title() {
        return this._title;
    }

    hasTag(arg) {
        return this._tags.includes(arg);
    }
}

class Scroll extends CatalogItem {
    constructor(_id, _title, _tags, private _lastCleaned) {
        super(_id, _title, _tags);
    }

    needsCleaning(targetDate) {
        const threshold = this.hasTag("revered") ? 700 : 1500;
        return this.daysSinceLastCleaning(targetDate) > threshold;
    }

    daysSinceLastCleaning(targetDate) {
        return this._lastCleaned.until(targetDate, ChronoUnit.DAYS);
    }
}

// Routine
const aDocument = [];
const scrolls = aDocument.map(
    (record) => new Scroll(record.id, record.catalogData.title, record.catalogData.tags, new Date(record.lastCleaned))
);
