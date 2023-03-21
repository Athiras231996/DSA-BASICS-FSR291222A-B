console.clear();
// const Add10=(num)=>{
//   let newNum=num+10;
//   console.log(newNum)
// }
// let x=10;
// console.log(x);
// Add10(x);
// console.log(x)

// let push6=(arr)=>{
//   arr.push(6);
//   console.log(arr)
// }
    
// let arr=[1,2,3,4,5]
// console.log(arr)
// push6(arr);
// console.log(arr);

//creation
// var arr=[];
 var arr1=new Array();
// //Initialization
// var arr=["cat","Dog",1,"True"];

//insertion
arr1.push(1);
arr1.push(2);
arr1.push(3);
arr1.push(4);
arr1.push(5);
arr1.push(6);
arr1.push(7);
// console.log(arr1);

//Traversal

// for(var i=0;i<arr1.length;i++){
//   console.log(arr1[i]);
// }
// arr.forEach(function(elem){
//             console.log(elem)
//             })

//Accessing

// console.log(arr[0]);
// console.log(arr[arr.length-1])

//Search
arr1-[1,2,3,3]
//find
var res=arr1.find(function(x){
  return x==3;
})
console.log("Result:",res);

// //includes
// let output=arr1.includes(3);
// console.log(output)

//indexOf
// let index=arr1.indexOf(2);
// console.log(index);

//Delete
// arr1.pop();//delete from the end
// console.log(arr1);
// arr1.shift();// delete from the beginning
 console.log(arr1)
// console.log(arr1)
// arr1.splice(2,3);
// console.log(arr1)
//original array=[1,2,3,4,5,6,7]
//delete=3,4,5
//updated array=[1,2,6,7]

//slice
let push6=(arr2)=>{
  console.log(arr2.splice(1,3))//n-1
  //console.log(arr2)
}
    
let arr2=[1,2,3,4,5]
console.log(arr2)
push6(arr2);
console.log(arr2);



//Write a program to find the sum of largest and smallest number in without sorting an integer array.

var arr=[10, 22, 4, 5, 2, 6, 8, 8, 10, 10, 10, 26];
let minElem=arr[0];
let maxElem=arr[0];//max elem=22

for(let i=0;i<arr.length;i++){
  if(arr[i]>maxElem){//10>10=>false
                      //22>10=>true
                      //maxelem=22
                      //4>22=>false
                     // 26>22
                     //maxelem=26
    maxElem=arr[i];
  }
  if(arr[i]<minElem){
    minElem=arr[i];
  }
}

console.log(minElem,maxElem);
console.log("Sum:",minElem+maxElem)





