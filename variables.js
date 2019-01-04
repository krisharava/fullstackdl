var username="prasanth";
var age="25";
console.log(username);
console.log(age);

function f1() {

    console.log(username);

    var age="30";

    console.log(age);
}

function f2(){

    console.log(username);
    console.log(age);
}

console.log(age);

f1();
f2();

var age="90";
console.log(age);

f2();