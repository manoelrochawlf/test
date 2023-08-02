const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculateInvestmentValue(capital, interestRate, months) {
  const interest = (capital * interestRate * months) / 100;
  return capital + interest;
}

rl.question('Digite o capital inicial do investimento: ', (capitalInput) => {
  rl.question('Digite a taxa de juros (em %): ', (interestRateInput) => {
    rl.question('Digite o tempo de investimento (em meses): ', (monthsInput) => {
      const capital = parseFloat(capitalInput);
      const interestRate = parseFloat(interestRateInput);
      const months = parseInt(monthsInput);

      const finalValue = calculateInvestmentValue(capital, interestRate, months);
      console.log(`O valor final do investimento é: ${finalValue.toFixed(2)}`);
      rl.close();
    });
  });
});
