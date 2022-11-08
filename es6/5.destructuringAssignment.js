// destructuring assignment (비구조화 할당)
// 배열이나 객체에 입력된 값을 개별적인 변수에 할당하는 간편한 방식

// [ 배열 ]
const areas = ["서울", "대전", "구미", "부산", "제주도"];

// 배열 - 기존의 배열 접근 방법
{
    const a1 = areas[0];
    const a2 = areas[1];
    const a3 = areas[2];
    const a4 = areas[3];
    const a5 = areas[4];
    console.log(a1 + " " + a2 + " " + a3 + " " + a4 + " " + a5);
}

// 배열 - destructuring assignment
{
    const [a1, a2, a3, a4, a5] = areas;
    console.log(a1 + " " + a2 + " " + a3 + " " + a4 + " " + a5);
}

const user = {
    id : "ssafy",
    name : "name",
    age : 30,
};

console.log("--------------------");
// [ 객체 ]
// 객체 - 기존
{
    let id = user.id;
    let name = user.name;
    let age = user.age;
    console.log(id, name, age);
}

// 객체 - destructuring assignment (비구조화 할당)
{
    let { id, name, age } = user;
    console.log(id, name, age);
}

// 객체 - 변수명을 기존의 이름과 다르게 할당
{
    let { id: user_id, name: user_name, age: user_age } = user;
    console.log(user_id, user_name, user_age);
}

// 객체를 return 하는 함수
function getUser() {
    return {
        id: "ssafy",
        name: "name",
        age: 30,
    };
}

// 기존
{
    let user = getUser();
    let id = user.id;
    let name = user.name;
    let age = user.age;
    console.log(id, name, age);
}

// destructuring assignment (비구조화 할당)
{
    let { id, name, age } = getUser();
    console.log(id, name, age);
}

// 기존 
function showUserInfo1() {
    console.log("showUserInfo1 call");
    console.log("아이디 : " + user.id);
    console.log("이름 : " + user.name);
    console.log("나이 : " + user.age);
}
showUserInfo1(user);

// destructuring assignment (비구조화 할당)
function showUserInfo2({ id, name, age}) {
    console.log("showUserInfo2 call");

    console.log("아이디 : " + id);
    console.log("이름 : " + name);
    console.log("나이 : " + age);
}
showUserInfo2(user);