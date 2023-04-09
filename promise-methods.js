// console.log("promise methods");

// 1. Promise.all()
// 2. Promse.any()

let promise1=new Promise((resolve,reject)=>{
setTimeout(()=>{
    // resolve("promise1");
    reject("promise1");
},2000);
})

let promise2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // resolve("Promise2");
        reject("rejected promise2");
    },1000);
    })

    let promise3=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Promise3");
            // reject("Promise3");
        },3000);
        })

        // here the promises are handled parallely or asynchronously

// promise1.then(res1=> console.log("res1",res1));

// promise2.then(res2=>console.log("res2",res2));
// promise3.then(res3=> console.log("res3",res3));

console.log(" current time ", new Date());

//if we want "all" the promises to resolve and then do something , then use Promise.all() method
// if any single of them fails , throw/ show an error

// Promise.all([promise1,promise2,promise3]).then((res)=>{
//     console.log("final res",res, new Date());
// }).catch((e)=>{
//     console.log("error message",e, new Date());
// })

// if we want "any one" of the promises to resolve and then do something , then use Promise.any() method

// Promise.any([promise1,promise2,promise3]).then((res)=>{
//     console.log("RESPONSE ",res, new Date());
// }).catch((e)=>{
//     console.log("error message",e, new Date());
// })

// Promise.allSettled([promise1,promise2,promise3]).then((res)=>{
//     console.log("RESPONSE ",res, new Date());
// }).catch((e)=>{
//     console.log("error message",e, new Date());

//     var myHTML = res.map((item) => {
//         return `
//               <div class='quote-box'>
//                   <h2>${item.status}</h2>
//                   <p>${
//                     item.status == "fulfilled"
//                       ? item.value
//                       : "<span style='color:red'> Reason:" + item.reason + "</span>"
//                   }</p>
//               </div>
//             `;
//         //   if(item.status=='fulfilled'){
//         // return item.value
//         // } else return item.reason
    
//         // res.forEach((item) => {
//         //     if(item.status=='rejected'){
//         //         alert(`Reason:${item.reason}`)
//         //     }
//       });
    
//       document.getElementById("container").innerHTML = myHTML.join("");
// })


Promise.race([promise1,promise2,promise3]).then((res)=>{
    console.log("RESPONSE ",res, new Date());
}).catch((e)=>{
    console.log("error message",e, new Date());
})