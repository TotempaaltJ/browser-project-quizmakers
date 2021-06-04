'use strict';
import selectAnswer from '../utils/selectAnswers.js';
import countCorrectAnswers from '../utils/countCurrentAnswers.js';

function clickAnswerHandler(event) {
  const li = event.target;
  selectAnswer(li.dataset.questionIndex, li.dataset.answerValue);
  const countSpan = document.getElementById('counter-span');
  countSpan.textContent = countCorrectAnswers();
}

export default clickAnswerHandler;
