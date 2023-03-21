console.log("Stack");
console.clear();

class Stack{
    constructor(){
        this.items=[];
        this.size=0;
        this.push=function(val){
          this.items.push(val);
          this.size+=1;
        }
        this.pop=function(){
            if(this.size==0){
                return "Stack is Empty"
            }
            this.size-=1;
            return this.items.pop();
            
        }
        this.peek=function(){
            if(this.size==0){
                return "Stack is Empty"
            }
            return this.items[this.size-1]
        }
    }
}
// var stack=new Stack();
// stack.push(10);
// stack.push(18);
// stack.push(2);
// stack.push(5);
// stack.push(26);
// console.log(stack.items);
// console.log(stack.peek());
// console.log(stack.pop());
// console.log(stack.items);
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());
// // console.log(stack.pop());
// console.log(stack.items);
// console.log(stack.peek());
// console.log(stack.pop());
// console.log(stack.items)
// console.log(stack.items.length);
// console.log(stack.pop());
// console.log(stack.peek());

//Write a program to check for Balanced Brackets in an expression (well-formedness) using Stack. You have to examine whether the pairs and the orders of “{“, “}”, “(“, “)”, “[“, “]” are correct in expression.
var exp="[()]{}{[()()]()}"
var expStack=new Stack();
function isBalanced(exp){
   for(let i=0;i<exp.length;i++) {
    var b=exp[i];
    if(b=='{' || b=='['|| b=='('){
        expStack.push(b);
        continue
    }
    if(expStack.size== 0){
        return false;
    }
    var bracket=expStack.pop();
    switch(b){
        case ')':
            if(bracket=='[' || bracket=='{'){
                return false;
            }
            break;
        case ']':
                if(bracket=='(' || bracket=='{'){
                    return false;
                }
                break;
        case '}':
                    if(bracket=='[' || bracket=='('){
                        return false;
                    }
                    break;
    }

   }
   if(expStack.size==0){
    return true
   }
   else{
    return false;
   }

}

var res=isBalanced(exp)
if(res==true){
    console.log("Balanced");
}
else{
    console.log("Not- Balanced")
}


// var exp = "{}"
// var expStack = new Stack()
// function isBalanced(exp){
//   for(var i=0;i<exp.length;i++){
//     var b = exp[i]
//     if(b =='(' || b =='{' || b == '['){
//       expStack.push(b)
//       continue
//     }
//     if(expStack.size == 0){
//       return false
//     }
//     var bracket = expStack.pop()
//     switch(b){
//       case ')' : 
//         if(bracket == '[' || bracket == '{'){
//           return false
//         }
//         break
//       case '}' :
//         if(bracket == '[' || bracket == '('){
//           return false
//         }
//         break
//       case ']' :
//         if(bracket == '(' || bracket == '{'){
//           return false
//         }
//         break
//     }
//   }
//   return expStack.size == 0 ? true : false
// }

// var res = isBalanced(exp)
// if(res == true){
//   console.log('Balanced')
// }
// else{
//   console.log('Not Balanced')
// }




