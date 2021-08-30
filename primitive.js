/*
Data Types 7
primitive data type
1. number
2. string
3. boolean
4. undefined
5. null

7. symbol

non primitive data type
6. object
*/
let a = 'hello';
a = 'gello';
b = a;
console.log(a, b);

const x = { job:'wev developer'}
const y = x;
console.log(x, y);
// x.job = 'front end developer';
y.job = 'front end developer';
console.log(x, y);