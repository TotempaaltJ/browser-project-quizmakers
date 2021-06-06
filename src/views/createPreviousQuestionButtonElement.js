'use strict';

import { PREVIOUS_QUESTION_BUTTON_ID } from "../constants.js";
import previousQuestion from "../listeners/previousQuestion.js";
import createDOMElement from "../utils/createDOMElement.js";

const createPreviousQuestionButtonElement = () => {
    const buttonElement = createDOMElement('button', { id: PREVIOUS_QUESTION_BUTTON_ID });
    buttonElement.classList.add('btn');
    buttonElement.innerText = 'Previous question';
    buttonElement.addEventListener('click', previousQuestion);

    return buttonElement;
}

export default createPreviousQuestionButtonElement;