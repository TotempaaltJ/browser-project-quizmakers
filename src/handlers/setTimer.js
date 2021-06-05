'use strict';
import { quizData } from '../data.js';
const setTimeOut = () => {
  let sec = 0;
  let time = setInterval(myTimer, 1000);
  quizData.timer = time
  function myTimer() {
    document.querySelector('#timer').innerHTML = sec;
    sec++;
    
  }
  myTimer(time);
  
};

export default setTimeOut;
