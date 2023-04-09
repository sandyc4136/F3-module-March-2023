window.promises = [promise1, promise2, promise3, promise4, promise5];

 const promise1= new Promise((resolve) => setTimeout(() => resolve('Promise 1 resolved'), Math.random() * 5000 + 1000));
  const promise2= new Promise((resolve) => setTimeout(() => resolve('Promise 2 resolved'), Math.random() * 5000 + 1000));
  const promise3= new Promise((resolve) => setTimeout(() => resolve('Promise 3 resolved'), Math.random() * 5000 + 1000));
  const promise4= new Promise((resolve) => setTimeout(() => resolve('Promise 4 resolved'), Math.random() * 5000 + 1000));
  const promise5= new Promise((resolve) => setTimeout(() => resolve('Promise 5 resolved'), Math.random() * 5000 + 1000));


Promise.any(promises).then((result) => {
  document.getElementById('output').innerHTML = result;
}).catch((error) => {
  console.error(error);
});
// Do not change the code above this
// add your promises to the array `promises`
