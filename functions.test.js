import { functions } from "./functions";

// CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// to BeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

// toBe examples
test('Adds 2 + 2 to equal 4', ()=> {
    expect(functions.add(2, 2)).toBe(4);
});
test('Adds 2 + 2 to NOT equal 5', ()=> {
    expect(functions.add(2, 2)).not.toBe(5);
});

// toBeNull example
test('Should be null', ()=>{
    expect(functions.isNull()).toBeNull();
});

// toBeFalsy example
test('Should be falsy', ()=>{
    expect(functions.checkValue(null)).toBeFalsy();
});
test('Should be falsy', ()=>{
    expect(functions.checkValue(false)).toBeFalsy();
});

// toBeTruthy example
test('Should be truthy', ()=>{
    expect(functions.checkValue(true)).toBeTruthy();
});
test('Should be truthy', ()=>{
    expect(functions.checkValue(true)).toBeTruthy();
});

// toEqual example
test('User should be Jack Black object', ()=>{
    // cannot use toBe because it is for primitive types
    // expect(functions.createUser()).toBe({
    //     firstName: "Jack",
    //     lastName: "Black"
    // });
    expect(functions.createUser()).toEqual({
        firstName: "Jack",
        lastName: "Black"
    })
});

// comparatives examples
// less than example
test('Should be less than 1600', ()=> {
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThan(1600);
});
// less than or equal to example
test('Should be less than or equal to 1600', ()=> {
    const load1 = 800;
    const load2 = 800;
    expect(load1 + load2).toBeLessThanOrEqual(1600);
});
// greater than example
test('Should be greater than 1600', ()=>{
    const load1 = 800;
    const load2 = 900;
    expect(load1 + load2).toBeGreaterThan(1600);
});
// greater than or equal to example
test('Should be greater than or equal to 1600', ()=>{
    const load1 = 800;
    const load2 = 800;
    expect(load1 + load2).toBeGreaterThanOrEqual(1600);
});

// Regex
// matching the parameter
test('There is an I in team', ()=> {
    expect('teami').toMatch(/I/i);
});
// not matching the parameter
test('There is not an I in team', ()=> {
    expect('team').not.toMatch(/I/i);
});

// Arrays
// contains
test('Admin should be in usernames', ()=> {
    const usernames = [ "Jack", "Jill", "Joe", "admin" ];
    expect(usernames).toContain("admin");
});
// does not contain
test('Admin should not be in usernames', ()=> {
    const usernames = [ "Jack", "Jill", "Joe"];
    expect(usernames).not.toContain("admin");
});


// async data
test("User fetched name should be Leanne Graham", ()=> {
    // assertion is used in promises
    expect.assertions(1);
    // need to have return when using promises
    return functions.fetchUser()
        .then(data => {
            expect(data.name).toEqual("Leanne Graham");
        });
});

// async await
test("User fetched name should be Leanne Graham", async ()=> {
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.name).toEqual("Leanne Graham");
});
