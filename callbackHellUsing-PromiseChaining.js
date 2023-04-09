


function takeOrder(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Take order .....");
        },1000)
    })
}

function giveFood(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Give the food .....");
        },1000)
    })
}


function takePayment(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Take Payment .....");
        },1000)
    })
}

function thankYou(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("thank you .....");
        },1000)
    })
}

takeOrder().then((res1)=>{
    console.log("res1",res1);
    return giveFood();
}).then((res2)=>{
    console.log("res2",res2);
    return takePayment()
}).then((res3)=>{
    console.log("res3",res3);
    return thankYou()
}).then((res4)=>{
    console.log("res4",res4);
})