
const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo
const sendMarsTemperature = () =>setTimeout(() => console.log(`A temperatura de marte é de ${getMarsTemperature()} graus celsius`),5000);

sendMarsTemperature(); // imprime "Mars temperature is: 20 degree Celsius", por exemplo