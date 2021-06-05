const appendDiv = document.querySelector('summary');
appendDiv.innerHTML = `<div class=“result-box custom-box”>
<h1>Quiz Result</h1>
<table>
  <tr>
    <td>Total Question</td>
    <td><span class=“total-question”></span></td>
  </tr>
  <tr>
    <td>Time</td>
    <td><span class=“total-time”></span>50 second</td>
  </tr>
  <tr>
    <td>Correct</td>
    <td><span class=“total-correct”></span>3</td>
  </tr>
  <tr>
    <td>Wrong</td>
    <td><span class=“total-wrong”></span>2</td>
  </tr>
  <tr>
    <td>Percentage</td>
    <td><span class=“Percentage”></span>30.00%</td>
  </tr>
  <tr>
    <td>Your Total Score</td>
    <td><span class=“total-score”></span>4 / 5</td>
  </tr>
</table>
<button type=“button” class=“btn”>Try Again</button>`;