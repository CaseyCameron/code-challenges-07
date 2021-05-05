export function getHouses(obj){
  return Object.values(obj).map(key => key.house);
}

export function updateNumbers(obj){
  const arr = Object.entries(obj);
  return arr.map(item => item[0] + ': ' + item[1]);
}

export function totalCharacters(arr) {
  let character = 0;
  arr.forEach(n => {
    if (n.spouse !== null)
      character++;
    if (n.children.length > 0)
       character += n.children.length;
    if (n.name !== '')
       character++;
    });
  return character;
}

export function hasChildrenEntries(obj){
  if (Object.values(obj).map(key => key.children) !== null) 
    return true;
  return false;
}

export function sortByChildren(arr){
    arr.sort((a, b) => {
      if (a.children.length < b.children.length) return -1
        return 1
    }) 
    return arr;
}