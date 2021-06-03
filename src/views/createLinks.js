import { quizData } from '../data.js';
import createDOMElement from '../utils/createDOMElement.js'
const createLinks = () => {
    const link1  = createDOMElement('a');
    link1.innerText = quizData.questions[quizData.currentQuestionIndex].links[0].text
    link1.href = quizData.questions[quizData.currentQuestionIndex].links[0].href
    const link2  = createDOMElement('a');
    link2.innerText = quizData.questions[quizData.currentQuestionIndex].links[1].text
    link1.href = quizData.questions[quizData.currentQuestionIndex].links[1].href
    return link2
}
export default createLinks