
import React from 'react'
import ReactDOM from 'react-dom'
import Portfolio from './portfolio/container/port'
import BlogContainer from './blog/containers/blog'

const port = document.getElementById('appPort')
const blog = document.getElementById('appBlog')


ReactDOM.render(<Portfolio />, port)
// ReactDOM.render(<BlogContainer/>, blog)