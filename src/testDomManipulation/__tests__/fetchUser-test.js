import { fetchCurrentUser } from "../fetchCurrentUser";

describe("test fetchCurrentUser module", function() {


    beforeAll(function() {
        // mockFunc = jest.fn();
    });


    it("test function's result", async function() {
        const user = await fetchCurrentUser(() => ({}));

        expect(user).toEqual({
            fullName: "xxx",
            loggedIn: false,
        });
    });
});
