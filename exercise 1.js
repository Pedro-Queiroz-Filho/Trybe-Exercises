const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  function flatten(array) {
    // escreva seu código aqui
    const concatenacao = array.reduce( (acc,curr) => {return acc.concat(curr)},[])
    return concatenacao
  }


  console.log(flatten(arrays));