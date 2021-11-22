// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(multiplyValue) {
    return function(value) {
        return multiplyValue * value
    }
}

const fareDoubler = function(doubleValue) {
    return doubleValue * 2
}

const fareTripler = function(tripleValue) {
    return tripleValue * 3
}

const selectDifferentDrivers = function(drivers, driversToReturn) {
    return driversToReturn(drivers);
};



// const returnFirstTwoDrivers = function(drivers) {
//     return drivers.slice(0, 2);
// }

// const returnLastTwoDrivers = function(drivers) {
//     return drivers.slice(-2);
// }

// const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

// const createFareMultiplier = function(multiplyValue) {
//     return function(value) {
//         return multiplyValue * value;
//     }
// }

// const fareDoubler = function(createFareMultiplier) {
//     return createFareMultiplier * 2;
// }

// const fareTripler = createFareMultiplier(3);

// const selectDifferentDrivers = function(drivers, driversToReturn) {
//     return driversToReturn(drivers);
// };