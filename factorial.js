const readline = require('readline');

function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    }
  
    let resultado = 1;
    for (let i = 2; i <= numero; i++) {
      resultado *= i;
    }
  
    return resultado;
  }
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('Digite um número para calcular o fatorial: ', (numero) => {
    const fatorial = calcularFatorial(parseInt(numero));
    console.log(`O fatorial de ${numero} é: ${fatorial}`);
    rl.close();
  });
  