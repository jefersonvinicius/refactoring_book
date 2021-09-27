function inNewEngland(customer: any) {
    return xxNEWinNewEngland(customer.address.state);
}

function xxNEWinNewEngland(stateCode: string) {
    return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(stateCode);
}

// Use to migration process to change all calls to new 'xxNEWinNewEngland' and user rename tool to change to 'inNewEngland'

// Other place of system:

const someCustomers = [];
// before:
let newEnglanders = someCustomers.filter((c) =>
    xxNEWinNewEngland(c.address.state)
);

// after:
newEnglanders = someCustomers.filter(
    (c) => inNewEngland(c.address.state) // after renamed
);
