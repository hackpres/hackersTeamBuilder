const Intern = require("../lib/intern");

test("Can set school using constructor arguments", () => {
    const testVal = "testSchool";
    const e = new Intern("testName", 10, "test.email@email.com", testVal)
    expect(e.school).toBe(testVal)
});

test("Can return School name using getSchool()", () => {
    const testVal = "testGitHub";
    const e = new Intern("testName", 10, "test.email@email.com", testVal)
    expect(e.getSchool()).toBe(testVal)
});

test("getRole() returns Intern", () => {
    const testVal = "Intern";
    const e = new Intern("testName", 10, "test.email@email.com");
    expect(e.getRole()).toBe(testVal);
});