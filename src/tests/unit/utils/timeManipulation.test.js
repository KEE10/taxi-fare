import {isTimeBetween, addSecondsToDateTime, convertSecondsToHhmmss} from "../../../utils/timeManipulation";

describe("check whether a given time in a given range of time", () => {
    const startTime = "16:00:00";
    const endTime = "19:00:00";
    test("it should check time just before begining of range ", () => {
        const testTime = "15:59:59"
        expect(isTimeBetween(startTime, endTime, testTime)).toEqual(false)

    });

    test("it should check time at begining of range ", () => {
        const testTime = "16:00:00";
        expect(isTimeBetween(startTime, endTime, testTime)).toEqual(true)

    });

    test("it should check time in range ", () => {
        const testTime = "18:59:59";
        expect(isTimeBetween(startTime, endTime, testTime)).toEqual(true)

    });

    test("it should check time at end of range ", () => {
        const testTime = "19:00:00";
        expect(isTimeBetween(startTime, endTime, testTime)).toEqual(true)

    });

    test("it should check time just at the end of range ", () => {
        const testTime = "19:01:00";
        expect(isTimeBetween(startTime, endTime, testTime)).toEqual(false)

    });
})

describe("check whether a given time is in range of overlapping days", () => {
    const overlapStartTime = "20:00:00";
    const overlapEndTime = "06:00:00";

    test("it should check time just before begining of range ", () => {
        const testTime = "19:59:59"
        expect(isTimeBetween(overlapStartTime, overlapEndTime, testTime)).toEqual(false)

    });

    test("it should check time at begining of range ", () => {
        const testTime = "20:00:00";
        expect(isTimeBetween(overlapStartTime, overlapEndTime, testTime)).toEqual(true)

    });

    test("it should check time in range ", () => {
        const testTime = "22:59:59";
        expect(isTimeBetween(overlapStartTime, overlapEndTime, testTime)).toEqual(true)

    });

    test("it should check time at end of range ", () => {
        const testTime = "06:00:00";
        expect(isTimeBetween(overlapStartTime, overlapEndTime, testTime)).toEqual(true)

    });

    test("it should check time just at the end of range ", () => {
        const testTime = "06:01:00";
        expect(isTimeBetween(overlapStartTime, overlapEndTime, testTime)).toEqual(false)

    });

})

describe("add given seconds to a given date time and return result in ISO format", () => {
    let dateTime = "2020-06-19T17:00:00.000Z"
    test("it should add seconds to date time", () => {
        let secondsToAdd = 2;
        expect(addSecondsToDateTime(dateTime, secondsToAdd)).toEqual("2020-06-19T17:00:02.000Z")
    })

    test("it should overlap to next day", () => {
        let secondsToAdd = 86402;
        expect(addSecondsToDateTime(dateTime, secondsToAdd)).toEqual("2020-06-20T17:00:02.000Z")

    })
})

describe("convert given seconds to hh:mm:ss format", () => {
    test("it should format correctly", () => {
        let secondsToFormat = 3600;
        expect(convertSecondsToHhmmss(secondsToFormat)).toEqual("01:00:00")
    });

    test("it should format correctly more than one day worth of seconds", () => {
        let secondsToFormat = 86401;
        expect(convertSecondsToHhmmss(secondsToFormat)).toEqual("24:00:01")
    })
})