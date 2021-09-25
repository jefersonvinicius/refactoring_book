export function sampleProvinceData() {
    return {
        name: "Asia",
        producers: [
            { name: "Byzantium", cost: 10, production: 9 },
            { name: "Attalia", cost: 12, production: 10 },
            { name: "Sinope", cost: 10, production: 6 },
        ],
        demand: 30,
        price: 20,
    };
}

export class Producer {
    private _province: Province;

    private _name: string;
    private _cost: number;
    private _production: number;

    constructor(province: Province, data) {
        this._province = province;
        this._cost = data.cost;
        this._name = data.name;
        this._production = data.production || 0;
    }

    get name() {
        return this._name;
    }

    get cost(): number {
        return this._cost;
    }

    set cost(arg: string | number) {
        this._cost = Number(arg);
    }

    get production(): number {
        return this._production;
    }

    set production(amountStr: string | number) {
        const amount = Number(amountStr);
        const newProduction = Number.isNaN(amount) ? 0 : amount;
        this._province.totalProduction += newProduction - this._production;
        this._production = newProduction;
    }
}

export class Province {
    private _name: string;
    private _producers: Producer[];
    private _totalProduction: number;
    private _demand: number;
    private _price: number;

    constructor(doc) {
        this._name = doc.name;
        this._producers = [];
        this._totalProduction = 0;
        this._demand = doc.demand;
        this._price = doc.price;
        doc.producers.forEach((d) => this.addProducer(new Producer(this, d)));
    }

    addProducer(arg) {
        this._producers.push(arg);
        this._totalProduction += arg.production;
    }

    get shortfall() {
        return this._demand - this.totalProduction;
    }

    get profit() {
        return this.demandValue - this.demandCost;
    }

    get demandCost() {
        let remainingDemand = this.demand;
        let result = 0;
        this.producers
            .sort((a, b) => a.cost - b.cost)
            .forEach((p) => {
                const contribution = Math.min(remainingDemand, p.production);
                remainingDemand -= contribution;
                result += contribution * p.cost;
            });
        return result;
    }

    get demandValue() {
        return this.satisfiedDemand * this.price;
    }

    get satisfiedDemand() {
        return Math.min(this._demand, this.totalProduction);
    }

    get name() {
        return this._name;
    }

    get producers() {
        return this._producers.slice();
    }

    get totalProduction() {
        return this._totalProduction;
    }

    set totalProduction(arg) {
        this._totalProduction = arg;
    }

    get demand() {
        return this._demand;
    }

    set demand(arg) {
        this._demand = arg;
    }

    get price(): number {
        return this._price;
    }

    set price(arg: number | string) {
        this._price = Number(arg);
    }
}
