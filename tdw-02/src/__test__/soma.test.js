const soma = require('../pages/soma.js');

//Mensagem
test('A soma do 5 com 5 deverá dar 10', () => {
    //Resultado esperado
    expect(soma(5, 5)).toBe(10);
} ) ;
