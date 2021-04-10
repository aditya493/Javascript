function person(firstname,lastname,dob){
    this.firstname =firstname;
    this.lastname =lastname;
    this.dob=new Date(dob);
    this.getBirtYear = function() {
        return this.dob.getFullYear();
    }
    this.getfullname = function() {
        return `${firstname} ${lastname}`;
    }

}
const person1 = new person('yash' ,'prasad', '4-3-1980');
const person2 = new person('Aditya' ,'saraf', '13-06-1999');

console.log(person1.getfullname());
console.log(person1.getBirtYear());