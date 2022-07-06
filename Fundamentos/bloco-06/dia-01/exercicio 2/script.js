// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");



function previnir(Event){
Event.preventDefault()
}


function letraA(Event){
    console.log(Event.target.value)
    if(Event.target.value === 'a'){
     Event.preventDefault()
    }
}

HREF_LINK.addEventListener('click',previnir)
INPUT_CHECKBOX.addEventListener('click',previnir)
INPUT_TEXT.addEventListener('keyup',letraA)