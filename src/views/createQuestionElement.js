'use strict';

import createDOMElement from "../utils/createDOMElement.js";

const createQuestionElement = (question) => {
    const container = createDOMElement('div');
    const title = createDOMElement('h1');
    title.innerText = question.text;
    container.appendChild(title);
   // add links 
   const link1 = createDOMElement('a');
   link1.innerText = question.links[0].text;
   link1.href = question.links[0].href;
   const link2 = createDOMElement('a');
   link2.innerText = question.links[1].text;
   link2.href = question.links[1].href;

   container.appendChild(link1);
    container.appendChild(link2);

    const answerContainer = createDOMElement('ol');

    for (const answerKey in question.answers) {
        const answer = createAnswerElement(question.answers[answerKey]);
        answerContainer.appendChild(answer);
    }

    container.appendChild(answerContainer);

    return container;
}

const createAnswerElement = (answerText) => {
    const answerElement = createDOMElement('li');
    answerElement.innerText = answerText;

    return answerElement;
}

export default createQuestionElement;