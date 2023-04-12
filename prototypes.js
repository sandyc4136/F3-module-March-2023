const obj3= {
    profession :"Engineer"
};

const obj2= {
    age : "28",
    __proto__ : obj3
};

const obj1= {
    name: "Sandip",
    __proto__ : obj2
}

console.log("OBJECT 1 ", obj1);
