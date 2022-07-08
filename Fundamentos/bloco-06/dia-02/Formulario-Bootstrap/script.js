const id = document.getElementById('busca');

function padrao(Event) {
    console.log(Event.target);
    Event.preventDefault()

}


busca.addEventListener('click',padrao)


