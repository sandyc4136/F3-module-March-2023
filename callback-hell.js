// function takeOrder(){
//     setTimeout(()=>{
//         console.log("Take order .....");
//         setTimeout(()=> {
//             console.log("Give the food .....");
//             setTimeout(()=> {
//                 console.log("Take Payment.....");
//                 setTimeout(()=> {
//                     console.log("thank you ....");
//                 },1000);
//             },1000);
//         },1000);
//     },1000)
// }

// takeOrder();

function addNewdata(getAge){
    var student={ name: "Sandip"};
    getAge(student,getPercentage);
}

function getAge(data,getPercentage){
    var student={ ...data,  age : 27};
    getPercentage(student);
}

function getPercentage(data){
    var student={ ...data,grade: 'A+'};
    printData(student);
}
function printData(data){
    console.log(data);
}

addNewdata(getAge);

var arr1=[1,2,3,4,5];
function appendArr(rr1){
    var arr2=arr1.concat([6,7,8,9]);
    console.log(typeof arr2);
    console.log(typeof arr1);
}
appendArr();