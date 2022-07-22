const acorda = () => 'Acordando!!';
const cafe = () => 'Bora tomar café!!';
const dormir = () => 'Partiu dormir!!';
const doingThings = (func) => func()

console.log(doingThings(acorda));
console.log(doingThings(cafe));
console.log(doingThings(dormir));
