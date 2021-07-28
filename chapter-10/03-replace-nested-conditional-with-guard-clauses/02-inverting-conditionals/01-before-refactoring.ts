function adjustedCapital(instrument) {
    let result = 0;
    if (instrument.capital > 0) {
        if (instrument.interestRate > 0 && instrument.duration > 0) {
            result = (instrument.income / instrument.duration) * instrument.adjustmentFactor;
        }
    }
    return result;
}
