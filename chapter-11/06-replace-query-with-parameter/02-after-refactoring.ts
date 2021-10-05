const thermostat = { selectedTemperature: 11, currentTemperature: 10 };

class HeatingPlan {
    private _max: number = 10;
    private _min: number = 2;

    targetTemperature(selectedTemperature) {
        if (selectedTemperature > this._max) return this._max;
        else if (selectedTemperature < this._min) return this._min;
        return selectedTemperature;
    }
}

// Client
const thePlan = new HeatingPlan();

if (thePlan.targetTemperature(thermostat.selectedTemperature) > thermostat.currentTemperature) setToHeat();
else if (thePlan.targetTemperature(thermostat.selectedTemperature) < thermostat.currentTemperature) setToCool();
else setOff();

function setToHeat() {}

function setToCool() {}

function setOff() {}
