const uppercase = (str, callback) => {
    setTimeout(() => {
      callback(str.toUpperCase());
    }, 500);
  };

describe('Verifica se a funcão coloca a string em caixa alta', () => {
    test('Verificando se a string fica maiuscula',(done) => {
        uppercase('trybe', (stringModificada) => {
        
            try {
                expect(stringModificada).toBe('TRYBE')
                done()
            } catch (error) {
                done(error)
            }
       })
    })
  
   

    
  
})