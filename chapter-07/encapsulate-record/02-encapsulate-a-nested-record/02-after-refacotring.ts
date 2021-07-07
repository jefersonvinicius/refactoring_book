class CustomerData {
    _data: any;
    constructor(data: any) {
        this._data = data;
    }

    setUsage(customerID: number, year: number, month: number, amount: number) {
        this._data[customerID].usages[year][month] = amount;
    }

    usage(customerID: number, year: number, month: number) {
        return this._data[customerID].usages[year][month];
    }
}

// Data example
let customerData = new CustomerData({
    1920: {
        name: "martin",
        id: 1920,
        usages: {
            2016: {
                "1": 50,
                "2": 55,
                "3": 55,
                "4": 55,
                "5": 55,
                "6": 55,
                "7": 55,
                "8": 55,
                "9": 55,
                "10": 55,
                "11": 55,
                "12": 55,
            },
            2015: {
                "1": 50,
                "2": 55,
                "3": 55,
                "4": 55,
                "5": 55,
                "6": 55,
                "7": 55,
                "8": 55,
                "9": 55,
                "10": 55,
                "11": 55,
                "12": 55,
            },
        },
    },
    38673: {
        name: "neal",
        id: 38673,
        usages: {
            2016: {
                "1": 50,
                "2": 55,
                "3": 55,
                "4": 55,
                "5": 55,
                "6": 55,
                "7": 55,
                "8": 55,
                "9": 55,
                "10": 55,
                "11": 55,
                "12": 55,
            },
            2015: {
                "1": 50,
                "2": 55,
                "3": 55,
                "4": 55,
                "5": 55,
                "6": 55,
                "7": 55,
                "8": 55,
                "9": 55,
                "10": 55,
                "11": 55,
                "12": 55,
            },
        },
    },
});

function getCustomerData() {
    return customerData;
}
function getRawDataOfCustomers() {
    return customerData._data;
}
function setRawDataOfCustomers(arg: any) {
    customerData = new CustomerData(arg);
}

// Update example
const customerID = 38673;
const year = 2016;
const month = 2;
getCustomerData().setUsage(customerID, year, month, 100);

// Read example
function compareUsage(customerID: number, laterYear: number, month: number) {
    const later = getCustomerData().usage(customerID, year, month);
    const earlier = getCustomerData().usage(customerID, laterYear - 1, month);
    return { laterAmount: later, change: later - earlier };
}
