let arr1=[obj1={
      name:"Nagendra",
      age:"21",
      gender:"Male",
      country:"srilanka"  
}
,obj2={
    name:"Nagendra",
    age:"21",
    gender:"Male",
    country:"pakisthan" 
}
,obj3={
    name:"Nagendra",
    age:"21",
    gender:"Male",
    country:"pakisthan"
    
}
,obj4={
    name:"Nagendra",
    age:"21",
    gender:"Male",
   
}
,obj5={
    name:"Nagendra",
    age:"21",
    gender:"Male",
    
}
]

for(i=0;i<arr1.length;i++){
    if(arr1.includes("country")){
    arr1[i].country="india"
    }
   
        
}
console.log(arr1);






const obj = { a:1, b:2,c:3,d:4}
const result=Object.values(obj).reduce((a,b)=>a+b)
console.log(result)


const obj = { a: 1, b: 2, c: 3, d: 4 };


const res = Object.fromEntries(
    Object.entrie(obj).filter(([key, value]) => value > 2)
);

console.log(res); 


const obj1={a:1,b:2}
const obj2={c:3,d:4}
let result=Object.assign(obj1,obj2)
console.log(result);

const obj1={ a: 1, b: 2, c: 3, d: 4 };

let result=Object.fromEntries(Object.entries(obj1))
console.log(result);




let arr1=[3,5,6.7,8,1.2,9.4,10]
integer=[],noninteger=[]
for(i of arr1){
    if(Number.isInteger(i)){
        integer.push(i)
    }
    else{
        noninteger.push(i)
    }
}
console.log("interger Numbers:"+" "+integer.join())
console.log("noninteger Numbers:"+" "+noninteger.join())

let arr1=prompt("enter a number").split(" ").map(Number)
emp=[],res=[],dup=[]
for(i of arr1){
    if(!emp.includes(i))
    emp.push(i)
   
}
 
 
 for(b of emp){
     c=0
     for(k of arr1){
         if(b==k){
             c++
         }
        
     }
      if(c<=1){
            res.push(b)
         }
        
 }
 console.log(res.join(","))

function generateotp(length=6){
     let otp="";
    for(i=1;i<=length;i++){
        otp+=Math.floor(Math.random()*10)
    }
    return otp;

}
console.log(generateotp());