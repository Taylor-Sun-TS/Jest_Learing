jest.mock("./foo");
const foo = require("./foo");

// foo is a mock function
foo.mockImplementation(() => 42);
foo();
// > 42

describe("test actual function", () => {
    it("test 1 + 2", () => {
        const foo = jest.requireActual('./foo');

        expect(foo(1, 2)).toBe(3);
    });
});

describe("test mock function", () => {

    test("test mock function implementation", () => {
        expect(foo()).toBe(42);
    });


    test("test snapshot 1", () => {
        const snapshot = `
        <a className="normal" href="http://www.test1.com" >
          test1
        </a>
        `;

        expect(snapshot).toMatchSnapshot();
    });


    test("test snapshot 2", () => {
        const snapshot = `<a className="normal" href="http://www.test2.com"> test2 </a>`;

        expect(snapshot).toMatchSnapshot();
    });

});
