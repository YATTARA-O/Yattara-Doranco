const box = document.querySelector('.box');
const btn_1 = document.getElementById("btn_1");
const btn_2 = document.getElementById('btn_2');
const h1 = document.querySelector("h1");
const h4 = document.querySelector("h4");
const p2 = document.querySelector('.p2');
const p1 = document.querySelector('.p1');
const div = document.querySelector('div');
const nav = document.querySelector('.navbar');


h1.style.textAlign = ("center");

btn_2.addEventListener('click', ()=> {   
    p2.style.background = ("gray");
    p2.style.fontSize = ("30px");
    p2.style.color = ("white");
    p2.style.visibility = 'visible';
    p1.style.visibility = 'hidden';
    h1.style.color = ("red");
    p2.classList.add('showResponse');
});

btn_1.addEventListener('click', ()=> {
    p1.style.visibility = 'visible';
    p2.style.visibility = 'hidden';
    p1.style.background = ("gray");
    p1.style.fontSize = ("30px");
    p1.style.color = ("white");
    h1.style.color = ("blue");
});

// Mousemouve Event

// mouseEnter

box.addEventListener('mouseenter', () => {  
    box.style.background ="blue";
    box.style.color =  'white';
    h4.style.textAlign = ("center");
    h4.style.fontSize = ("20px");
    h4.style.paddingBottom = ("15px");
    
});

box.addEventListener('mouseleave', () => {  
    box.style.background ="yellow";
    box.style.color =  'black';
    h4.style.textAlign = ("center");
    h4.style.fontSize = ("20px");
    h4.style.paddingBottom = ("15px");
});

// Scroll

window.addEventListener("scroll", () => {
    
    if(window.scrollY > 120) {
        console.log('superieur à 120');
        navbar.style.top = '0';
        navbar.style.paddingBottom = '20px';
    }
    else{
        navbar.style.top = '-50%';
    }
});

var tab = [12, "Joe", true, ["Dalton", 25, "Salut"]]

console.log(tab[1], tab[2]);
console.log(tab[0][3]);

// Keypress
const keypressContainer = document.querySelector('.keypress');
const key = document.getElementById('key');

document.addEventListener("keypress", (e) => {
    // console.log(e.key);
    key.innerHTML += e.key;
    if(e.key === 'j'){
        console.log("je suis un j");
        keypressContainer.style.background = 'pink';
    }
    else if (e.key === "v"){
        console.log("je suis un v");
        keypressContainer.style.background = 'green';
        keypressContainer.style.color = 'pink';
    }
    else {
        console.log('perdu');
    }
});

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


