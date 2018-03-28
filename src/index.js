import React from 'react'
import ReactDOM from 'react-dom'
import Portfolio from './portfolio/container/port'

let url = 'https://xfirepc.000webhostapp.com/apixfire/ports'

fetch(url)
.then(function(response) {
  console.log(response); 
}).catch(function(error) {  
  console.log('Request failed', error)  
});


console.log('')
const port = document.getElementById('appPort')
ReactDOM.render(<Portfolio />, port)