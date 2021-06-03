'use strict';
const setTimeOut = () => {
  let sec = 0;
  const time = setInterval(myTimer, 1000);
  function myTimer() {
    document.querySelector('#timer').innerHTML = `${sec} Second Left`;
    sec++;
  }
  myTimer(time);
};

export default setTimeOut;
