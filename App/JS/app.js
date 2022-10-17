// set initial count
let count = 0 ;

const value = document.querySelector("#value");

const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
    btn.addEventListener("click",function(e){
        const items = e.currentTarget.classList;
        if(items.contains("decrease")){
            count--;
        }else if(items.contains("increase")){
            count++;
        }else{
            count = 0;
        }

        if(count < 0){
            value.style.color = "hsl(348, 83%, 47%)";
        }else if(count > 0){
            value.style.color = "hsl(172, 68%, 37%)";
        }else{
            value.style.color ="hsl(225, 37%, 20%)";
        }
        value.textContent = count;
    })

})