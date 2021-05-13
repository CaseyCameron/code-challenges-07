export function sortByChildren(){

}

export function containsW(string){
  if (string.match(/w/)) return true;
  return false;
}

export function isNum(data){
  return /\d/.test(data);
}