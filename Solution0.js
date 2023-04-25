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

module.exports = syncReadFile;