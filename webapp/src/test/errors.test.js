import {findError} from "../util/errors";

describe("findError", function() {

    it("find error description by error code", function() {
        expect(findError(500)).toBe('Server error')
    });
    it("find error description by error code", function() {
        expect(findError(501)).toBe('Not Implemented')
    });
    it("find error description by error code", function() {
        expect(findError(400)).toBe('Unknown error')
    });
    it("find error description by error code", function() {
        expect(findError(10001)).toBe('Delete operation failed')
    });
    it("find error description by error code", function() {
        expect(findError(10002)).toBe('Add operation failed')
    });
    it("find error description by error code", function() {
        expect(findError(10003)).toBe('Update operation failed')
    });
});