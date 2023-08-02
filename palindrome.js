const readline = require('readline');

function isPalindrome(word) {
    const reversedWord = word.split('').reverse().join('');
    return word === reversedWord;
  }
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('Digite uma palavra: ', (word) => {
    const isPalindromo = isPalindrome(word.toLowerCase());
    if (isPalindromo) {
      console.log(`A palavra "${word}" é um palíndromo.`);
    } else {
      console.log(`A palavra "${word}" não é um palíndromo.`);
    }
    rl.close();
  });
  