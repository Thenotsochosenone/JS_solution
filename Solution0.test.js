

//Unit Testing
const syncReadFile = require("./Solution0.js");
const myMock = jest.fn();
console.log(myMock());
const arr = ['Morten Gamst Penderson','Antonio Di Natale','Rene Alder','Kakhaber Kaladze']
const sortedarr = ['Rene Adler','Kakhaber Kaladze','Antonio Di Natale','Morten Gamst Penderson']
describe("syncReadFile", () => {
    test('1 should result in "List Present"', () => {
        expect(arr[1]).toMatch(/[^A-Za-z]/g);
        
        
      });
});

test('Null Test"', () => {
    expect(arr[1001]).toBeNull;
  });

test("Array input has a specific name", () => {

    expect(arr).toContain('Morten Gamst Penderson');

});






