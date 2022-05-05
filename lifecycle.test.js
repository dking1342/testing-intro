
// LIFECYCLE 
// beforeEach runs before the individual test
// afterEach runs after the individual test
// beforeAll runs before all test tests
// afterAll runs after all the tests
// describe runs specific tests and highlights them in log

beforeEach(() => initDatabase());
afterEach(() => closeDatabase());

describe("Checking Name", () => {
    beforeEach(() => nameCheck());

    test("User is  Jeff", () => {
        const user = "Jeff";
        expect(user).toBe("Jeff");
    });
    test("User is  Karen", () => {
        const user = "Karen";
        expect(user).toBe("Karen");
    });
});

const initDatabase = () => console.log("Database initialized");
const closeDatabase = () => console.log("Database closed");
const nameCheck = () => console.log("check names")