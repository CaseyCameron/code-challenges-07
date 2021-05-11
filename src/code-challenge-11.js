export function returnTen(string){
  return [...string.slice(-10)];
}

export function findMax(matrix){
  const arr = matrix.map(num => Math.max(...num));
  return Math.max(...arr);
}

export function totalSum(matrix){
  const arr = matrix.map(n => n.reduce((a, b) => a += b, 0));
  return arr.reduce((a, b) => a + b, 0);
}

export function grandTotal(stores){
  let arr = [];
  for (let i = 0; i < stores[0].length; i++){
    let hourlyTotal = 0;
    for (let j = 0; j < stores.length; j++){
      hourlyTotal += stores[j][i];
    }
    arr.push(hourlyTotal);
  }
  return arr;
}

export function salesData(hours, data){
  const result = [];
  data.forEach((item, index) => {
    result.push({ sales: `${item} cookies`, time: hours[index] });
  });
  return result;
}