'use strict';
const setTimeOut = () => {
  let sec = 0;
  const time = setInterval(myTimer, 1000);
  function myTimer() {
    document.querySelector('#timer').innerHTML = `${sec} Second Left`;
    sec++;
    if (sec == -1) {
      clearInterval(time);
      alert(`Time Out`);
    }
  }
};

export default setTimeOut;
