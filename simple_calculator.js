import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcular(numero1, operador, numero2) {
  switch (operador) {
    case '+':
      return numero1 + numero2;
    case '-':
      return numero1 - numero2;
    case '*':
      return numero1 * numero2;
    case '/':
      if (numero2 !== 0) {
        return numero1 / numero2;
      } else {
        return 'Erro: divisão por zero não é permitida!';
      }
    default:
      return 'Operador inválido. Use +, -, * ou /.';
  }
}

rl.question('Digite o primeiro número: ', (numero1) => {
  rl.question('Digite o operador (+, -, *, /): ', (operador) => {
    rl.question('Digite o segundo número: ', (numero2) => {
      const resultado = calcular(parseFloat(numero1), operador, parseFloat(numero2));
      console.log(`O resultado é: ${resultado}`);
      rl.close();
    });
  });
});