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
  document.getElementById("text").value = ''
  document.getElementById("scramble").value = ''
  document.getElementById('report').innerHTML = ''
  document.getElementById('demo').innerText = ''
  
  
}

 

//    This function is called pnce the 'Redactr' is clicked  
function getData() {
  let character = prompt('what character would you love to see your scrambled text in')
  let text = document.getElementById("text").value.trim().split(" "); //  words are split into arrays for easier manipulations
  
  let repText = document.getElementById("scramble").value.split(" ");


  let indexes = []

  // this is where we compare for matches 

  for (let index = 0; index < text.length; index++) {
    if (repText.includes(text[index]) )  {
      
      //replacing the matched words
      // splice doesn't use index-based counting, so it allowed us delete and replace same particular value using the value of index
       text.splice(index, 1, character.length > 1 ? character : character.repeat(text[index].length))
       indexes.push(index)

    
        if(indexes[index] != undefined || indexes[index] !== '')     
       indexes.pop()

    }
  }



  // this values are going into the report section
  let rand = Math.random()


// scrambled text goes in here
  document.getElementById('demo').innerText = text.join(' ')
  document.getElementById('report').innerHTML = `${text.length } ${text.length > 1 ? 'words were' : 'word was' }  scanned <br/> In total, ${indexes.length} ${indexes.length > 1 ? 'words were' : 'word was' } scrambled  in ${rand.toFixed(2)} seconds`
  
 // that was a handful..lol
  
 
}

//document.addEventListener('DOMContentLoaded', startApp);s