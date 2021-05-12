export function toLastNames(people){
  return people.map(person => `${person.firstName} ${person.lastName}`)
}

export function addValues(arr){
  return arr.reduce((a, b) => a + b, 0);
};

export function addPurchases(arr){
  // let data = arr.map(({purchasePrice}) => +purchasePrice);
  // return data.reduce((a, b) => a + b, 0)
  return arr.reduce((a, b) => a += b.purchasePrice, 0);
};

export function countNumberOfElements(arr){
  return arr.reduce((a) => a + 1, 0);
};

export function returnNames (arr){
  return arr.reduce((a, b) => [...a, b.name], []);
};