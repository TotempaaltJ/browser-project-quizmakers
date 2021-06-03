import { quizData } from '../data.js';

function selectAnswer(userAnswer) {
  quizData.questions[quizData.currentQuestionIndex].selected = userAnswer;
}

export default selectAnswer;
