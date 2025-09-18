// Promise((resolve , reject)=>{})
    // let myPromise = new Promise((resolve, reject)=>{
    // let a  = 10;
    // if(a%2==0){
    //     resolve('even');
    // }else{
    //     reject('odd');
    // }
    // }) 

    // myPromise.then((value)=>console.log(value)).catch((error)=>console.log(error))

    // let pizza = new Promise((resolve, reject)=>{
    //     let isDelivered = true;
    //     if(isDelivered){
    //         resolve("Pizza Delivered")
    //     }
    //     else{
    //         reject("Pizza not Delivered")
    //     }
       
    // })
    // pizza.then((result)=>console.log(result))
    //      .catch((error)=>console.log(error))



    // let promiseChain = new Promise((resolve , reject)=>{
    //     setTimeout(()=>{
    //         resolve(1)
    //     },1000)
    // }).then((result)=>{
    //     console.log(result)
    //     return result + 1
    // }).then((result)=>{
    //     console.log(result);
    //     return result + 1
        
    // }).then((result)=>{
    //     console.log(result);
    //     return result + 1
    // })
    
let orderPizza = new Promise((resolve, reject)=>{
    resolve("Step 1:  Pizza Ordered")
})

orderPizza
        .then((msg) => {
            console.log(msg);
            return "Step 2: Pizza is being prepared"
           })
           .then((msg)=>{
            console.log(msg);
             return "Step 3 : Delivery boy on the way "
           })
           .then((msg)=>{
            console.log(msg);
            return "Step 4 : Pizza Delivered"
           })
           .then((msg)=>{
            console.log(msg);
           })
           .catch((error)=>{
            console.log(error);
           })
     
