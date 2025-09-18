 function validationPass(password){
 const minLength = 8; 
 const maxLength = 16; 

const hasUppercase = /[A-Z]/;
 const hasLowercase = /[a-z]/;
 const hasNumber = /[0-9]/;
 const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;

 if(password.length < minLength || password.length > maxLength){
    return `Password must be between ${minLength} and ${maxLength} characters long`
 }
 if(!hasUppercase.test(password)){
    return `Password must contain at least one uppercase letter`
 }
 if(!hasLowercase.test(password)){
    return `Password must contain at least one lowercase letter`
 }
 if(!hasNumber.test(password)){
    return `Password must contain at least one number`
 }
 if(!hasSpecialChar.test(password)){
    return `Password must contain at least one special character`
 }
 return `password is valid`;
}



let password = "1@GaneshDutt"
console.log(validationPass(password));

