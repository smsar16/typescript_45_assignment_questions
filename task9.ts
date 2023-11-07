import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter your favourite number: ', (numberString: string) => {
  const number: number = parseInt(numberString);

  console.log(`Your favourite number is ${number}`);

  rl.close();
});
