export function getHouses(obj){
  return Object.values(obj).map(key => key.house);
}

export function updateNumbers(obj){
  const arr = Object.entries(obj);
  return arr.map(item => item[0] + ': ' + item[1]);
}

export function totalCharacters(arr){
  const temp = Object.values(arr).map(key => key);
  return temp;
}

export function hasChildrenEntries(obj){
  if (Object.values(obj).map(key => key.children) !== null) 
    return true;
  return false;
}

export function sortByChildren(obj){
  return Object.entries(obj).sort((a, b) => a.length - b.length)
}