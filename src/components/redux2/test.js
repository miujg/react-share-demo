const user = (state, action) => {
  switch (action.type) {
    case 'name':
      return {...state, name: action.value}
    case 'age':
      return {...state, age: action.value}
    default:
      return state  
  }
}
const params = (state, action) => {
  switch (action.type) {
    case 'key':
      return {...state, key: action.value}
    case 'date':
      return {...state, date: action.value}  
    default: 
      return state
  }
}

// 自定义合并reducer函数
const combineReducers = (reducers) => {
  console.log(Object.keys(reducers))
}
const reducers = combineReducers({user, params})