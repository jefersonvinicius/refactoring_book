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

class Scroll {
    private _id;
    private _catalogItem: CatalogItem;

    constructor(id, private _lastCleaned, catalogID, catalog) {
        this._id = id;
        this._catalogItem = catalog.get(catalogID);
    }

    needsCleaning(targetDate) {
        const threshold = this.hasTag("revered") ? 700 : 1500;
        return this.daysSinceLastCleaning(targetDate) > threshold;
    }

    daysSinceLastCleaning(targetDate) {
        return this._lastCleaned.until(targetDate, ChronoUnit.DAYS);
    }

    get id() {
        return this._id;
    }

    get title() {
        return this._catalogItem.title;
    }

    hasTag(aString) {
        return this._catalogItem.hasTag(aString);
    }
}

const catalog = {}; // Repository

// Routine
const aDocument = [];
const scrolls = aDocument.map(
    (record) => new Scroll(record.id, new Date(record.lastCleaned), record.catalogData.id, catalog)
);
