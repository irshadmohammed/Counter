const initialVal = {
  value: 0
}

const reducer = (state = initialVal, action) => {
  switch(action.type) {
    case "ADD":
      return {
        ...state,
        initialVal: initialVal.value + action.payload
      }
    case "SUB":
      return {
        ...state,
        initialVal: initialVal - 1
      }
    default: return state
  }
}

export default reducer;