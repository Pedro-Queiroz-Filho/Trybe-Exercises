// arquivo script.js
let paragrafo = document.body.firstElementChild.children[1];
paragrafo.style.backgroundColor = "red"
function mudaCor(){
    paragrafo.style.backgroundColor = "blue"
}

function mudaCor2(){
    paragrafo.style.backgroundColor = "red"
}

console.log(document.getElementById('start').nextSibling) // nó
console.log(document.getElementById('start').nextElementSibling) // <p>elemento</p>

paragrafo.addEventListener("click",mudaCor);
paragrafo.addEventListener("click",mudaCor2);