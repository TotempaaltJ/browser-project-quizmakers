'use strict';

import createDOMElement from '../utils/createDOMElement.js';
import clickAnswerHandler from '../handlers/clickAnswerHandler.js';
import { quizData } from '../data.js';

const createQuestionElement = (question) => {
  const container = createDOMElement('div');
  const title = createDOMElement('h1');
  title.innerText = question.text;
  container.appendChild(title);

  const answerContainer = createDOMElement('ol');

  for (const answerKey in question.answers) {
    const answer = createAnswerElement(question.answers[answerKey]);
    answer.dataset.questionIndex = quizData.currentQuestionIndex; // 0, 1, 2 ...
    answer.dataset.answerValue = answerKey; // 'a', 'b', 'c'
    answer.classList.add('li-list');
    
    answerContainer.addEventListener('click', clickAnswerHandler, {
      once: true,
    });
    

    answerContainer.appendChild(answer);
  }

  container.appendChild(answerContainer);

  return container;
};

const createAnswerElement = (answerText) => {
  const answerElement = createDOMElement('li');
  answerElement.innerText = answerText;

  return answerElement;
};

export default createQuestionElement;
