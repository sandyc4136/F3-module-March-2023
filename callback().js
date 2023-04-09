// restaurant

// take order() -> give the food() -> take payment () -> thankYou()

// callback function

function takeOrder(){
    console.log("Take order .....");
    giveFood();
}

function giveFood(){
    console.log("Give the food .....");
    takePayment();
}

function takePayment(){
    console.log("Take Payment.....");
    thankYou();
}

function thankYou(){
    console.log("thank you ....");
}

takeOrder();


// callBack Hell


// function takeOrder(giveFood){
//     console.log("Take order .....");
//     giveFood(takePayment);
// }

// function giveFood(takePayment){
//     console.log("Give the food .....");
//     takePayment(thankYou);
// }

// function takePayment(thankYou){
//     console.log("Take Payment.....");
//     thankYou();
// }

// function thankYou(){
//     console.log("thank you ....");
// }

// takeOrder(giveFood);