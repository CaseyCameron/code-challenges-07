export function sortByChildren(){

}

export function containsW(string){
  if (string.match(/w/)) return true;
  return false;
}

export function isNum(data){
  return /\d/.test(data);
}

export function containsWorld(string){
  return /world/i.test(string);
}

export function isCapitalized(str){
  console.log(str.match(/\b[A-Z]\b/));
};