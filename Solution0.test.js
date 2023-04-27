

//Unit Testing
//const isValid = require('./Solution0.js');
//const solution = require('./Solution0');
var { processSyncFile } = require('./Solution0.js')
var { syncReadFile } = require('./Solution0.js')
const myMock = jest.fn();
const fs = require('fs');
console.log(myMock());
const nameArray = ['Morten Gamst Penderson Henrik VII', 'Antonio Di Natale', 'Rene Adler', 'Kakhaber Kaladze']
var processedArray = processSyncFile(nameArray)

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
        expect(processedArray[0]).toBe('Rene Adler')

    })

})

describe("Name is not Valid within parameters", () =>{
    test('Name is too long', () =>{
        expect(syncReadFile.isValid(nameArray[0])).not.toMatch(true)

    })

})


