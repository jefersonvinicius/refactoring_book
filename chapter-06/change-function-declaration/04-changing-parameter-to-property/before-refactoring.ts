function inNewEngland(customer: any) {
    return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(
        customer.address.state
    );
}
