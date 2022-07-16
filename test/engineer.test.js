const Engineer = require("../lib/engineer");

test("Can set github using constructor arguments", () => {
    const testVal = "testGitHub";
    const e = new Engineer("testName", 10, "test.email@email.com", testVal)
    expect(e.github).toBe(testVal)
});

test("Can return github username using getGitHub()", () => {
    const testVal = "testGitHub";
    const e = new Engineer("testName", 10, "test.email@email.com", testVal)
    expect(e.getGitHub()).toBe(testVal)
});

test("getRole() returns Engineer", () => {
    const testVal = "Engineer";
    const e = new Engineer("testName", 10, "test.email@email.com");
    expect(e.getRole()).toBe(testVal);
});