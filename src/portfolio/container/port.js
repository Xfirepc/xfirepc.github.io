import React, { Component } from 'react'
import getUrlApi from '../../libs/geturl'
import PortfolioContent from '../components/portfolio'

class Portfolio extends Component{

  state = {
    portf: ''
  }

  componentWillMount =  async() =>{
    this.setState({
      portf: await getUrlApi(this.props.url.portfolio)
    })
    this.state.portf.map(( item ) => {
      return console.log('Item ', item)
    })
  }

  render(){
    return(
      <div>
      {
        this.state.portf ?
        <div>
          {this.state.portf.map((item)=>{
            return <PortfolioContent {...item}/>
          })}
        </div>
        :
        <div>No se ha cargado</div>
      }
      </div>
    )
  }
  
}

export default Portfolio