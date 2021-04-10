class person{
    constructor (firstname,lastname,dob){
    this.firstname=firstname;
    this.lastname=lastname;
    this.dob=new Date(dob);
}
getbirthyear(){
    return this.dob.getFullYear();
}
getfullname(){
    return `${this.firstname} ${this.lastname}`;
}
}

const person1 = new person('Aditya','Saraf',13-06-1999);

console.log(person1.getfullname())
