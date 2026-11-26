// function addition(a,b){
//     console.log("This is Normal Function");
//     console.log(a+b);
// 
// 
//     return {
//         name:"ravi",
//         passwordL:"admin@123"
//     }
// }
// 
// let res=addition(10,20)
// 
// console.log(res);
// 
// console.log(addition(b=50,a=60));



//Arrow Function-ES6

let arrowFun = (salary, name) => {
    let a = 100;
    console.log(a);
    console.log(name, salary);
}

arrowFun(10000, "Rani")


let studentDetails={
    name:"sai",
    rollNo:"19CSE001",
    fun:function(){
        console.log(this);
        console.log("Arrow Function");
    },
    fees:50000
}

studentDetails.fun()