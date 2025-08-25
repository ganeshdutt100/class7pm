// let arrNum  = [12,34,25,27,8 ,1]
// fill
// arrNum.fill("JS",2,5)

// pop
// arrNum.pop()

// push
// arrNum.push(100)

// shift
// arrNum.shift()

// unshift
// arrNum.unshift(100)

// sort
// arrNum.sort()
// arrNum.sort((a,b)=>{
//     return a-b
// })

// splice
// splice(start , delete... , item1..)

// arrNum.splice(4,2 , "JS","CSS")

// reverse
// arrNum.reverse()
// console.log(arrNum);



// let arrNum1  = [12,34,25,27,8 ,1,12]
// let arrNum2  = [120,340,215,227,82 ,13]

// let result = arrNum1.concat(arrNum2)
// let result = arrNum1.includes(1)
// let result = arrNum1.indexOf(1)
// let result = arrNum1.lastIndexOf(12)
// let result = arrNum1.slice(1 , 3)
// let result = arrNum1.toString()
// let result = arrNum1.join(" /  ")
// console.log(result);




// Iteration methods
// let arrNum1  = [12,34,25,27,8 ,1,12]
// for(let x of arrNum1.entries()){
//     console.log(x);
    
// }'
// arrNum1.forEach((x)=> console.log(x))

// let output  = arrNum1.every((x)=>x%2==0 );
// let output  = arrNum1.some((x)=>x%2==0 );
// let output  = arrNum1.find((x)=>x%2==0 );
// let output  = arrNum1.findIndex((x)=>x%2==0 );

// let output  = arrNum1.filter((x)=>x%2==0 );
// let output  = arrNum1.map((x)=>x + x );
// let output  = arrNum1.reduce((acc,num)=> acc + num );

// console.log(output);

// for(let x of arrNum1.keys()){
// console.log(x);

// }
// for(let x of arrNum1.values()){
// console.log(x);

// }

//  Array Transformation Methods
// let obj={
//     length:2,
//     0:'code1.js',
//     1:'code2.js'
// }

// let newArray = Array.from(obj);
// console.log(newArray);


let newArray = Array.of('code1','code2','code3')
console.log(newArray);
