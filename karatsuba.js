// xy = (10^n)ac + (10^(n/2))(ad + bc) + bd
var x = 5678;
var y = 1234;
x = x.toString();
y = y.toString();
var a = x.substring(0, 2);
var b = x.substring(2, 4);
var c = y.substring(0, 2);
var d = y.substring(2, 4);
// Step 1: Compute ac
var step1 = a * c; //672
// Step 2: Compute bd
var step2 = b * d; //2652
// Step 3: Compute ad + bc
var step3 = (a*d) + (b*c); //2840
// Product of values
var result1 = parseInt(step1.toString() + '0000');
var result2 = parseInt(step3.toString() + '00');
var total = result1 + step2 + result2;
console.log(total);
return total;