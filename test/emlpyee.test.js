const Employee = require('../lib/employee');

test("Can create a new Employee object", () => {
    const e = new Employee();
    expect(typeof(e)).toBe('object');
});

test("Can set name using constructor arguments", () => {
    const testVal = "testName";
    const e = new Employee(testVal);
    expect(e.name).toBe(testVal);
});

test("Can set id using constructor arguments", () => {
    const testVal = 10;
    const e = new Employee("testName", testVal);
    expect(e.id).toBe(testVal);
});

test("Can set email using constructor arguments", () => {
    const testVal = "test.email@email.com";
    const e = new Employee("testName", 10, testVal);
    expect(e.email).toBe(testVal);
});

test("Can return name using getName()", () => {
    const testVal = "testName";
    const e = new Employee(testVal);
    expect(e.getName()).toBe(testVal);
});

test("Can return id using getID()", () => {
    const testVal = 10;
    const e = new Employee("testName", testVal);
    expect(e.getID()).toBe(testVal);
});

test("Can return email using getEmail()", () => {
    const testVal = "test.email@email.com";
    const e = new Employee("testName", 10, testVal);
    expect(e.getEmail()).toBe(testVal);
});

test("getRole() returns Employee", () => {
    const testVal = "Employee";
    const e = new Employee("testName", 10, "test.email@email.com");
    expect(e.getRole()).toBe(testVal);
});