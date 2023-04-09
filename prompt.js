var val=prompt("enter a color");
if(val.toLowerCase()=="red"){
    console.log(val);
}
else if(val==null || val==''){
    console.log("invalid input");
}

else{
    console.log("not in danger");
}