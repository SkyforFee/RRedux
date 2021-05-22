import React, { useState, useEffect  } from 'react'
// export default class BlueBearPage extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {

//     }
//   }
//   render() {
//     return (
//       <div style={{ color: 'blue' }}>股市不好的时候，为什么叫你熊市那？？？</div>
//     )
//   }
// }
export default function BlueBearPage(params) {
  const [state, setState] = useState({cesiText:'今天又是暴跌的一天'})
  useEffect(()=>{
    console.log(state)
  })
  return  <div style={{ color: 'blue' }}>股市不好的时候，为什么叫你熊市那？？？{state.cesiText}</div>
}