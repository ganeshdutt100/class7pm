// Promise((resolve , reject)=>{})
    let myPromise = new Promise((resolve, reject)=>{
    let a  = 10;
    if(a%2==0){
        resolve('even');
    }else{
        reject('odd');
    }
    }) 

    myPromise.then((value)=>console.log(value)).catch((error)=>console.log(error))
