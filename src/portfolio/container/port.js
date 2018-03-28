import React, { Component } from 'react'


class Portfolio extends Component{

  state = {
    blog: '',
    portf: ''
  }

   componentWillMount(){

    const url = 'https://xfirepc.000webhostapp.com/apixfire/ports'
    const proxyurl = "https://cors-anywhere.herokuapp.com/"

    const data =  fetch(proxyurl + url)
      .then(response => response.text())
      .then(contents => {console.log(contents)})
      .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))

    this.setState({portf: data})

    console.log(this.state.portf)
  }

  render(){
    return(
      <div>
        {

        }
      </div>
    )
  }
  
}

export default Portfolio