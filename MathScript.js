const operators = ['+', '-', '*', '/'];

function generateQuestion() {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const operator = operators[getRandomNumber(0, operators.length)];
  let answer;

  switch (operator) {
    case '+':
      answer = num1 + num2;
      break;
    case '-':
      answer = num1 - num2;
      break;
    case '*':
      answer = num1 * num2;
      break;
    case '/':
      answer = num1 * num2; 
      num1 = answer;
      answer = num2; 
      break;
  }

  const question = `${num1} ${operator} ${num2} = `;
  return { question, answer };
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkAnswer(userAnswer, correctAnswer) {
  return parseFloat(userAnswer) === correctAnswer;
}

function updateResult(isCorrect) {
  const resultElement = document.getElementById('result');
  resultElement.textContent = isCorrect ? 'Correct!' : 'Incorrect!';
  resultElement.style.color = isCorrect ? 'green' : 'red';
}

function nextQuestion() {
  document.getElementById('answer').value = '';
  document.getElementById('result').textContent = '';
  const { question, answer } = generateQuestion();
  document.getElementById('question').textContent = question;
  document.getElementById('submit').disabled = false;
  document.getElementById('answer').focus();
}

document.getElementById('submit').addEventListener('click', () => {
  const userAnswer = document.getElementById('answer').value;
  const correctAnswer = document.getElementById('question').textContent.split('=')[1].trim();
  const isCorrect = checkAnswer(userAnswer, correctAnswer);
  updateResult(isCorrect);
  document.getElementById('submit').disabled = true;
});

document.getElementById('next').addEventListener('click', nextQuestion);

nextQuestion();
