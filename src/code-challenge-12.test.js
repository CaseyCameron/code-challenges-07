import { toLastNames, addValues, addPurchases, countNumberOfElements, returnNames } from './code-challenge-12.js';
const starWarsData = [{
  name: 'Luke Skywalker',
  height: '172',
  mass: '77',
  hair_color: 'blond',
  skin_color: 'fair',
  eye_color: 'blue',
  birth_year: '19BBY',
  gender: 'male',
},
{
  name: 'C-3PO',
  height: '167',
  mass: '75',
  hair_color: 'n/a',
  skin_color: 'gold',
  eye_color: 'yellow',
  birth_year: '112BBY',
  gender: 'n/a' },
{
  name: 'R2-D2',
  height: '96',
  mass: '32',
  hair_color: 'n/a',
  skin_color: 'white, blue',
  eye_color: 'red',
  birth_year: '33BBY',
  gender: 'n/a'
},
{
  name: 'Darth Vader',
  height: '202',
  mass: '136',
  hair_color: 'none',
  skin_color: 'white',
  eye_color: 'yellow',
  birth_year: '41.9BBY',
  gender: 'male'
},
{
  name: 'Leia Organa',
  height: '150',
  mass: '49',
  hair_color: 'brown',
  skin_color: 'light',
  eye_color: 'brown',
  birth_year: '19BBY',
  gender: 'female'
}];

test('Returns an array of names combined', () => {
  expect(toLastNames([{ firstName:'Jane', lastName:'Doe' }, { firstName:'James', lastName:'Bond' }])).toStrictEqual(['Jane Doe', 'James Bond']);
});

test('Returns an array that displays the sum of an array of numbers', () => {
  expect(addValues([1, 2, 3, 4, 5])).toStrictEqual(15);
});

test('Returns an array of the total price', () => {
  expect(addPurchases([{ item:'switch', purchasePrice:399 }, { item:'tv', purchasePrice:500 }])).toStrictEqual(899);
});

test('Returns the number of elements in the array', () => {
  expect(countNumberOfElements([1, 3, 5, 6])).toStrictEqual(4);
});

test('Returns an array of names', () => {
  expect(returnNames(starWarsData)).toStrictEqual(['Luke Skywalker', 'C-3PO', 'R2-D2', 'Darth Vader', 'Leia Organa']);
});