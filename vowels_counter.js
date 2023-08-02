const readline = require('readline');

function countVowels(sentence) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
  
    for (let i = 0; i < sentence.length; i++) {
      if (vowels.includes(sentence[i])) {
        count++;
      }
    }
  
    return count;
  }
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('Digite uma frase: ', (sentence) => {
    const numVowels = countVowels(sentence);
    console.log(`A frase possui ${numVowels} vogais.`);
    rl.close();
  });
  