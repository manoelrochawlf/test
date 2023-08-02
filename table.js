const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite um número para exibir a tabela: ', (numero) => {
  const num = parseInt(numero);

  console.log(`Tabela do ${num}:`);
  for (let i = 1; i <= 10; i++) {
    const resultado = num * i;
    console.log(`${num} x ${i} = ${resultado}`);
  }

  rl.close();
});
