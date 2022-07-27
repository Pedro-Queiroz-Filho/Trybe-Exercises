const yearSeasons = {
    spring: ['March', 'April', 'May'],
    summer: ['June', 'July', 'August'],
    autumn: ['September', 'October', 'November'],
    winter: ['December', 'January', 'February'],
  };


  let estacoes = {spring,summer,autumn,winter} = yearSeasons;

  console.log([...spring,...summer,...autumn,...winter]);

