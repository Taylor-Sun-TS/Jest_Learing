import { sum } from "./sum";
// const { sum } = require("./sum");

describe('this is a test block', () => {
    test("test 1 + 2", () => {
        expect(sum(1, 2)).toBe(3);
    });

    test("test 2 + 2", () => {
        expect(sum(2, 2)).toBe(4);
    });

    // test.only('this will be the only test that runs', () => {
    //     expect(true).toBe(true);
    //   });

});

describe("test mocking module", () => {
    test("test 1 + 2", () => {
        expect(sum(1, 2)).toBe(3);
    });

    test("test 2 + 2", () => {
        expect(sum(2, 2)).toBe(4);
    });
});