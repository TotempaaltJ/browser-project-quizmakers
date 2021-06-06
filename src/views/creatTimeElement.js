'user strict';
import { TIMER_OUT } from '../constants.js';
import createDOMElement from '../utils/createDOMElement.js';
const creatTimerElement = () => {
  
  const setTimeOut = createDOMElement('h3', { id: TIMER_OUT });
  setTimeOut.innerText = 'TIMER';
  setTimeOut.id = 'timer';
  return setTimeOut;
};

export default creatTimerElement;
