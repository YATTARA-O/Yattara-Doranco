const inputName = document.querySelector(".nom");
const inputPrenom = document.querySelector(".prenom");
const inputAge = document.querySelector(".age");
const select = document.querySelector("select");
const info = document.querySelector(".info");
const form = document.querySelector('form > input');

let nom = "";
let prenom = "";
let age = "";
let animal = "";

inputName.addEventListener("input", (e) => {
    // console.log(e.target.value);
    nom = e.target.value;
})

inputPrenom.addEventListener("input", (e) => {
    // console.log(e.target.value);
    prenom = e.target.value;
})

inputAge.addEventListener("input", (e) => {
    // console.log(e.target.value);
    age = e.target.value;
})

select.addEventListener("input", (e) => {
    // console.log(e.target.value);
    select = e.target.value;
})

form.addEventListener("click", (e) => {
   e.preventDefault();

if (cgv.checked) {
    // info.innerHTML = 
    // `<h3>Nom: ${nom}</h3>
    //  <h3>Prenom: ${prenom}</h3>
    //  <h3>Age: ${age}</h3>
    //  <h3>Animal Favori: ${animal}</h3>
    // `;    
    info.innerHTML = nom + " " + prenom + " " + age + " " + animal;                
  }
  else {
    alert("vueillez cocher les CGV")
  }
})
