console.clear();
class Queue{
    constructor(){
this.item=[];
this.size=0;
this.enqueue=function(val){
    this.item.push(val);
    this.size+=1
}
this.dequeue=function(){
    if(this.size==0){
        return "Queue is Empty"
    }
    this.size-=1;
    return this.item.shift();
}
this.front=function(){this.dequeue
    if(this.size==0){
        return "Queue is Empty"
    }
    return this.item[0];
}
    }
}
var queue=new Queue();
// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// queue.enqueue(40)
// console.log(queue.item)
// console.log(queue.dequeue());
// console.log(queue.front());

let input=[1, 2, 3, 1, 4, 5, 2, 3, 6] 
let k = 3;
let output=[];
// console.log(input);
// console.log(...input);
// console.log(Math.max(...input))
for(let i=0;i<input.length;i++){
    queue.enqueue(input[i])
}
while(queue.size>=k){
var element=queue.item.slice(0,k)//endposition-1=2
var maxElem=Math.max(...element);
output.push(maxElem);
queue.dequeue();
}
console.log(output)


