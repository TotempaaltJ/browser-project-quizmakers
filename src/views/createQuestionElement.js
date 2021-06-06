'use strict';

import createDOMElement from '../utils/createDOMElement.js';
import clickAnswerHandler from '../handlers/clickAnswerHandler.js';

import { quizData } from '../data.js';

  const createQuestionElement = (question) => {
  const container = createDOMElement('div');
  const title = createDOMElement('h1');
  title.innerText = question.text;
  container.appendChild(title);
  
    //Set effect to the question
  const titleText = title.textContent;
  const splitText = titleText.split(''); 
  title.innerText = '';

for (let i = 0; i < splitText.length; i++) {
  title.innerHTML += "<span>" + splitText[i] + "</span>";
};

let char = 0;
let timer = setInterval(onTick, 30);

function onTick() {
  const span = title.querySelectorAll('span')[char];
  span.classList.add('fade');
  char++;
  if (char === splitText.length) {
      complete();
  }
}

function complete() {
  clearInterval(timer);
  timer = null;
  }
    
  const answerContainer = createDOMElement('ol');
  let interval = 1000;
  for (const answerKey in question.answers) {
    const answer = createAnswerElement(question.answers[answerKey]);
    answer.dataset.questionIndex = quizData.currentQuestionIndex; // 0, 1, 2 ...
    answer.dataset.answerValue = answerKey;
    
    //set answers effect
    const setEffectItem = (answer) => {
      const answerText = answer.textContent;
      const arrAnswerText = answerText.split('');
      answer.innerHTML = '';
      for (let i = 0; i < arrAnswerText.length; i++) {
        answer.innerHTML += "<span>" + arrAnswerText[i] + "</span>";
      }
      let charItem = 0;
      let timerItem = setInterval(onTickItem, 50);
      function onTickItem() {
      const spanAnswer = answer.querySelectorAll('span')[charItem];
      spanAnswer.classList.add('fade-out');
      charItem++;
      if (charItem === arrAnswerText.length) {
          completeItem();  
          }
      }
  function completeItem() {
      clearInterval(timerItem);
      timerItem = null;
      }
    }
      setTimeout(() => setEffectItem(answer), interval);
     interval += 1000;
    // 'a', 'b', 'c'
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
  answerElement.classList.add('item');
  answerElement.innerText = answerText;

 
  
  return answerElement;
};

export default createQuestionElement;
