export function sortByChildren(arr){
    arr.sort((a, b) => {
      if (a.children.length < b.children.length) return -1
        return 1
    }) 
    return arr;
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
  // const temp = str.replace(/[,.)]/g, '');
  // const splitArr = temp.split(' ');
  // return splitArr.filter((word) => word.match(/[A-Z]/));
  return str.match(/[A-Z]\w+/g) || []; //w+  is keep selecting til you get a non-letter char
}

export function citiesAtoJ(cities){
  let arr = [];
  for (let city of cities)
    if (city.charAt(0).match(/[A-J]/)){
      arr.push(city);
  }
  return arr;
}

export function matchMonth(str){
  // ^word$ matches exactly. | strings together
  // return /^October$|^october$|^Oct$|^oct$/.test(str);
  return /^[Oo]ct(ober)?$/.test(str);
}

export function noPunctuation(str){
  const regex = /\w+\s/g;
  return str.match(regex);
  // let arr = str.split(' ');
  // for (let item of arr){
  //   if (item.slice(-1) === /\ w+\s/g)
  //     arr.push(item);
  // }
  // return arr;
}

export function hangman(str){
  return str.replace(/[aeiou]/ig, "_")
}

export function findShells(str){
  let arr = [];
  const words = str.split(' ');
  for (let word of words){
    if (word.includes('ells')){
      if (word.includes('.')){
        let temp = word.replace(/[.]/, '');
        word = temp;
      }
      arr.push(word);
    };
  }
  return arr;
}