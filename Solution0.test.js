

//Unit Testing


const myMock = jest.fn();
const fs = require('fs');
console.log(myMock());
const Namearray = ['Morten Gamst Penderson', 'Antonio Di Natale', 'Rene Alder', 'Kakhaber Kaladze']


describe("syncReadFile", () => {
    test('Should result in "List Present"', () => {
        expect(Namearray[1]).toMatch(/[^A-Za-z]/g);
    });
});

test('Null Test"', () => {
    expect(Namearray[1001]).toBeNull;
});

test("Namearray input has a specific name", () => {

    expect(Namearray).toContain('Antonio Di Natale');

});

describe("writeSyncFile", () => {
    test('Output File Exists', () => {
        expect(fs.existsSync('./sorted-names-list')).not.toContain(false)
    })

});
