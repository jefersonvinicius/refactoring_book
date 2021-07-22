import { isBefore, isAfter } from "date-fns";
import assert from "assert";

function calculateServiceCost(plan: Plan, quantity: number, date: Date) {
    if (!isBefore(date, plan.summerStart) && !isAfter(date, plan.summerEnd)) {
        return quantity * plan.summerRate;
    } else {
        return quantity * plan.regularRate + plan.regularServiceCharge;
    }
}

type Plan = {
    summerStart: Date;
    summerEnd: Date;
    summerRate: number;
    regularRate: number;
    regularServiceCharge: number;
};

const plan1: Plan = {
    summerStart: new Date("2022-01-13T00:00:00"),
    summerEnd: new Date("2022-03-13T00:00:00"),
    regularRate: 10,
    summerRate: 15,
    regularServiceCharge: 3,
};

let cost = calculateServiceCost(plan1, 2, new Date("2022-01-14T00:00:00"));
assert.deepStrictEqual(cost, 30, "Cost should be calculated by summer charge");

cost = calculateServiceCost(plan1, 2, new Date("2022-01-01T00:00:00"));
assert.deepStrictEqual(cost, 23, "Cost should be calculated by regular charge");
