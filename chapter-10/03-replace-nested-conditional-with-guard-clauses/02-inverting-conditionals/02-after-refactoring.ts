function adjustedCapital(instrument) {
    if (instrument.capital <= 0 || instrument.interestRate <= 0 || instrument.duration <= 0) return 0;
    return (instrument.income / instrument.duration) * instrument.adjustmentFactor;
}
