class Stack{
    constructor(){
        this.item=[]
    }
    push(element){
        this.item.push(element)

    }
    pop(){
        return this.item.pop();
    }
    peek(){
        return this.item[this.item.length-1]
    }
    isEmpty(){
        return this.item.length===0;
    }
    size(){
        return this.item.length;
    }
    print(){
        console.log(this.item.toString())
    }
}
let stack=new Stack();
// console.log(stack.isEmpty());
stack.push(40);
stack.push(30);
stack.push(20);
stack.print();
console.log(stack.pop());
console.log(stack.peek());