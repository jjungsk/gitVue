// 2. Scope 범위
// var 의 유효범위 : 함수레벨 스코프 (function-level scope)
var x = 100;
function varPoint1() {
    var x = 200;
    console.log(x);
    if (true) {
        var x = 300;
        console.log(x);
        x = 400;
    }
    console.log(x);
}
varPoint1();
console.log(x);

console.log("-------------------------");
// let 의 유효범위 : 블록레벨 스코프 (block-level scope)
let y = 100;
function varPoint2() {
    let y = 200;
    console.log(y);
    if (true) {
        let y = 300;
        console.log(y);
        y = 400;
    }
    console.log(y);
}
varPoint2();
console.log(y);

console.log("-------------------------");
// for문
var i = 10;
for (var i = 0; i < 5; i++){
    console.log(i);
}
console.log("i = " + i);

console.log("-------------------------");
// for문 해결 : 즉, for문 안에서는 let 써라
var i = 10;
for (let i = 0; i < 5; i++){
    console.log(i);
}
console.log("i = " + i);