const Manager = require("../lib/manager");

test("Can set officeNum using constructor arguments", () => {
    const testVal = 10;
    const e = new Manager("testName", 10, "test.email@email.com", testVal);
    expect(e.officeNumber).toBe(testVal);
});

test("Can return officeNum using getOfficeNumber()", () => {
    const testVal = 10;
    const e = new Manager("testName", 10, "test.email@email.com", testVal);
    expect(e.getOfficeNumber()).toBe(testVal);
});

test("getRole() returns Manager", () => {
    const testVal = "Manager";
    const e = new Manager("testName", 10, "test.email@email.com", 10);
    expect(e.getRole()).toBe(testVal);
});