






for (let i=0;i< localStorage;i++){
    const person = {
        Name:'aditya',
        age:'21'
    }
    const person2 = {
        Name:'aa',
        age:'21'
    }
    var x='user'+i;
    localStorage.setItem(x,JSON.stringify(person))
    localStorage.setItem(x,JSON.stringify(person2))   
}


