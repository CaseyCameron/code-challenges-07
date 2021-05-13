import { 
  sortByChildren, 
  containsW, 
  isNum, 
  containsWorld, 
  isCapitalized, 
  citiesAtoJ, 
  matchMonth
 } from './ch-13.js';

let characters = [
  {
    name: 'Eddard',
    spouse: 'Catelyn',
    children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
    house: 'Stark'
  },
  {
    name: 'Jon A.',
    spouse: 'Lysa',
    children: ['Robin'],
    house: 'Arryn'
  },
  {
    name: 'Cersei',
    spouse: 'Robert',
    children: ['Joffrey', 'Myrcella', 'Tommen'],
    house: 'Lannister'
  },
  {
    name: 'Daenarys',
    spouse: 'Khal Drogo',
    children: ['Drogon', 'Rhaegal', 'Viserion'],
    house: 'Targaryen'
  },
  {
    name: 'Mace',
    spouse: 'Alerie',
    children: ['Margaery', 'Loras'],
    house: 'Tyrell'
  },
  {
    name: 'Euron',
    spouse: null,
    children: [],
    house: 'Greyjoy'
  },
  {
    name: 'Jon S.',
    spouse: null,
    children: [],
    house: 'Snow'
  }
];

describe('Testing challenge 1', () => {
  test('It should sort the characters by number of children', () => {
    const output = sortByChildren(characters); //act
    expect(output).toEqual([ {name: 'Euron', spouse: null, children: [], house: 'Greyjoy'}, { name: 'Jon S.', spouse: null, children: [],house: 'Snow'}, {name: 'Jon A.', spouse: 'Lysa', children: ['Robin'], house: 'Arryn'}, {name: 'Mace', spouse: 'Alerie', children: ['Margaery', 'Loras'], house: 'Tyrell'}, { name: 'Cersei',spouse: 'Robert', children: ['Joffrey', 'Myrcella', 'Tommen'], house: 'Lannister'}, {name: 'Daenarys', spouse: 'Khal Drogo', children: ['Drogon', 'Rhaegal', 'Viserion'], house: 'Targaryen'}, {name: 'Eddard', spouse: 'Catelyn', children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'], house: 'Stark'}]); //assert
  });
});

describe('Testing challenge 2', () => {
  test('It should return true if it has a W', () => {
    expect(containsW('hello world')).toStrictEqual(true);
    expect(containsW('Hello World')).toStrictEqual(false);
    expect(containsW('hello everyone')).toStrictEqual(false);
  });
});

describe('Testing challenge 3', () => {
  test('It should return true if it has a number', () => {
    expect(isNum(1234567890)).toStrictEqual(true);
    expect(isNum('12345')).toStrictEqual(true);
    expect(isNum('h3llo w0rld')).toStrictEqual(true);
    expect(isNum('hello world')).toStrictEqual(false);
    expect(isNum('')).toStrictEqual(false);
  });
});

describe('Testing challenge 4', () => {
  test('It should return true if it has world in it', () => {
    expect(containsWorld('hello world')).toStrictEqual(true);
    expect(containsWorld('Hello World')).toStrictEqual(true);
    expect(containsWorld('hello everyone')).toStrictEqual(false);
  });
});

describe('Testing challenge 5', () => {
  test('It should return words if they contain caps', () => {
    expect(isCapitalized('We only want to Return the Words that begin With a capital Letter')).toStrictEqual(['We', 'Return', 'Words', 'With', 'Letter']);
    expect(isCapitalized('Given by our hand in the meadow that is called Runnymede, between Windsor and Staines, on the fifteenth day of June in the seventeenth year of our reign (i.e. 1215: the new regnal year began on 28 May).')).toStrictEqual(['Given', 'Runnymede', 'Windsor', 'Staines', 'June', 'May']);
    expect(isCapitalized('these words are all failures')).toStrictEqual([]);
  });
});

describe('Testing challenge 6', () => {
  test('It should return cities starting with letters a to j', () => {
    expect(citiesAtoJ(['Cleveland', 'San Diego', 'Birmingham', 'Seattle', 'Miami', 'New York City', 'Omaha', 'Portland', 'Austin', 'Boston', 'Newport Beach', 'Hoboken'])).toStrictEqual(['Cleveland', 'Birmingham', 'Austin', 'Boston', 'Hoboken']);
    expect(citiesAtoJ(['Albuquerque', 'Chicago', 'Philadelphia', 'Newark', 'Sacramento', 'Eugene'])).toStrictEqual(['Albuquerque', 'Chicago', 'Eugene']);
    expect(citiesAtoJ([])).toStrictEqual([]);
  });
});

describe('(Stretch) challenge 7', () => {
  test('It should return true if Oct, oct, or October', () => {
    expect(matchMonth('Oct')).toStrictEqual(true);
    expect(matchMonth('oct')).toStrictEqual(true);
    expect(matchMonth('October')).toStrictEqual(true);
    expect(matchMonth('october')).toStrictEqual(true);
    expect(matchMonth('November')).toStrictEqual(false);
    expect(matchMonth('nov')).toStrictEqual(false);
    expect(matchMonth('123')).toStrictEqual(false);
    expect(matchMonth('octob')).toStrictEqual(false);
  });
});