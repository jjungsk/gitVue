
// var 는 function scope : 선언 및 할당
var x = 10;
console.log(x); // 주석~~~~ 색 변경~~~~~~

var x = 20;
console.log(x);

// let 은 block-scoped
let y = 10;
console.log(y);
// let y = 20; // Cannot redeclare block-scoped variable 'y'.
// console.log(y);

// const : 상수
const z = 10;
// z = 20; // TypeError: Assignment to constant variable.

const ssafy = {
    area: "서울",
    class: 10,
};
console.log(ssafy.area);
ssafy.area = "부산"
console.log(ssafy.area);

const num = [];
console.log(num);
num.push(10);
console.log(num);