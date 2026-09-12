#!/usr/bin/env node

const fs = require('fs');
const { readFileSync } = require('fs');

/**
 * Reads the input file and returns an array of valid names.
 * Valid names must have between 2 and 4 parts (1–3 given names + last name).
 */
function syncReadFile(filename) {
  const contents = readFileSync(filename, 'utf-8');

  const isValid = (line) => {
    const parts = line.trim().split(/\s+/).filter(Boolean);
    return parts.length >= 2 && parts.length <= 4;
  };

  return contents
    .split(/\r?\n/)
    .map(line => line.trim())
    .filter(isValid);
}

/**
 * Sorts names by last name, then by given names.
 */
function processSyncFile(nameArray) {
  const compare = (a, b) => {
    const partsA = a.split(/\s+/);
    const partsB = b.split(/\s+/);

    const lastA = partsA[partsA.length - 1];
    const lastB = partsB[partsB.length - 1];

    // Primary sort: last name
    const lastNameComparison = lastA.localeCompare(lastB);
    if (lastNameComparison !== 0) {
      return lastNameComparison;
    }

    // Secondary sort: all given names
    const givenA = partsA.slice(0, -1).join(' ');
    const givenB = partsB.slice(0, -1).join(' ');
    return givenA.localeCompare(givenB);
  };

  // Sort in-place and return the sorted array
  return nameArray.sort(compare);
}

/**
 * Writes the sorted names to sorted-names-list.txt
 */
function writeSyncFile(nameArray) {
  const outputPath = 'sorted-names-list.txt';
  const writeStream = fs.createWriteStream(outputPath);

  nameArray.forEach(name => {
    writeStream.write(`${name}\n`);
  });

  writeStream.on('finish', () => {
    console.log(`Successfully wrote sorted names to ${outputPath}`);
  });

  writeStream.on('error', (err) => {
    console.error(`Error writing file ${outputPath}:`, err);
  });

  writeStream.end();
  return nameArray;
}

// Main execution
const inputFile = './unsorted-names-list.txt';
const names = syncReadFile(inputFile);
const sortedNames = processSyncFile(names);

console.log('Sorted names:');
sortedNames.forEach(name => console.log(name));

writeSyncFile(sortedNames);

// Export for testing
module.exports = { processSyncFile, syncReadFile, writeSyncFile };