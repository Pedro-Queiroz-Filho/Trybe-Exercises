
//const piada = document.getElementById('jokeContainer')
// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  // Adicionar lógica aqui!
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  fetch(API_URL,myObject)
    .then((resposta) => resposta.json())
    .then((json) => document.getElementById('jokeContainer').innerHTML = json.joke)
    .catch((erro) => console.log('FAIL'));
};

fetchJoke();