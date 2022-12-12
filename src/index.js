"use strict";
const getDiff = (a, b) => {
    let arr = [];
    for (let i = 0; i < a.length; i++) {
        if (b.indexOf(a[i]) === -1) {
            arr.push(a[i]);
        }
    }
    for (let i = 0; i < b.length; i++) {
        if (a.indexOf(b[i]) === -1) {
            arr.push(b[i]);
        }
    }
    let amount = arr.length;
    return { arr, amount };
};
console.log(getDiff('abc', 'abcd')); // { amount: 1, array: ['d'] }
console.log(getDiff('abcd', 'cdfe')); // { amount: 4, array: ['a', 'b', 'f', 'e'] }
console.log(getDiff('abc', 'wbbcc')); // { amount: 2, array: ['a', 'w'] }
console.log(getDiff('abc', 'abc')); // { amount: 0, array: [] }
