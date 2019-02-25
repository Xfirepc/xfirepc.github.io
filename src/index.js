
import React from 'react'
import ReactDOM from 'react-dom'
import Portfolio from './portfolio/container/port'
import BlogContainer from './blog/containers/blog'

const port = document.getElementById('appPort')
const blog = document.getElementById('appBlog')


const url = {
  portfolio: 'https://api-xfirepc.herokuapp.com/api/portfolios',
  blog: 'http://xfirepc.000webhostapp.com/apixfire/blogs'
}

ReactDOM.render(<Portfolio url = {url}/>, port)
// ReactDOM.render(<BlogContainer url = {url}/>, blog)