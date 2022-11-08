// concise method : 간결한

// 기존
// const id = "ssafy",
//     name = "안효인",
//     age = 30;

// const user = {
//     id: id,
//     name: name,
//     age: age,
//     info: function() {
//         console.log("user info : " + this.id + " " + this.name + " " + this.age);
//     },
// };
// user.info();

// function a() { }
// const b = function () { }
// const c = new Function() { }

// ES6
const id = "ssafy",
    name = "안효인",
    age = 30;

const user = {
    id,
    name,
    age,
    info() {
        console.log("user info : " + this.id + " " + this.name + " " + this.age);
    },
};
console.log(user.info());