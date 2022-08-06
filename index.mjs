import startApp from './app.mjs';
function getData() {
  let text = document.getElementById("text").value.split(" ");
  let asterisk = "*";
  let repText = document.getElementById("scramble").value.split(" ");

  const indexes = [];
  let result

  for (let index = 0; index < text.length; index++) {
    if (text[index] === repText[0] || text[index] === repText[1]) {
      indexes.push(index);
      result = text.splice(index, 1, asterisk.repeat(text[index].length))
    }

  }
  document.getElementById('demo').innerText = text.join(' ')

}
export default getData
document.addEventListener('DOMContentLoaded', startApp);