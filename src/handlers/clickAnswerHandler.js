'use strict';
import selectAnswer from '../handlers/selectAnswers.js';
import countCorrectAnswers from '../handlers/countCurrentAnswers.js';

function clickAnswerHandler(event) {
  const li = event.target;
  selectAnswer(li.dataset.answerValue);
  const countSpan = document.getElementById('counter-span');
  console.log(countSpan);
  countSpan.textContent = countCorrectAnswers();
  return countSpan;
}

export default clickAnswerHandler;
