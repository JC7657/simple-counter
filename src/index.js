import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SecondsCounter from './SecondsCounter'

var seconds = -1
var secondsString = ""

setInterval(()=>{
  seconds = seconds + 1
  let secondsCharacters = seconds.toString().length
  if (secondsCharacters === 1) {
    secondsString = "00000" + seconds.toString()
  }
  else if (secondsCharacters === 2) {
    secondsString = "0000" + seconds.toString()
  }
  else if (secondsCharacters === 3) {
    secondsString = "000" + seconds.toString()
  }
  else if (secondsCharacters === 4) {
    secondsString = "00" + seconds.toString()
  }
  else if (secondsCharacters === 5) {
    secondsString = "0" + seconds.toString()
  }
  else {
    secondsString = seconds.toString()
  }
  
  ReactDOM.render(<SecondsCounter seconds={secondsString} />, document.getElementById('root'))}, 1000);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
