const RidesLogic = {
    computePrice: function(startTime, distance) {
    // todo: use built-in js library to to check hour in ranges
    // todo: logic to be completed
    let initialCharge = parseFloat(process.env.REACT_APP_INITIAL_CHARGE);
    let regularMilageCharge = distance * 5 * parseFloat(process.env.REACT_APP_REGULAR_PRICE_PER_FIFTH_OF_MILE);
    let busyHoursPrice = parseFloat(process.env.REACT_APP_ADDITIONAL_PRICE_BUSY_HOURS);
    let nightHourPrice = parseFloat(process.env.REACT_APP_ADDITIONAL_PRICE_NIGHT_HOURS);
    // add initial and regular charge
    let price = initialCharge + regularMilageCharge;

    let formattedStartDateTime =  new Date(startTime);
    let hour = formattedStartDateTime.getUTCHours();
    // check busy periods between 4PM and 7PM
    if (16 <= hour && hour <= 19) {
        price += busyHoursPrice
    }
    // check night hours between 8PM and 6AM
    if ((0 <= hour && hour <= 6 ) || ( 20 <= hour && hour <= 23)) {
        price += nightHourPrice

    }
    return price

    },

    computeEndDateTime: function (startTime, duration) {
        let startDateTime = new Date(startTime);
        return startDateTime.setSeconds(startDateTime.getSeconds() + duration)
    },

    isCardRed: function (distance) {
        return distance >= parseInt(process.env.REACT_APP_DISTANCE)

    }
};

export default RidesLogic

