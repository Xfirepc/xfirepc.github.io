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
    $(document).ready(function(){
      $('.inline-popup-trigger').magnificPopup({
        type: 'inline',
        modal: false,
        alignTop: true,
        fixedContentPos: true,
        fixedBgPos: false,
        overflowY: 'auto',
        closeBtnInside: true,
        preloader: true,
        midClick: true,
        removalDelay: 300,
        mainClass: 'mfp-fade-zoom',
      });
  
    })
  }

  launchModal = (data) =>{

    $('.'+data).magnificPopup({
      type: 'inline',
      modal: false,
      alignTop: true,
      fixedContentPos: true,
      fixedBgPos: false,
      overflowY: 'auto',
      closeBtnInside: true,
      preloader: true,
      midClick: true,
      removalDelay: 300,
      mainClass: 'mfp-fade-zoom',
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