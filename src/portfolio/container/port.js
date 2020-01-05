import React, { Component } from 'react'
import getUrlApi from '../../libs/geturl'
import PortfolioContent from '../components/portfolio'
import { request } from 'graphql-request'
class Portfolio extends Component{

  state = {
    portf: ''
  }
  
  componentWillMount =  async() =>{

    const endpoint = 'https://api-graphql-xfire-personal.vinygfx.now.sh/api'
    const query = /* GraphQL */ `
      {
        getItems{
          _id
          title
          description
          date
          client
          category
          link
          image
        }
      }
    `
    const data = await request(endpoint, query)
    console.log(data.getItems)
    this.setState({
      portf: data.getItems
    })
    
  }

  launchModal = (ev) =>{
    $('.inline-popup-trigger').magnificPopup({
      type: 'inline',
      modal: false,
      alignTop: true,
      fixedContentPos: true,
      fixedBgPos: false,
      overflowY: 'auto',
      closeBtnInside: true,
      preloader: false,
      midClick: true,
      removalDelay: 300,
      mainClass: 'mfp-fade-zoom',
      gallery: {
        enabled: true, // enable or disable gallery (false/true)
        arrowMarkup: '<button title="%title%" type="button" class="mfp-custom-arrow mfp-custom-arrow-%dir%"></button>', // markup of an arrow button
        tPrev: 'Previous (Left arrow key)', // title for left button
        tNext: 'Next (Right arrow key)' // title for right button
      }
    });
  }
  setRef = (element) => {
    this.tigger = element
  }
  
  render(){
    return(
      <div>
        <PortfolioContent setRef={this.setRef} handleClick={this.launchModal} item = {this.state.portf}/>
      </div>
    )
  }
  
}

export default Portfolio