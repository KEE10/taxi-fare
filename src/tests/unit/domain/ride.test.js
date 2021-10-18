import RidesLogic from "../../../domain/ride"

describe("compute price function", () => {
    const distance = 1;
    test("it should compute price just before busy hours range starts", () => {
        const startTime = "2020-06-19T15:59:59.000Z";
        expect(RidesLogic.computePrice(startTime, distance)).toEqual(3.5)
    });

    test("it should compute price just at the start of busy hours range", () => {
        const startTime = "2020-06-19T16:00:00.000Z";
        expect(RidesLogic.computePrice(startTime, distance)).toEqual(4.5)
    });

    test("it should compute price during busy hours range", () => {
        const startTime = "2020-06-19T17:00:00.000Z";
        expect(RidesLogic.computePrice(startTime, distance)).toEqual(4.5)
    });

    test("it should compute price just after busy hours range finishes", () => {
        const startTime = "2020-06-19T19:01:00.000Z";
        expect(RidesLogic.computePrice(startTime, distance)).toEqual(3.5)
    });

    test("it should compute price after busy hours range finishes", () => {
        const startTime = "2020-06-19T19:30:59.000Z";
        expect(RidesLogic.computePrice(startTime, distance)).toEqual(3.5)
    });

    test("it should compute price just before night hours range starts", () => {
        const startTime = "2020-06-19T19:59:59.000Z";
        expect(RidesLogic.computePrice(startTime, distance)).toEqual(3.5)
    });

    test("it should compute price just at the night of busy hours range", () => {
        const startTime = "2020-06-19T20:00:00.000Z";
        expect(RidesLogic.computePrice(startTime, distance)).toEqual(4)
    });

    test("it should compute price during night hours range", () => {
        const startTime = "2020-06-19T00:00:00.000Z";
        expect(RidesLogic.computePrice(startTime, distance)).toEqual(4)
    });

    test("it should compute price just after busy hours range finishes", () => {
        const startTime = "2020-06-19T06:01:00.000Z";
        expect(RidesLogic.computePrice(startTime, distance)).toEqual(3.5)
    });

    test("it should compute price after busy hours range finishes", () => {
        const startTime = "2020-06-19T10:30:00.000Z";
        expect(RidesLogic.computePrice(startTime, distance)).toEqual(3.5)
    });
});
