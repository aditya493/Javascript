// var obj = {num:2};

// var addtothis = function(a,b,c){
//     return this.num+a+b+c;
// }


// var arr = [1.,2,3]

// console.log(addtothis.call(obj,1,2,3))

// console.log(addtothis.apply(obj,arr))
// var bound = (addtothis.bind(obj))

// console.log(bound(1,2,3))



// var student={age:20}
//  var printage = function(){
//      console.log(this.age);
//  }

// var x = printage.bind(student)
// x()




// CURRING
let multiply = function(x){
    return function(y){
            console.log(x*y);
    }
}


let multyplyByTwo = multiply(2)
multyplyByTwo(3)
