import getDOMElement from '../utils/getDOMElement.js';
import { SUMMARY_ID ,NEXT_QUESTION_BUTTON_ID,PREVIOUS_QUESTION_BUTTON_ID} from '../constants.js'

import countCorrectAnswers from '../utils/countCurrentAnswers.js'
import createDOMElement from '../utils/createDOMElement.js';
import{ quizData } from '../data.js'
 
const handleSubmitButton = () => {
    const timeSpent = getDOMElement('timer')
     const timeTheUserSpent = timeSpent.innerText;
  
     const userScore = countCorrectAnswers()
     console.log(userScore)

     
    clearInterval(quizData.timer)
     
     const percentage  = userScore * 10 
    const div = getDOMElement(SUMMARY_ID)

    const h1 = createDOMElement('h1')
    h1.innerText = 'SUMMARY'
    h1.style.textAlign = 'center';
    h1.style.margin = '30px'
    div.prepend(h1)
    const questionH2 = createDOMElement('h2')
    questionH2.innerText = 'QUESTIONS '
    questionH2.className = 'summary-h2'
    questionH2.style.marginLeft = '460px'
    div.appendChild(questionH2)

    const correctH2 = createDOMElement('h2')
    correctH2.innerText = 'CORRECT ANSWER '
    correctH2.className = 'summary-h2'
    div.appendChild(correctH2)

    const userAnswerH2 = createDOMElement('h2')
    userAnswerH2.innerText = 'YOUR ANSWER '
    userAnswerH2.className = 'summary-h2'
    div.appendChild(userAnswerH2)

    const firstTable = createDOMElement('table')
      firstTable.className = 'first-table'
    
    for(const question of quizData.questions){
     
      const  correctAnswers  = question.answers[question.correct]
      const wrongSelectedAnswers = question.answers[question.selected]
      const questionsText = question.text

      
      if(correctAnswers !== wrongSelectedAnswers){
        
      const answerElement = createDOMElement('tr', )
       const questionsTheUserAnsweredWrong = createDOMElement('td')
       questionsTheUserAnsweredWrong.innerText = questionsText
       questionsTheUserAnsweredWrong.className = 'questions-text'
      const correctEl = createDOMElement('td')
      correctEl.innerText = correctAnswers
      correctEl.className = 'correct-answers'
      const selected = createDOMElement('td')
     
      selected.innerText = wrongSelectedAnswers
      selected.className = 'wrong-selected-answers'
      
      answerElement.appendChild(questionsTheUserAnsweredWrong )
      answerElement.appendChild(correctEl)
      answerElement.appendChild(selected)
      firstTable.appendChild(answerElement)
      
      div.appendChild(firstTable)
      
      }
    }
   
    //adding result table 
   
    const result =createDOMElement('div')
    result.className = 'result-box'
    
    result.innerHTML = `<div class=“result-box custom-box”>
    <h1>Quiz Result</h1>
    <table>
      <tr>
        <td>Total Question</td>
        <td>10</td>
      </tr>
      <tr>
        <td>Time</td>
        <td>${timeTheUserSpent}</td>
      </tr>
      <tr>
        <td>Correct</td>
        <td>${percentage/10}</td>
      </tr>
      <tr>
        <td>Wrong</td>
        <td>${10-userScore}</td>
      </tr>
      <tr>
        <td>Percentage</td>
        <td>${percentage}%</td>
      </tr>
      <tr>
        <td>Your Total Score</td>
        <td>${userScore}</td>
      </tr>
    </table>`;
     
     div.appendChild(result)
      const a = getDOMElement(NEXT_QUESTION_BUTTON_ID)
      a.style.display = 'none'
      const b = getDOMElement(PREVIOUS_QUESTION_BUTTON_ID)
      b.style.display = 'none'

    
}

export default handleSubmitButton;
