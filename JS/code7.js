let num1 = Number(prompt("Enter your first number: "))
let op = prompt("Enter your operator: ")

let num2 = Number(prompt("Enter your second number: "))


let result;
switch(op){
    case "+":
        result= num1 + num2;
        break;
    case "-":
        result= num1 - num2;
        break;
    case "*":
        result= num1 * num2;
        break;
    case "/":
      if(num2==0){
        console.log("Infinity");
        
      }else{
          result= num1 / num2;
      }
        break;
    default:
        console.log("Invalid operator");
}
console.log("The result is: " + result);
