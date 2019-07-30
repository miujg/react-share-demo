import React, { useReducer } from 'react'

const store = {
  user: {name: 'jgmiu', age: 24},
  info: {test: 'test'}
}

const user = (state, action) => {
  switch (action.type) {
    case 'name':
      return {...state, name: action.value}
    case 'age':
      return {...state, age: action.value}  
  }
}

const info = (state, action) => {
  switch (action.type) {
    case 'test':
      return {...state, test: action.value}
  }
}

// 自定义reduces合并函数
const combineReducers = reduces => {
  return (state, action) => {
    return Object.keys(reduces)
      .map(key => {
        let obj = {key: reduces[key](state[key], action)}
        return obj
      })
  }
}

const reduces = combineReducers(user, info)
// console.log(reduces(store, {type: 'name', value: 'miujg'}))

export default function App(props) {

  const [state, dispatch] = useReducer(user, store)

  const handleName = e => {
    dispatch({type: 'name', value: 'miujg'})
  }

  const handleAge = e => {
    dispatch({type: 'age', value: 30})
  }

  const handleTest = e => {
    dispatch({type: 'test', value: 'test111'})
  }

  return (
    <div>
      <h1>使用useContext/useReducer代替reducer</h1>
      <p>name: {state.user.name} age: {state.user.age}</p>
      <p>test: {state.info.test}</p>
      <button onClick={handleName}>name</button>
      <button onClick={handleAge}>age</button>
      <button onClick={handleTest}>test</button>
    </div>
  )
}