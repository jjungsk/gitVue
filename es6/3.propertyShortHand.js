// 3. property short hand (단축 속성명)
// 기존
// const id = "ssafy",
//     name = "안효인",
//     age = 30;

// const user = {
//     id: id,
//     name: name,
//     age: age,
// };

// console.log(user);

// property short hand 사용 : 객체를 정의할 때 객체가 가지고 있는 ket 값과 value의 값이 같은 경우에만 각각 표기하지않고 한번만 표기한다.
const id = "ssafy",
    name = "안효인",
    age = 30;

const user = {
    id,
    name,
    age,
};

console.log(user);