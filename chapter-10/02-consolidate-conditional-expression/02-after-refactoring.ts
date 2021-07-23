function disabilityAmount(employee) {
    if (isNotEligableForDisability()) return 0;
    return 100 * 10; // calculate disability amount

    function isNotEligableForDisability() {
        return employee.seniority < 2 || employee.monthsDisabled > 12 || employee.isPartTime;
    }
}

function extra(employee) {
    // Case the conditional get complex, you can use Extract Function like the example above
    if (employee.onVacation && employee.seniority > 10) {
        return 1;
    }
    return 0.5;
}
