export function howMuchPencil(string){
  let arr = [];
  for (let i = string.length; i >= 0; i--){
    arr.push(string.slice(i))
  } 
  return arr.reverse();
} 

export function wordsToCharList(string){
  return string.split('');
}

export function listFoods(recipe){
  const arr = [];
  Object.values(recipe.ingredients).map(item => arr.push(item.split(' ')));
  Object.values(arr).map(item => item.splice(0,2));
  return Object.values(arr).map(item => item.join(' '));
}

export function stepActions(recipe){
  return Object.values(recipe.steps).map(item => item.split(' ')[0]);
}

export function removeLastCharacters(string, num){
  if (num >=1 ) return string.slice(0, -num);
  return string;
}

export function totalSumCSV(string){
  const arr = string.split(',').map(Number);
  return arr.reduce((a, b) => a + b);
}

export function removeVowels(string){
  return string.replace(/[aeiou]/g, ''); 
}

export function extractVowels(string){
  const arr = [];
  arr.push(string.match(/[^aeiou]/ig).join(''));
  arr.push(string.match(/[aeiou]/ig).sort().join(''));
  return arr;
}