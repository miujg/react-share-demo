/**
 * 使用useContext 与 useReducer 代替 redux
 * 多个reducer
 * 自定义combineReducers https://scarletsky.github.io/2016/08/20/write-your-own-combine-reducers-in-redux/
 */
import React, { useReducer,useContext, useEffect } from 'react'
// import {combineReducers} from 'redux'

const store = {
   user: {name: 'jgmiu', age: 24},
   params: {key: 'key', date: '20190802'}
}

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

const combineReducers = (reducers) => {
  return function(state, action) {
    return Object.keys(reducers)
                 .map(k => ({[k]: reducers[k](state[k], action)}))
                 .reduce((prev, cur) =>(Object.assign({}, prev, cur)))
  }
}

const reducers = combineReducers({user, params})

const Context = React.createContext()
export default function Redux2(props) {
  const [state, dispatch] = useReducer(reducers, store)

  return (
    <Context.Provider value = {{state, dispatch}}>
      <h1>使用useContext/useReducer代替reducer</h1>
      <Child1 />
      <Child2 />
    </Context.Provider>
  )
}

// 子组件1
function Child1(props) {
  const context = useContext(Context)
  const user = context.state.user
  const params = context.state.params

  return(
    <div className={'c1'}>
      <h3>子组件1</h3>
      <p><span>name: {user.name} age: {user.age}</span></p>
      <p><span>key: {params.key} date: {params.date}</span></p>
    </div>
  )
}

// 子组件2
function Child2(props) {
  const context = useContext(Context)
  const handleName = e =>{
    context.dispatch({type: 'name', value: 'miujg'})
  }

  const handleAge = e => {
    context.dispatch({type: 'age', value: 30})
  }

  const handleKey = e => {
    context.dispatch({type: 'key', value: 'keykeykey'})
  }

  const handleDate = e=> {
    context.dispatch({type: 'date', value: '1212121212'})
  }

  return(
    <div className={'c2'}>
      <h3>子组件2</h3>
      <button onClick={handleName}>name</button>
      <button onClick={handleAge}>age</button>
      <button onClick={handleKey}>key</button>
      <button onClick={handleDate}>date</button>
    </div>
  )
}