function disabilityAmount(employee) {
    if (employee.seniority < 2) return 0;
    if (employee.monthsDisabled > 12) return 0;
    if (employee.isPartTime) return 0;
    return 100 * 10; // calculate disability amount
}

function extra(employee) {
    if (employee.onVacation) {
        if (employee.seniority > 10) {
            return 1;
        }
    }
    return 0.5;
}
