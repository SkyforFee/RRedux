import React, { Component } from 'react'
import { Route,Router,HashRouter   } from 'react-router-dom'
import BlueBearPage from './blueBearPage'
import Index from './index'
export default class Routers extends Component{
  constructor(props){
    super(props);
    this.state={

    }
  }
  render(){
    return(
      <HashRouter>
        <Route path='/bluebear' component={BlueBearPage} />
        <Route path='/' exact={true} component={Index} />
      </HashRouter>
    )
  }
}


