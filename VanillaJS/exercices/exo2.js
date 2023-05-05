const button = document.querySelector('button');
const btn = document.querySelector('button');

button.addEventListener("click", () => {
    button.innerHTML = "vous m'avez cliqué";
    button.style.fontSize = "20px";
    button.style.backgroundColor = "black";
    button.style.color = "white";
    btn.style.borderRadius = "30px";
});

btn.addEventListener("mouseleave", () => {
    btn.innerHTML = "aurevoir merci";
    btn.style.fontSize = "20px";
    btn.style.backgroundColor = "black";
    btn.style.color = "white";
    btn.style.padding = "20px";
    btn.style.borderRadius = "30px";
});

