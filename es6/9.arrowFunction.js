// arrow function (화살표 함수)
// function name(parameter) { };

// 위의 형식을 축약 -> 함수의 이름이 없는 익명 이므로 반드시 변수에 담아서 사용해야 한다.
// const name = (param) => { };

// 매개변수 갯수에 따른 설정 방법
// () => { }; // 매개변수가 없을 경우
// param => { }; // 매개변수가 "한개" 있을 경우 -> (param)의 소괄호 생략 가능
// (param1, param2) => { }; // 매개변수가 "두개 이상" 있을 경우 -> (param1, param2, ...) 소괄호 생략 불가능

// function body 설정
// x => { return x + 10 }; // body의 내용이 한줄일 경우.
// x => x + 10; // body의 내용이 한줄일 경우 {} 생략 가능하고 자동으로 결과값이 return 된다.

// () => { return { id: "ssafy", pass: 1234 } };

// () => ({ id: "ssafy" }); // 객체 object return 시 () 사용.

// body 가 여러줄일 경우 {}, return 생략 불가!!!
// x => {
//     const y = x + 100;
//     return y;
// }

function func1() {
    return 100;
}
let result = func1();
console.log(result);

const func2 = () => 1000
result = func2();
console.log(result);

const func3 = param => param + 100;
result = func3(100);
console.log(result);

const func5 = (x, y) => x + y;
result = func5(5, 9);
console.log(result);

// 객체를 리턴 할때 소괄호 꼭 필수 필요!!!!!!!
const func6 = () => ({
    id: "ssafy",
})
result = func6();
console.log(result);

const func7 = () => {
    return {
        id: "ssafy",
        age: 24,
    }
}
result = func7();
console.log(result);

const func10 = (x) => {
    const y = x * 3;
    return y;
}
result = func10(10);
console.log(result);

// arrow function에서 this 절대 쓰지 않기!!!!
const user = {
    id: "ssafy12312312",
    age: 20,
    // info() {
    //     console.log(this.id, this);
    // }
    info: () => console.log(this.id, this)
}
user.info();