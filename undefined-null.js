/*
Undefined
1. variable value not assigned
2. function but did'nt write return anything
3. just wrote return but didn't return anything
4. parameter that isn't passed
5. property that doesn't exist in an object
6. accessing array element out of range
7. accessing deleted array element
8. expliciply set value undefined
9. 
*/
let first;
//console.log (first);
function second(x, y){
    const sum = x + y;
}
const result = second(3, 5);
//console.log(result);


function third(a, b){
    const sum = a + b;
   if(b < 10){
       return;
   }
    const fun = a * b;
    return sum;
}

const resultt = third(3, 5);
//console.log(resultt);

function double ( a, b){
    const result = a * 2;
   // console.log(b);
    return result;
}
double(81);


const fifth = {name:'sagor', age: 24, location: 'bandarban'}
//console.log(fifth.phone);


const sixth = [53, 56, 94,7, ];
//console.log(sixth[3]);

delete sixth[2];
//console.log(sixth[2]);


const seventh = undefined;
//console.log(seventh);


const myObj = { name:'samad', profession: null}
