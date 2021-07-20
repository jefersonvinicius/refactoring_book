class HeatingPlan {
    temperatureRange: { low: number; high: number };

    constructor(low: number, high: number) {
        this.temperatureRange = { low, high };
    }

    withinRange(bottom: number, top: number) {
        return (
            bottom >= this.temperatureRange.low &&
            top <= this.temperatureRange.high
        );
    }
}

const aRoom = {
    daysTempRange: {
        low: 0,
        high: 100,
    },
};
const aPlan = new HeatingPlan(20, 120);

const alerts: string[] = [];
const low = aRoom.daysTempRange.low;
const high = aRoom.daysTempRange.high;
if (!aPlan.withinRange(low, high)) {
    alerts.push("room temperature went outside range");
}

console.log(alerts);
