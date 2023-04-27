

//Unit Testing
const isValid = require('./isValid');
const processSyncFile = require('./processSyncFile');
const myMock = jest.fn();
const fs = require('fs');
console.log(myMock());
const nameArray = ['Morten Gamst Penderson Henrik VII', 'Antonio Di Natale', 'Rene Alder', 'Kakhaber Kaladze']


describe("syncReadFile", () => {
    test('Should result in "List Present"', () => {
        expect(nameArray[1]).toMatch(/[^A-Za-z]/g);
    });
});

test('Null Test"', () => {
    expect(nameArray[1001]).toBeNull;
});

test("nameArray input has a specific name", () => {

    expect(nameArray).toContain('Antonio Di Natale');

});

describe("writeSyncFile", () => {
    test('Output File Exists', () => {
        expect(fs.existsSync('./sorted-names-list')).not.toContain(false)
    })

});

describe("processSyncFile Test", () =>{
    test('Name order is correct', () =>{
        expect(processSyncFile(nameArray[0])).toMatch('Rene Adler')

    })

})

describe("Name is not Valid within parameters", () =>{
    test('Name is too long', () =>{
        expect(isValid(nameArray[0])).not.toMatch(true)

    })

})

