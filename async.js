// Handling promises using asynch await

function myPromise(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("your promise has been resolved");
        // reject("your promise could not be resolved");
    },2000);
})
}

// myPromise().then((res)=> console.log("res",res));

// async function handlePromise(){
//     console.log("Handle promise");
//     try{
//         const res=await myPromise();
//         console.log("RES : ", res);
//     }
//     catch(error){
//         console.log("Error : ", error);
//     }
// }

// OR


async function handlePromise(){
    console.log("Handle promise");
        const res=await myPromise().catch((error)=>console.log("Error : ", error))
      if(res)   console.log("RES : ", res);
    }

handlePromise();

