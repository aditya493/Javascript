class stack {
    constructor(){
        this.items=[];
        this.count=0;
    }
    push(element){
        this.items[this.count]=element;
        this.count +=1;
        console.log(`${element} is added`);
        return this.count;
}
    Pop(){
        var delet = this.items[this.count];
        this.count -=1;
        console.log(`${delet} is removed`)
        return delet
    }
    isempty(){
        console.log(this.count ==0 ? 'is empty':'not empty')
        return this.count ==0;
    }
    peek(){
        console.log(`${this.items[this.count-1]} is top element ` );
        return this.items[this.count-1];
    }
}

const x =new stack();
x.push(100)
x.push(200)
x.isempty()
x.peek()