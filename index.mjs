//import startApp from './app.mjs';
//  getData
//  Scramble words 
let btn = document.getElementById('btn')
btn.addEventListener('click', getData)

function getData() {
  let text = document.getElementById("text").value.split(" "); //  words are split into arrays for easier manipulations
  let asterisk = "*";
  let repText = document.getElementById("scramble").value.split(" ");


  // this array ho;s the index of word we would like to match 
  const indexes = [];
  let result


  // this is where we compare for matches 

  for (let index = 0; index < text.length; index++) {
    if (text[index] === repText[0] || text[index] === repText[1]) {
      indexes.push(index);
      result = text.splice(index, 1, asterisk.repeat(text[index].length))
    }

  }
  document.getElementById('demo').innerText = text.join(' ')

}

//document.addEventListener('DOMContentLoaded', startApp);