// let num1 = Number(prompt("Enter your first number: "))
// let op = prompt("Enter your operator: ")

// let num2 = Number(prompt("Enter your second number: "))


// let result;
// switch(op){
//     case "+":
//         result= num1 + num2;
//         break;
//     case "-":
//         result= num1 - num2;
//         break;
//     case "*":
//         result= num1 * num2;
//         break;
//     case "/":
//       if(num2==0){
//         console.log("Infinity");
        
//       }else{
//           result= num1 / num2;
//       }
//         break;
//     default:
//         console.log("Invalid operator");
// }
// console.log("The result is: " + result);



// Treasure Hunt Game (nested if)
// Idea: Two choices — Door Color & Key Color. Win only if correct combination

// door  -> Red or Blue 

 // key  -> Gold or  Silver 
//  red, GOLD
let door =  prompt("Choose a door :  Red or Blue")
let key =  prompt("Choose a key :  Gold or Silver")
if(door == "red"){
  if(key == "gold"){
    console.log("Win");
    
  }else{
    console.log("Wrong key , game over ");
  }
}else{
    console.log("Wrong door , game over ");
    
}