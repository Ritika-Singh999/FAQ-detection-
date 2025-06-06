const stringSimilarity = require('string-similarity');

function getBestMatch(question, faqList) {
  const questions = faqList.map(faq => faq.question);
  const match = stringSimilarity.findBestMatch(question, questions);
  const best = match.bestMatch;
  if (best.rating > 0.8) {
    const index = questions.indexOf(best.target);
    return { score: best.rating, item: faqList[index] };
  }
  return null;
}

module.exports = { getBestMatch };
