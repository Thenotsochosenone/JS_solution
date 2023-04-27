

//Unit Testing
const { describe } = require("yargs");
const syncReadFile = require("./Solution0.js");
const processSyncFile = require("./Solution0.js");
const writeSyncFile = ("./Solution0.js");
const myMock = jest.fn();
console.log(myMock());
const arr = ['Morten Gamst Penderson', 'Antonio Di Natale', 'Rene Alder', 'Kakhaber Kaladze']
const file_found = { "./sorted-names-list": "Sorted List Output Present" }
const file_not_found = {}

describe("syncReadFile", () => {
    test('1 should result in "List Present"', () => {
        expect(arr[1]).toMatch(/[^A-Za-z]/g);
    });
});

test('Null Test"', () => {
    expect(arr[1001]).toBeNull;
});

test("Array input has a specific name", () => {

    expect(arr).toContain('Antonio Di Natale');

});

describe("processSyncFile", () => {
    test('Sorted List after comparison', () => {
        expect(arr[1]).toMatch('Adonis Julius Archer');
    });
});

beforeEach(() => { jest.resetModules(); jest.resetAllMocks(); })

test('No Output Files Found Test', () => {
    require("fs").writeFileSync(file_found);
    const spy = jest.spyOn(console, "log");
    require('./Solution0.js'); expect(spy.mock.calls).toEqual([['File not found']]);
})

test('Output File Found Test', () => {
    require("fs").writeFileSync(file_not_found);
    const spy = jest.spyOn(console, "log"); require('./Solution0.js');
    expect(spy.mock.calls).toEqual([['File Found']]);
})



