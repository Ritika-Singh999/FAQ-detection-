const { getBestMatch } = require('./similarity');
const { faqList } = require('./faq');

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('🤖 FAQ Assistant is running.');
console.log('Ask me a question or type "exit" to quit.');

rl.on('line', (input) => {
  const question = input.trim();

  if (question.toLowerCase() === 'exit') {
    rl.close();
    return;
  }

  const match = getBestMatch(question, faqList);

  if (match && match.score > 0.8) {
    console.log(`✅ I found something similar!\nQ: ${match.item.question}\nA: ${match.item.answer}\n`);
  } else {
    console.log(`❌ Sorry, I couldn't find a good match in the FAQ.`);
  }

  console.log('Ask another question or type "exit" to quit.');
});
