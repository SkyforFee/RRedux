import React, { Component } from 'react'
import Button from './button'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class Header extends Component {
  static contextTypes = {
    store: PropTypes.object
  }
  constructor(props) {
    super(props);
    this.state = {
      // themeColor: ''
    }
  }
  componentWillMount() {
    // this._updateThemeColor()
  }
  _updateThemeColor() {
    const { store } = this.context
    const state = store.getState()
    this.setState({ themeColor: state.themeColor })
  }
  render() {
    return (
      <div>
        <span style={{ color: this.props.themeColor }}>我是自定义组件的头部，你们都要听我的安排。。。。</span>
        <div>{this.props.extra}</div>
        <Button />
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    themeColor:state.themeColor
  }
}
export default connect(mapStateToProps)(Header)