


// class user{
//     constructor( myEmail , myPhone, myUsername , myPassword){
//         this.name="";
//         this.email=myEmail;
//         this.phone=myPhone;
//         this.username=myUsername;
//         this.password=myPassword;
//     }

//     get getName(){
//         return "My name is " + this.name + " aka " + this.username; 
//     }

//     getNameCapital(){
//         return this.username.slice(0,1).toUpperCase() + this.username.slice(1);
//     }

//     set setName(myName){
//         this.name=myName;
//     }
// }

// const user1=new user( "Sandyc@gmail.com", "9876543210", "punk_sandy", "helloSandy");
// console.log(user1);
// user1.setName="sandip";
// console.log(user1.getNameCapital());
// console.log(user1.getName);


const arr=[1,2,3,4,5,5,6,78,23,-1,-3];
console.log(arr.sort((item,i)=>{
    
    return item-i;
})); 