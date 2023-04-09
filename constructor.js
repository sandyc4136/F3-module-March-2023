class Human{
    constructor(_name, _year){
       this.name=_name;
       this.age=2023-_year;
    }

    speak(){
        console.log("Hello my name is ", this.name, " I am " , this.age, "Years old");
    }
}

const std=new Human("student", 1995);
const emp=new Human("Employee", 2017);
console.log("creating multiple object");
console.log(std);
console.log(emp);
std.speak();
emp.speak();
