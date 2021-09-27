const station = {
    name: "ZB1",
    readings: [
        { temp: 47, time: "2016-11-10 09:10" },
        { temp: 53, time: "2016-11-10 09:10" },
        { temp: 58, time: "2016-11-10 09:10" },
        { temp: 53, time: "2016-11-10 09:10" },
        { temp: 51, time: "2016-11-10 09:10" },
    ],
};

class NumberRange {
    private data: { min: number; max: number };

    constructor(min: number, max: number) {
        this.data = { min, max };
    }

    get min() {
        return this.data.min;
    }

    get max() {
        return this.data.max;
    }

    contains(arg: number) {
        // When class are used instead of plain data, automatically you can create behaviors
        return arg >= this.min && arg <= this.max;
    }
}

function readingsOutsideRange(station: any, range: NumberRange) {
    return station.readings.filter((r: any) => !range.contains(r.temp));
}

const range = new NumberRange(40, 50);
const alerts = readingsOutsideRange(station, range);

console.log(alerts);
