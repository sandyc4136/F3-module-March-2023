console.log("Handling promises using async js");

let promise1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("promise1");
        // reject("Rejected promise1");
    },2000);
    })
    
    let promise2=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Promise2");
            // reject("Rejected  promise2");
        },1000);
        })
    
        let promise3=new Promise((resolve,reject)=>{
            setTimeout(()=>{
                // resolve("Promise3");
                reject("Rejected  Promise3");
            },3000);
            })

// async  function handlePromiseMethod(){
//     const res= await Promise.all([promise1,promise2,promise3]).catch((error)=>{console.log("Error", error); });
//     if(res)
//     console.log("Res", res);
// }

// or

async  function handlePromiseMethod(){
    try{
        const res= await Promise.all([promise1,promise2,promise3]);
        console.log("Res", res);
    }
    catch(error){
        console.log("Error", error); }
}

handlePromiseMethod();