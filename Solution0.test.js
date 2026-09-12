const fs = require('fs');
const { processSyncFile, syncReadFile, writeSyncFile } = require('./Solution0');

// Sample data used in several tests
const sampleNames = [
  'Janet Parsons',
  'Vaughn Lewis',
  'Adonis Julius Archer',
  'Shelby Nathan Yoder',
  'Marin Alvarez',
  'London Lindsey',
  'Beau Tristan Bentley',
  'Leo Gardner',
  'Hunter Uriah Mathew Clarke',
  'Mikayla Lopez',
  'Frankie Conner Ritter',
  'Jan Vennegoor von Hesselienk'
];

describe('syncReadFile', () => {
  test('should filter out names with fewer than 2 or more than 4 parts', () => {
    // Create a temporary test file
    const testContent = [
      'Valid Name',
      'One',
      'Too Many Parts In This Name Here',
      'Another Valid Name',
      'Three Part Name',
      '',
      '   ',
      'Four Part Name Here'
    ].join('\n');

    fs.writeFileSync('temp-test-input.txt', testContent);

    const result = syncReadFile('temp-test-input.txt');

    expect(result).toEqual([
      'Valid Name',
      'Another Valid Name',
      'Three Part Name',
      'Four Part Name Here'
    ]);

    // Cleanup
    fs.unlinkSync('temp-test-input.txt');
  });

  test('should correctly read the real unsorted-names-list.txt and filter invalid names', () => {
    const result = syncReadFile('./unsorted-names-list.txt');

    // The 5-part name should be filtered out
    expect(result).not.toContain('Morten Gamst Henrik Pederson VII');

    // Should contain valid names
    expect(result).toContain('Marin Alvarez');
    expect(result).toContain('Hunter Uriah Mathew Clarke');
    expect(result.length).toBe(12); // 13 lines in file minus the invalid one
  });
});

describe('processSyncFile', () => {
  test('should sort primarily by last name', () => {
    const input = [
      'Vaughn Lewis',
      'Marin Alvarez',
      'Janet Parsons',
      'Leo Gardner'
    ];

    const result = processSyncFile([...input]);

    expect(result).toEqual([
      'Marin Alvarez',
      'Leo Gardner',
      'Vaughn Lewis',
      'Janet Parsons'
    ]);
  });

  test('should sort by given names when last names are the same', () => {
    const input = [
      'John Smith',
      'Adam Smith',
      'Zoe Smith',
      'Bob Jones'
    ];

    const result = processSyncFile([...input]);

    expect(result).toEqual([
      'Bob Jones',
      'Adam Smith',
      'John Smith',
      'Zoe Smith'
    ]);
  });

  test('should correctly handle different numbers of given names', () => {
    const input = [
      'Beau Tristan Bentley',
      'Leo Gardner',
      'Hunter Uriah Mathew Clarke',
      'Marin Alvarez'
    ];

    const result = processSyncFile([...input]);

    expect(result).toEqual([
      'Marin Alvarez',
      'Beau Tristan Bentley',
      'Hunter Uriah Mathew Clarke',
      'Leo Gardner'
    ]);
  });

  test('should produce the expected order for the original sample data', () => {
    const result = processSyncFile([...sampleNames]);

    expect(result).toEqual([
      'Marin Alvarez',
      'Adonis Julius Archer',
      'Beau Tristan Bentley',
      'Hunter Uriah Mathew Clarke',
      'Leo Gardner',
      'Jan Vennegoor von Hesselienk',
      'Vaughn Lewis',
      'London Lindsey',
      'Mikayla Lopez',
      'Janet Parsons',
      'Frankie Conner Ritter',
      'Shelby Nathan Yoder'
    ]);
  });
});

describe('writeSyncFile', () => {
  const testOutput = 'test-sorted-names-list.txt';

  afterEach(() => {
    if (fs.existsSync(testOutput)) {
      fs.unlinkSync(testOutput);
    }
  });

  test('should create the output file with sorted names', (done) => {
    const names = ['Marin Alvarez', 'Leo Gardner', 'Janet Parsons'];

    // Temporarily override the hardcoded filename for testing
    const originalWrite = fs.createWriteStream;
    fs.createWriteStream = (path) => originalWrite(testOutput);

    writeSyncFile(names);

    // Give the stream a moment to finish
    setTimeout(() => {
      expect(fs.existsSync(testOutput)).toBe(true);

      const content = fs.readFileSync(testOutput, 'utf-8').trim().split('\n');
      expect(content).toEqual(names);

      // Restore original function
      fs.createWriteStream = originalWrite;
      done();
    }, 100);
  });
});