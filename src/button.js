import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
class Button extends Component {
  static contextTypes = {
    store: PropTypes.object
  }
  constructor(props) {
    super(props);
    this.state = {
      themeColor: '',
    }
  }
  componentWillMount() {
    // const { store } = this.context;
    // this._updateThemeColor()
    // store.subscribe(()=>this._updateThemeColor())
  }
  // _updateThemeColor() {
  //   const { store } = this.context
  //   const state = store.getState()
  //   this.setState({ themeColor: state.themeColor })
  // }
  // dispatch action 去改变颜色
  handleSwitchColor (color) {
    // const { store } = this.context
    // console.log('aa',store)
    // store.dispatch({
    //   type: 'CHANGE_COLOR',
    //   themeColor: color
    // })
    if(this.props.onSwitchColor){
      this.props.onSwitchColor(color)
    }
  }
  render() {
    return (
      <div>
        <div style={{ color: this.props.themeColor }}>这个是测试context的组件</div>
        <div>{this.context.themeText}</div>
        <div>
          <button onClick={this.handleSwitchColor.bind(this, 'red')}>red</button>
          <span>   &nbsp              </span>
          <button onClick={this.handleSwitchColor.bind(this, 'blue')}>blue</button>
        </div>
      </div>

    )
  }
}
const mapStateToProps=(state)=>{
  return{
    themeColor:state.themeColor
  }
}
// const mapDispatchToProps = (dispatch)=>{
//   return{
//     onSwitchColor:(color)=>{
//       dispatch({
//         type:'CHANGE_COLOR',
//         themeColor:color
//       })
//     }
//   }
// }
const onSwitchColor = (value)=>{
  return {
    type:'CHANGE_COLOR',
    themeColor:value
  }
}
export default connect(mapStateToProps,{onSwitchColor})(Button)