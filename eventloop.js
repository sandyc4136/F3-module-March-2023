const btn1=document.getElementById('btn1');
const btn2=document.getElementById('btn2');

function onClickFn(){
    console.log("button 1 clicked");
}

function onClickFn2(){
    console.log("button 2 clicked");
}

btn2.addEventListener('click',onClickFn2);