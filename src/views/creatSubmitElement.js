'use strict';
import createDOMElement from '../utils/createDOMElement.js';
import getDOMElement from '../utils/getDOMElement.js';
import clearDOMElement from '../utils/clearDOMElement.js';
import { SUBMIT_BTN_ID, QUIZ_CONTAINER_ID, NEXT_QUESTION_BUTTON_ID } from '../constants.js';


const creatSubmitBtn = () => {
    const submit = createDOMElement('button', { id: SUBMIT_BTN_ID });
    submit.innerText = 'submit';
    const quizContainer = getDOMElement(QUIZ_CONTAINER_ID);
    const nextQuestionButton = getDOMElement(NEXT_QUESTION_BUTTON_ID);
    nextQuestionButton.style.display = 'none';
    quizContainer.appendChild(submit);
    return submit; 
}

export default creatSubmitBtn;
