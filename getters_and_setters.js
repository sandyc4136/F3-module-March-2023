


class user{
    constructor(myName, myEmail , myPhone, myUsername , myPassword){
        this.name=myName;
        this.email=myEmail;
        this.phone=myPhone;
        this.username=myUsername;
        this.password=myPassword;
    }

    get getName(){
        return "My name is " + this.name + " aka " + this.username; 
    }

    getNameCapital(){
        return this.username.slice(0,1).toUpperCase() + this.username.slice(1);
    }

    set setName(myName){

    }
}

const user1=new user("sandip", "Sandyc@gmail.com", "9876543210", "punk_sandy", "helloSandy");
console.log(user1.getNameCapital());
console.log(user1.getName);
console.log(user1);