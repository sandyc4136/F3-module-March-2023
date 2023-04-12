const obj3= {
    profession :"Engineer"
};

const obj2= {
    age : "28",
    __proto__ : obj3,
    speak : function (){
        return " Speaks Parent language"
    }
};

const obj1= {
    name: "Sandip",
    __proto__ : obj2
}

console.log("OBJECT 1 ", obj1);
console.log(obj2.speak());
