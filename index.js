const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(multiplyValue) {
    return function(value) {
        return multiplyValue * value
    }
}

const fareDoubler = function(value) {
    return value * 2
}

const fareTripler = function(value) {
    return value * 3
}

const selectDifferentDrivers = function(drivers, driversToReturn) {
    return driversToReturn(drivers)
}