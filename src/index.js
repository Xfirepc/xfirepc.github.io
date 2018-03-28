import React from 'react'
import ReactDOM from 'react-dom'
import Portafolio from './portfolio/container/port'

var data = () => {
  fetch('https://xfirepc.000webhostapp.com/api/blogCallback').then((response) => {
    return response.json()
  })
}


console.log("Si llegan datos")
const port = document.getElementById('appPort')
ReactDOM.render(<Portafolio data = {data}/>, port)