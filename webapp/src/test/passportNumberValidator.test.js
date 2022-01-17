import {passportNumber} from "../component/validation/validator";

describe("passportNumber", function() {

    it("check passport number correct format", function() {
        expect(passportNumber.test('123456-1234')).toBe(true)
    });
    it("check passport number correct format", function () {
        expect(passportNumber.test('123456+1234')).toBe(true)
    });
    it("check passport number incorrect format", function () {
        expect(passportNumber.test('1234567-12347')).toBe(false)
    });
    it("check passport number incorrect format", function () {
        expect(passportNumber.test('1234567+12347')).toBe(false)
    });
    it("check passport number incorrect format", function () {
        expect(passportNumber.test('12345+123')).toBe(false)
    });
    it("check passport number incorrect format", function () {
        expect(passportNumber.test('12345-123')).toBe(false)
    });
    it("check passport number incorrect format", function () {
        expect(passportNumber.test('A2345Z-A23Z')).toBe(false)
    });
    it("check passport number incorrect format", function () {
        expect(passportNumber.test('-')).toBe(false)
    });
    it("check passport number incorrect format", function () {
        expect(passportNumber.test('+')).toBe(false)
    });
    it("check passport number incorrect format", function () {
        expect(passportNumber.test('12-12')).toBe(false)
    });
    it("check passport number incorrect format", function () {
        expect(passportNumber.test('12+12')).toBe(false)
    });
});