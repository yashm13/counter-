const increase = document.querySelector(".increase");
const reset = document.querySelector(".reset");
const decrease = document.querySelector(".decrease");


const container = document.querySelector(".container");

const count = document.querySelector(".count");
let c = parseInt(count.innerHTML);


container.addEventListener("click", (e) =>
{

if(e.target.classList.contains("increase")){

    c += 1;
    count.textContent = c;


}
else if(e.target.classList.contains("decrease")){

    c -= 1;
    count.textContent = c;

}
else{

    c = 0;
    count.textContent = c;
}
});
