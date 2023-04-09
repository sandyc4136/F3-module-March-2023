var c=0;
var myIntervalID= setInterval(() => {
    console.log(c++);
},2000);

document.getElementById('btn').addEventListener('click',()=>{
    console.log(("interval stopped"));
    clearInterval(myIntervalID);
})
