// spread syntax(전개 구문)
const user1 = { id: "ssafy1" };
const user2 = { id: "ssafy2" };

const arr = [user1, user2];

// array copy
const copyArr = [...arr]; // arr을 전개해서 -> 값은 주솟값은 가져온다!!!!
console.log(arr, copyArr);

// 주의 : spread operator의 경우 값 복사가 아닌 주소를 가져오기 때문에 값을 바꿀경우 모두 변경.
user1.id = "ssafy8"; // user2.id 도 주솟값이 같으므로
console.log(arr, copyArr);

// 객체 추가
const addArr = [...arr, { id: "ssafy3" }];
console.log(addArr);

// 객체 복사
const copyUser = { ...user1 }; // property 복사 -> copyUser = user1 이 주소값 복사
console.log(copyUser);
copyUser.id = "ssafy100";
console.log(copyUser);
console.log(user1);

// 배열 복사
const team1 = ["서울", "광주"];
const team2 = ["대전", "부산", "마이구미"];
const team = [...team1, ...team2];
console.log(team);

// object merge (병합)
const u1 = { id1: "ssafy1" };
const u2 = { id2: "ssafy2" };
const u = { ...u1, ...u2 };
console.log(u);

// 주의점 : key 가 같은 object를 병합할 경우 마지막 obj의 값이 설정
const user = { ...user1, ...user2 };
console.log(user);

