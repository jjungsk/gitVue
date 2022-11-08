
function print1(msg) {
    console.log(msg);
}
print1("hello ssafy");
print1(); // undefined

// default parameter
function print2(msg = "default 값") {
    console.log(msg);
}
print2("hello ssafy");
print2(); // undefined