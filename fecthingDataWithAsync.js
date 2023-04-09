console.log("Fetching data with Async JS");

// fetch("https://dummyjson.com/quotes")
// .then(res=>
//  res.json())
// .then((data)=>{
//     console.log("Data: ", data);
// });

async function fetchData(){
    document.getElementById("loading").style.display="flex";
    // console.log(("getting data"));
    const response= await fetch("https://dummyjson.com/quotes");
    const data = await response.json();
    console.log("Data : " , data);
    if(data){
        document.getElementById("loading").style.display="none"; 
        const myHTML=data.quotes.map((item)=> {
            return `
            <div class="quote-box">
                <h2>${item.id}. ${item.author}</h2>
                <p>${item.quote}</p>
            </div>
            `;
        })
        document.getElementById("container").innerHTML=myHTML.join("");
    }
}

fetchData();