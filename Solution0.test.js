

//Unit Testing

const { describe } = require("yargs");
const syncReadFile = require("./Solution0.js");
const processSyncFile = require("./Solution0.js");
const writeSyncFile = ("./Solution0.js");
const myMock = jest.fn();
const fs = require('fs');
console.log(myMock());
const arr = ['Morten Gamst Penderson', 'Antonio Di Natale', 'Rene Alder', 'Kakhaber Kaladze']
const file_found = { "./sorted-names-list": "Sorted List Output Present" }
const file_not_found = {}
const mockFilePresent = {'Succesfully generated file from array' : 'Files are Present'}
const mockFileNotPresent = {'There is an error writing the file' : 'Files Not Present'}


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

describe("writeSyncFile" ,() =>{
test('No Output Files Found Test', () => {
    fs.writeFileSync(file_not_found);
       expect(mockFileNotPresent).toContain([['There is an error writing the file']]);
})

test('Output File Found Test', () => {
    fs.writeFileSync(file_found);
    expect(mockFilePresent).toContain([['Succesfully generated file from array']]);
})

})

