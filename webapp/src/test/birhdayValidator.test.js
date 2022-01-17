import {birthday} from "../component/validation/validator";

describe("passportNumber", function() {

    it("check identity number correct format", function() {
        expect(birthday.test('2022-01-08')).toBe(true)
    });
    it("check identity number incorrect format", function() {
        expect(birthday.test('2022-1-08')).toBe(false)
    });
    it("check identity number incorrect format", function() {
        expect(birthday.test('2022-01-0')).toBe(false)
    });
    it("check identity number incorrect format", function() {
        expect(birthday.test('202-01-08')).toBe(false)
    });
    it("check identity number incorrect format", function() {
        expect(birthday.test('2022-01-084')).toBe(false)
    });
    it("check identity number incorrect format", function() {
        expect(birthday.test('2022-014-08')).toBe(false)
    });
    it("check identity number incorrect format", function() {
        expect(birthday.test('20225-01-08')).toBe(false)
    });
    it("check identity number incorrect format", function() {
        expect(birthday.test('202A-0A-A8')).toBe(false)
    });
});