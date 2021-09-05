function palindrome(str) {
  str = str.toLowerCase().replace(/[^а-яa-z]/);
  //we should specify symbols which we check, in this case latin and cyrillic//
  for (let i = 0; i < str.length; i++) {
      if (str[i] !== str[str.length - 1 - i]) {
          return false;
      }
  }
  return true;
}

test = palindrome("wwerr");
console.log(test);

let a = 11;
let b = 8;

function comparison(a, b) {
  if (a < b) {
      return a;
  }
  return b;
}
result = comparison(a, b);
console.log(result);

function compare(p, t) {
  return p < t ? p : t
};
const p = 10;
const t = 15;
const f = compare(p, t);
console.log(f);


const z = 30;
const y = 38;

function collation(z, y) {
  if (z > y) {
      return z;
  }
  return y;
}
result = collation(z, y);
console.log(result);


function collate(c, d) {
  return c > d ? c : d
};
const c = 66;
const d = 78;
const n = collate(c, d);
console.log(n);


function replaceZero(number) {
  const numStr = `${number}`;
  if (numStr.includes('0')) {
      return `${number}`.replaceAll('0', 'zero');
  }
  return number;
}

console.log([12, 53, 20, 18, 22, 100, 43, 53, 50].map(replaceZero).join(', '));

function replaceZero(number) {
  /*if we use numStr instead of `${number}`, how should we define it?
  I don't understand*/
  const numStr = " ";
  if (numStr.includes('0')) {
      return numStr.replaceAll('0', 'zero');
  }
  return number;
}

console.log([12, 53, 20, 18, 22, 100, 43, 53, 50].map(replaceZero).join(', '));