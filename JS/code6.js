// // switch(expression) {
// //     case value1:
// //         // stm
// //         
// //     case value2:
// //                // stm

// //         
// //     default:
// //                 // stm

// // }


// let day = 3;
// switch(day){
//     case 1:
//         console.log("Monday");
//         break;
        
//     case 2:
//         console.log("Tuesday");
//         break;
        
//     case 3:
//         console.log("Wednesday");
//         break;
        
//     case 4:
//         console.log("Thursday");
        
//     case 5:
//         console.log("Friday");
//         break;
        
//     case 6:
//         console.log("Saturday");
//         break;
        
//     case 7:
//         console.log("Sunday");
//         break;
        
//     default:
//         console.log("Invalid day");
// } 


let leapYear = 1900;
if(leapYear % 4 == 0){
     if(leapYear % 100 == 0){
        if(leapYear % 400 == 0 ){
        console.log("Leap year");

        } else{
          console.log("Not a leap year");

        }

     }else{
            console.log("Leap year");
     }

    

}
else{
    console.log("Not a leap year");
}
