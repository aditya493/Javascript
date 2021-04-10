class user {
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password;
        this.x=0
    }
    register(){
        console.log(`${this.username} is registered`);
        
        this.x=this.x+1;
    }
    registereduser(){
        console.log(this.x);
    }
    
}

class member extends user{
    constructor(username,email,password,memberpackage){
        super(username,email,password);
        this.memberpackage=memberpackage;
        this.activemember=0;
        this.active=0;
    }
    activemember(){
        console.log(`${this.username} is active user` );
        this.activemember=this.activemember+1;
        console.log(`Active members = ${this.activemember}`);
        
    }
    membershipactive(){
        this.active=this.active+1;
       
        console.log("1 month free membership is provided");

    }
    renewmembership(x){
        if (x==standard){
            this.active=this.active+1;
        }
        if (x==yearly){
            this.active=this.active+12;
        }
        

    }

    }





const mike = new user('mike','mike@gmail.com',1234)
mike.register()
mike.registereduser()
const merry = new member('mery',"merry@gmail.com",1111,"monthly")

merry.membershipactive();
