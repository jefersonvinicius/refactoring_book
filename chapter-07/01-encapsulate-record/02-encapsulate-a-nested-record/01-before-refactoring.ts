// Data example
const customerData = {
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
};

// Update example
const customerID = 38673;
const year = 2016;
const month = "2";
customerData[customerID].usages[year][month] = 100;

// Read example
function compareUsage(customerID: number, laterYear: number, month: number) {
    const later = customerData[customerID].usages[laterYear][month];
    const earlier = customerData[customerID].usages[laterYear - 1][month];
    return { laterAmount: later, change: later - earlier };
}
