const numbers = process.argv.slice(2);
var x, y;
if (numbers.length == 2) {
  x = parseInt(numbers[0]);
  y = parseInt(numbers[1]);
} else {
  console.log('Error, please try using x and y numbers');
  return -1;
}

function karatsuba(num1, num2) {
  if (num1 < 10 || num2 < 10) return num1 * num2;
  const len = Math.min(num1.toString().length, num2.toString().length);
  const m2 = Math.ceil(len / 2);

  const [a, b] = splitNumber(num1, m2);
  const [c, d] = splitNumber(num2, m2);

  const ac = karatsuba(a, c);
  const bd = karatsuba(b, d);
  const abPlusCd = karatsuba(a + b, c + d);
  const result = abPlusCd - ac - bd;

  return (ac * (10 ** (m2 * 2))) + (result * (10 ** m2)) + bd;
}

function splitNumber(number, index) {
  if (number < 10 || !isFinite(number)) throw Error(`Cannot split number ${number}`);
  number = number.toString();
  const left = number.substring(0, number.length - index);
  const right = number.substring(number.length - index, number.length);

  return [parseInt(left), parseInt(right)];
}

const total = karatsuba(x, y);
console.log(`Total Karatsuba is: ${total}`);
console.log(`Total Real is: ${x * y}`);
return total;