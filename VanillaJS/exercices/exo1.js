const para = document.getElementById('parag1');
const button = document.querySelector("button");


button.addEventListener('click', ()=> {   
    para.style.background = "#333";
    para.style.color = "white";
    para.style.borderStyle = "doubled";
    para.style.borderWidth = "2px";
    para.style.borderColor = "green";
    para.style.fontSize = "30px";
    para.classList.add("active");
});