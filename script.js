const count = document.getElementById("count");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
let counter = 0;

increase.addEventListener('click',()=>{
    counter++;
    count.innerHTML = counter;
});

decrease.addEventListener('click',()=>{
    counter--;
    count.innerHTML = counter;
});

reset.addEventListener('click',()=>{
    counter = 0;
    count.innerHTML = counter;
});