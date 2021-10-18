import {isTimeBetween} from "../utils/timeManipulation";

var moment = require('moment');

const RidesLogic = {

    computePrice: function(startTime, distance) {
    let initialCharge = parseFloat(process.env.REACT_APP_INITIAL_CHARGE);
    let regularMilageCharge = distance * 5 * parseFloat(process.env.REACT_APP_REGULAR_PRICE_PER_FIFTH_OF_MILE);
    let busyHoursPrice = parseFloat(process.env.REACT_APP_ADDITIONAL_PRICE_BUSY_HOURS);
    let nightHourPrice = parseFloat(process.env.REACT_APP_ADDITIONAL_PRICE_NIGHT_HOURS);

    // add initial and regular charge
    let price = initialCharge + regularMilageCharge;

    let rideTime = moment.utc(startTime).format("HH:mm:ss");

    // check busy hours
    if (isTimeBetween(process.env.REACT_APP_BUSY_HOURS_START_TIME, process.env.REACT_APP_BUSY_HOURS_END_TIME, rideTime)) {
        price += busyHoursPrice
    }

    // check night hours
    if (isTimeBetween(process.env.REACT_APP_NIGHT_HOURS_START_TIME, process.env.REACT_APP_NIGHT_HOURS_END_TIME, rideTime)) {
        price += nightHourPrice
    }
    return price

    },

    isCardRed: function (distance) {
        return distance >= parseInt(process.env.REACT_APP_DISTANCE)

    },
};

export default RidesLogic

