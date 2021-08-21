function rating(driver) {
    return driver.numberOfLateDeliveries > 5 ? 2 : 1;
}
