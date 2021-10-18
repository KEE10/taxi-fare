var moment = require('moment');

export function isTimeBetween(startTime, endTime, serverTime) {
    const createMomentObject = function(time) {
        return moment(time, "HH:mm:ss")
    };

    let start = createMomentObject(startTime);
    let end = createMomentObject(endTime);
    let server = createMomentObject(serverTime);
    if (end < start) {
        return (server >= start && server<= moment('23:59:59', "h:mm:ss")) || (server>= moment('0:00:00', "h:mm:ss") && server <= end);
    }
    return server >= start && server <= end
}

export function addSecondsToDateTime(startTime, duration) {
    let startDateTime = moment.utc(startTime);
    return `${startDateTime.add(duration, "seconds").format("YYYY-MM-DDTHH:mm:ss.SSS")}Z`
}

export function convertSecondsToHhmmss(seconds) {
    const pad = function (num) {
        return ("0"+num).slice(-2)
    };
    
    let minutes = Math.floor(seconds / 60);
    seconds = seconds%60;
    let hours = Math.floor(minutes/60);
    minutes = minutes%60;
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}