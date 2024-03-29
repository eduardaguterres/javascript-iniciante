// FizzBuzz
//Divisivel por 3 => 'Fizz',
//Divisivel por 5 => 'Buzz',
//Divisivel por 3 e 5 => 'FizzBuzz'
// Se não for um número => 'não é um numero'
// Se não for divisivel nem por 3 nem por 5 => Entrada

let resultado = fizzBuzz('goiba');
console.log(resultado)

function fizzBuzz(entrada) {
    if (typeof entrada !== 'number')
        return 'Não é um número';
    if ((entrada % 3 === 0) && (entrada % 5 === 0))
        return 'FizzBuzz';
    if (entrada % 3 === 0)
        return 'Fizz';
    if (entrada % 5 === 0)
        return 'Buzz';

    return entrada;
}