import { quizData } from '../data.js';

function selectAnswer(questionIndex, userAnswer) {
  quizData.questions[questionIndex].selected = userAnswer;
}

export default selectAnswer;
