const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculateAverage(grades) {
  const total = grades.reduce((sum, grade) => sum + grade, 0);
  return total / grades.length;
}

rl.question('Digite a nota da primeira disciplina: ', (grade1) => {
  rl.question('Digite a nota da segunda disciplina: ', (grade2) => {
    rl.question('Digite a nota da terceira disciplina: ', (grade3) => {
      const grades = [parseFloat(grade1), parseFloat(grade2), parseFloat(grade3)];
      const average = calculateAverage(grades);
      console.log(`A média das notas é: ${average.toFixed(2)}`);
      rl.close();
    });
  });
});
