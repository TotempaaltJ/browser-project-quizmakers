import { quizData } from '../data.js';

function countCorrectAnswers() {
  let count = 0;
  for (const question of quizData.questions) {
    if (question.correct === question.selected) {
      count += 1;
      
    }
  }

  
  return `${count}`;


}
export default countCorrectAnswers;
