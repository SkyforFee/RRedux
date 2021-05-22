import React, { Component } from 'react'
import ReactDom from 'react-dom'
import Header from './Header'
import { Provider } from 'react-redux'
import Routers from './router'
import store from './store/store'
export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <Header extra={'如果有一天，aaaaaa。'} />
    )
  }
}
ReactDom.render(
  <Provider store={store}>
    <Routers />
  </Provider>,
  document.getElementById('root')
)