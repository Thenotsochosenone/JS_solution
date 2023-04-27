#!/usr/bin/env node

//Reading the input file and placing the data in an array
const { error } = require('console');
const fs = require('fs');
const { readFileSync } = require('fs');

//Function to Read File and convert it into an array
function syncReadFile(filename) {

  //Reading the file 
  const contents = readFileSync(filename, 'utf-8');
  //Creating Array and checking validity of input and avoids names out of range


  function isValid(string) {
    const l = string.split(' ').length
    return l >= 1 && l <= 4;
  }
  const Namearray = contents.split(/\r?\n/).filter(isValid);
  //Array created!

  console.log("Original Unsorted List" + JSON.stringify(Namearray))
  return Namearray;
}

//Function for sorting Names by splitting the string by Comparison for correct output
function processSyncFile(Namearray) {

  const compareStrings = (a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;

    return 0;
  }

  const compare = (a, b) => {
    const splitA = a.split(" ");
    const splitB = b.split(" ");
    const lastA = splitA[splitA.length - 1];
    const lastB = splitB[splitB.length - 1];

    return lastA === lastB ?
      compareStrings(splitA[0], splitB[0]) :
      compareStrings(lastA, lastB);


  }
  console.log(Namearray.sort(compare));
  return Namearray.sort(compare);
}

//Writestream function
function writeSyncFile(Namearray) {
  const writeStream = fs.createWriteStream('sorted-names-list');
  const pathName = writeStream.path;

  //printing each line of array seperately
  Namearray.forEach(value => writeStream.write(`${value}\n`));
  // finish the writestream
  writeStream.on('finished!', () => {
    console.log(`Succesfully generated file from array ${pathName}`);
  });
  // Error whilst writing stream
  writeStream.on('error while writing the file', (err) => {
    console.error(`There is an error writing the file ${pathName} => ${err}`)
  });
  // close the stream
  writeStream.end();

  return Namearray;
}

module.exports = writeSyncFile(processSyncFile(syncReadFile('./unsorted-names-list.txt')));

