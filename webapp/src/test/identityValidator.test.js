import {identity} from "../component/validation/validator";

describe("passportNumber", function() {

    it("check identity number correct format", function() {
        expect(identity.test('123-12-1234')).toBe(true)
    });
    it("check identity number incorrect format", function() {
        expect(identity.test('12-1-123')).toBe(false)
    });
    it("check identity number incorrect format", function() {
        expect(identity.test('121-123')).toBe(false)
    });
    it("check identity number incorrect format", function() {
        expect(identity.test('121-12-')).toBe(false)
    });
    it("check identity number incorrect format", function() {
        expect(identity.test('1A3-AA-1AA4')).toBe(false)
    });
    it("check identity number incorrect format", function() {
        expect(identity.test('123-12-12A4')).toBe(false)
    });
    it("check identity number incorrect format", function() {
        expect(identity.test('123-1A-1234')).toBe(false)
    });
    it("check identity number incorrect format", function() {
        expect(identity.test('12A-12-1234')).toBe(false)
    });
});