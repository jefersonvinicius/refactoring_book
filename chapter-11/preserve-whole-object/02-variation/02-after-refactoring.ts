type RangeTemp = { low: number; high: number };

class HeatingPlan {
    temperatureRange: RangeTemp;

    constructor(low: number, high: number) {
        this.temperatureRange = { low, high };
    }

    withinRange(bottom: number, top: number) {
        return (
            bottom >= this.temperatureRange.low &&
            top <= this.temperatureRange.high
        );
    }

    xxxNEWwithinRange(tempRange: RangeTemp) {
        const low = tempRange.low;
        const high = tempRange.high;
        const isWithinRange = this.withinRange(low, high);
        return isWithinRange;
    }
}

const aRoom = {
    daysTempRange: {
        low: 0,
        high: 100,
    },
};
const aPlan = new HeatingPlan(20, 120);

// In this variantion, first is created a function in high context and after it inline in class
// function xxxNEWwithinRange(aPlan: HeatingPlan, tempRange: RangeTemp) {
//     const low = tempRange.low;
//     const high = tempRange.high;
//     const isWithinRange = aPlan.withinRange(low, high);
//     return isWithinRange;
// }

const alerts: string[] = [];
const tempRange = aRoom.daysTempRange;
const isWithinRange = aPlan.xxxNEWwithinRange(tempRange);
if (!isWithinRange) {
    alerts.push("room temperature went outside range");
}

console.log(alerts);
