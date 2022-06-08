const a = document.querySelector("#accueil");
const btn_change_text = document.getElementById("btn_change_text");
const btn_change_color = document.getElementById("btn_change_color");
const btn_move_square = document.getElementById("btn_move_square");
const square = document.querySelector("#square");
const input = document.querySelector("#name");
const bienvenue = document.querySelector("#bienvenue");
const form = document.querySelector("#form");

console.log(a);
console.log(btn_change_text);
console.log(btn_change_color);

btn_change_text.addEventListener("mouseover", function(){
    a.textContent = "Home";
})
btn_change_color.addEventListener("click", function(){
    a.style.color = "green";
})
btn_move_square.addEventListener("click", function(){
    if(confirm("Etes-vous sûr ?")){
        square.style.transform = "translateX(250px)";
        square.classList.add("circle");
    }else{
        alert("Tu es fou !");
    }
})
form.addEventListener("submit", function(event){
    event.preventDefault();
    const value = input.value;
    bienvenue.textContent +=` ${value}`;
    console.log(event);
})

// const age = prompt("Quel âge as-tu ?");
// if(age > 18 && age< 25){
//     console.log("Contenu gamin !");
// }