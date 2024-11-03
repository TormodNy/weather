import { describe, expect, test } from "vitest";
import {
    getTimeFromDateString,
    getTimezoneOffsetString,
} from "../../utils/timeFormat";

// TODO: Find some way to mock timezones
describe("getTimeFromDateString", () => {
    test("should return time part of date string", () => {
        const time = getTimeFromDateString("2024-11-03T12:39+01:00");
        expect(time).toBe("12:39");
    });

    test("should return time part of different date string", () => {
        const time = getTimeFromDateString("2024-10-05T04:25+08:00");
        expect(time).toBe("22:25");
    });

    test("should return time part of string with different format", () => {
        const time = getTimeFromDateString("2024/10/05 04:25");
        expect(time).toBe("04:25");
    });

    test("should throw error", () => {
        expect(() => getTimeFromDateString("This is not a date")).throws(
            "'This is not a date' is not a valid date string!",
        );
    });
});

describe("getTimezoneOffsetString", () => {
    test("should return formatted timezone offset", () => {
        const time = getTimezoneOffsetString();
        expect(time).toBe("+01:00");
    });
});
