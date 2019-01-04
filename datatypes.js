var age=10;
var rating=4.8;
console.log(age);
console.log(rating);
console.log(typeof age);
console.log(typeof rating);
console.log("--------------------------");

var name="prasanth";
var initial="A";
console.log(name);
console.log(initial);
console.log(typeof name);
console.log(typeof initial);
console.log("---------------------------");

var isdone=true;
console.log(isdone);
console.log(typeof isdone);

console.log("------------------------------");

var home=["t.v","fridge","washing machine","car",true,500,["arava"]];
console.log(home[2]);
console.log(home[4]);
console.log(home[5]);
console.log(home[6]);

console.log("-------------------------------");

var employee={
    name:"prasanth",
    address:"amalapuram",
    designation:"developer",
    getdetails:function () {
        console.log(this.name +" works in " + this.address+ " as a " + this.designation );
        
    }


}
employee.getdetails();
console.log(employee.name);
console.log(employee.address);
console.log(employee.designation);
