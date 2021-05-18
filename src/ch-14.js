export function replaceZeros(str) {
  return str.replace(/[0]/ig, 'zero');
}

export function validatePin(str) {
  return /^[0-9]{4}$/.test(str);
}

export function validateWord(str) {
  return /^[A-Za-z]{5,10}$/.test(str);
}

export function hasNumber(str) {
  return (/[A-Za-z]+(\d+)$/).test(str);
}

export function validateEmail(str) {
  return /^[a-zA-Z0-9.]+@[a-zA-Z0-9-]+(?:\.com$|.net$|.org$)/.test(str);
}

export function validatePhoneNumber(str) {
  return /^[(]?[0-9]{3}[)]?[-\s]?[0-9]{3}[\-\s]?[0-9]{4,6}$/im.test(str);
}