const person= {
    Firstname :"Aditya",
    Lastname :"Saraf",
    age:30,
    hobbies:['moves','cricket','football'],
    Address:{
        Street :12,
        city:'Banglore',
        State:'Kranataka'

    }
}
console.log(person.hobbies[1])
console.log(person.Address.city)

const todos= [
    {
        id:1,
        text:'yash',
        iscompleted:true
  },
  {
    id:2,
    text:'Punit',
    iscompleted:true
  },
  {
    id:3,
    text:'Raj',
    iscompleted:true
  }
]


for (let i =0; i <3;i++){
    console.log(todos[i])
} 
j=0
while (j<3){
    console.log(todos[j])
    j++;
}