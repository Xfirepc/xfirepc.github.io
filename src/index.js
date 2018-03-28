import React from 'react'
import ReactDOM from 'react-dom'
import Portfolio from './portfolio/container/port'


const port = document.getElementById('appPort')
const url = {
  portfolio: 'http://xfirepc.000webhostapp.com/apixfire/ports',
  blog: 'http://xfirepc.000webhostapp.com/apixfire/blogs'
}
ReactDOM.render(<Portfolio url = {url}/>, port)