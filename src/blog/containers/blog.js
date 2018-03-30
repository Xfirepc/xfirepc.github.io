import React, { Component } from 'react'
import BlogContent from '../components/blog-content'
import getUrlApi from '../../libs/geturl'

class BlogContainer extends Component {


  state = {
    blog: ''
  }
  componentWillMount = async() =>{
    
    this.setState({
      blog: await getUrlApi(this.props.url.blog)
    })

  } 
  render () {
    return <BlogContent item = {this.state.blog}/>
  }
  
}

export default BlogContainer 