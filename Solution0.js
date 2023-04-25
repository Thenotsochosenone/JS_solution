#!/usr/bin/env node
 
 
//Reading the input file and placing the data in an array


const fs = require('fs');
const writeStream = fs.createWriteStream('sorted-names-list.txt.');
const pathName = writeStream.path;
const {readFileSync} = require('fs');

function syncReadFile(filename) {

//Reading the file
  const contents = readFileSync(filename, 'utf-8');
//Creating Array
  const arr = contents.split(/\r?\n/);



  console.log(arr); 
  //printing each line of array seperately
arr.forEach(value => writeStream.write(`${value}\n`));
// finish the writestream
writeStream.on('finished!', () => {
   console.log(`Succesfully generated file from array ${pathName}`);
});
// Error whilst writing
writeStream.on('error while writing the file', (err) => {
    console.error(`There is an error writing the file ${pathName} => ${err}`)
});
// close the stream
writeStream.end();

  return arr
}

syncReadFile('./nameslist.txt');

//Unit Testing
const firstTest = require("./Solution0.js");


test("Array input has a specific name", () => {

    expect(firstTest).toContain('John Smith');
    expect( new Set(firstTest).toContain('John Smith'));

});
//Testing Zone

test("Array is not empty", () => {

    expect(arr).toBeNull();
  expect(arr).toBeDefined();
  expect(arr).not.toBeUndefined();
  expect(arr).not.toBeTruthy();
  expect(arr).toBeFalsy();
    

}

)


