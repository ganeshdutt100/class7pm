// call 
// apply
// bind
// toString


// function.call(null , "Value")
// function greet(name){
//     console.log("Hello " + name);

    
// }
// greet.call(null , "JS")


// function Emp(id, name){
// this.id =  id
// this.name = name
// }

// function pEmp(id, name){
// Emp.call(this,id ,name);
// }
// function tEmp(id, name){
// Emp.call(this,id ,name);
// }

// let p1 = new pEmp(12, "JS")
// let t1 = new tEmp(13, "TS")

// console.log(p1.id  , " : ",  p1.name);

// console.log(t1.id  , " : ",  t1.name);



// function.apply(null, ["js"])

// let arr = [12,23,45,76]
//  let max = Math.max.apply(this , arr)
//  let min = Math.min.apply(null, arr)
//  console.log(max ,  " :  ", min);
 

// function greet(name, age){
//     console.log("Hello " + name  , " : " , age);

    
// }
// greet.apply(null , ["XYZ" , 23])


// let obj =  {
//     name : 'js',
//     getName :  function(){
//         return this.name 
//     }
// }

// let updateObj={
//     name :"React"
// }

// let value1= obj.getName;
// let value2 = value1.bind(updateObj)
// console.log(value2());

// console.log(value1);


// console.log(obj.getName());



// let a = 56;
// console.log(typeof a);
// console.log(typeof a.toString());
