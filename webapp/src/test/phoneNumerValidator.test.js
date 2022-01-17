import {phoneNumber} from "../component/validation/validator";

describe("passportNumber", function() {

    it("check identity number correct format", function() {
        expect(phoneNumber.test('188-763-4768')).toBe(true)
    });
    it("check identity number correct format", function() {
        expect(phoneNumber.test('188-763.4768')).toBe(true)
    });
    it("check identity number correct format", function() {
        expect(phoneNumber.test('188 763.4768')).toBe(true)
    });
    it("check identity number correct format", function() {
        expect(phoneNumber.test('188.763.4768')).toBe(true)
    });
    it("check identity number correct format", function() {
        expect(phoneNumber.test('188-76-4768')).toBe(true)
    });
    it("check identity number correct format", function() {
        expect(phoneNumber.test('(457) 824-2536')).toBe(true)
    });
    it("check identity number correct format", function() {
        expect(phoneNumber.test('1-010-514-7269')).toBe(true)
    });
    it("check identity number incorrect format", function() {
        expect(phoneNumber.test('188d-763d-4768d')).toBe(false)
    });
    it("check identity number incorrect format", function() {
        expect(phoneNumber.test('1888-7638-47688')).toBe(false)
    });
    it("check identity number incorrect format", function() {
        expect(phoneNumber.test('12-0102-5142-72692')).toBe(false)
    });
    it("check identity number incorrect format", function() {
        expect(phoneNumber.test('(457)824-2536')).toBe(false)
    });
});