class HeatingPlan {
    temperatureRange: { low: number; high: number };

    constructor(low: number, high: number) {
        this.temperatureRange = { low, high };
    }

    withinRange(numberRange: { low: number; high: number }) {
        // Now, this method receive an object
        return numberRange.low >= this.temperatureRange.low && numberRange.high <= this.temperatureRange.high;
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
if (!aPlan.withinRange(aRoom.daysTempRange)) {
    alerts.push("room temperature went outside range");
}

console.log(alerts);
