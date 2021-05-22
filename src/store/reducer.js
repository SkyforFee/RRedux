let  defaultState={
  themeColor:'red'
}
export const themeReducer = (state=defaultState, actions={}) => {
  switch (actions.type) {
    case 'CHANGE_COLOR':
      return { ...state, themeColor: actions.themeColor }
    default:
      return state
  }
}