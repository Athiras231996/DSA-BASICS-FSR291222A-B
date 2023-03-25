console.log("Time complexity") =1

//arr=[1,2,3,4,5,.100]
//let searchElement=1==>Best case-omega
//searchElement===arr[i]//1==1

//searchElement =100==>Worst case-Big O
//searchElement=150==>Worst case

//searchElement=50==>Average case-theta

console.clear();

/*
Constant Amount of Time(does'nt take any time)
1.console
2.if-else statement
3.simple assignment operations, =
4.Arithmetic operation-> +,-.*,/

O(1)

*/
//1
console.log("Hello world");
//O(1)

//2
var a=5; 
if(a>5){
    console.log("Greater")
}
else{
    console.log("Smaller")
}
//O(1)

//3
var x=94567; //1
var sum=0; //1
while(x>0){
    var d=x%10;
    console.log(d);
    sum+=d;
    x=parseInt(x/10);
}
console.log(sum) //1
 //O(n)//n number of input

/*
x=9456
d=9456%10  =6
sum=0+6=6
x=9456/10=945

x=945
d=945%10 = 5
sum=6+5=11
x=945/10= 94

x=94
d=94%10 = 4
sum=11+4=15
x=94/10 = 9

x=9
d=9%10 = 9
sum=15+9=24
x=9/10 = 0

sum=24

*/
//4
 var n=10;
 for(var i=0; i<n;i++){
    console.log("Helo World") 
 }

 //O(n)


 //5
 var arr=[9,5,4,3,2,1];
 var sum=0;
 for(var i=0;i<arr.length;i++){
    sum+=arr[i]
 }
console.log(sum)

//O(n)

//6
var arr1=[[1,2,3],// i=3 inputs
         [4,5,6],  //j=3
         [7,8,9]]
for(var i=0;i<arr1.length;i++) {
    for(var j=0;j<arr1[i].length;j++){
        console.log(arr[i][j])
    }
}  

//0(n^2)

/*i=0
j=0; 0<3
1
2
3

//i=1
j=0; 0<3
4
5
6

//i=2
j=0; 0<3
6
7
8*/

//7

 var count=0;
 var n=100;
  
 for(var i=n;i>0;i=i/2){
    for(var j=0;j<i;j++){
        count++
    }
 }

 //O(n)

 /*
 i=100  100>0
 j=0 0<100 
 1

 i=50 50>0
 j=0 0<50
 2

 i=25 25>0
 j=0 0<25
 3

 i=12 12>0
 j=0 0<12
 4
 i=6
 ....
 i=3

....
i=1
 
100 +100/2+100/4+100/8.........+1
n+ n/2+ n/4+ n/8.....+1 = 2n-1 //Geometric progression
O(2n-1)~O(n)
 */


//Assignment
/*
1.arr=[1,2,3,4,5,6]
number=6
[1,5]
[2,4]

3. str=ABCD
  STR1=BCDA

4.TEETER ==>R
edyoda ==>  eyoa

hello ->olleh



*/