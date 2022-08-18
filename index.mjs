//import startApp from './app.mjs';
//  getData
//  Scramble words 

//  gettin the submit button and listening for a 'click' event
let btn = document.getElementById('btn')
btn.addEventListener('click', getData)

// getting the reset button
let reset = document.getElementById('submit')
submit.addEventListener('click', resetInput)

//   this function is called once the reset button is clicked 
function resetInput(){
  let text = document.getElementById("text").value = ''
  let repText = document.getElementById("scramble").value = ''

  
  
}
//    This function is called pnce the 'Redactr' is clicked  
function getData() {
  let text = document.getElementById("text").value.split(" "); //  words are split into arrays for easier manipulations
  let asterisk = "*";
  let repText = document.getElementById("scramble").value.split(" ");


  // this array ho;s the index of word we would like to match 
  let indexes = [];
  let result


  // this is where we compare for matches 

  for (let index = 0; index < text.length; index++) {
    if (repText.includes(text[index]))  {
      
      result = text.splice(index, 1, asterisk.repeat(text[index].length))
      console.log(result)
      
      
    }
    
  }
  document.getElementById('demo').innerText = text.join(' ')
 console.log(indexes)
}

//document.addEventListener('DOMContentLoaded', startApp);s