const result = document.querySelector(".result");
const nums = document.querySelectorAll(".num");
const equal = document.querySelector(".equal");
const clear = document.querySelector("#clear");
const op =document.querySelectorAll(".op");

let currentInput="";

nums.forEach(num =>{
    num.addEventListener("click",()=>{
        currentInput+= num.innerHTML;
        result.innerHTML = currentInput;
        

    })
});
equal.addEventListener("click",()=>{
    result.innerHTML= eval(currentInput);
    currentInput = result.innerHTML;

    
})
clear.addEventListener("click",()=>{
    result.innerHTML="0";
    currentInput="";
})





