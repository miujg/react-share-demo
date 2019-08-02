/**
 * 使用useContext 与 useReducer 代替 redux
 * 多个reducer 合并
 */
import React, { useReducer,useContext, useEffect } from 'react'

const userState = {
   name: 'jgmiu', age: 24
}

const user = (state, action) => {
  switch (action.type) {
    case 'name':
      return {...state, name: action.value}
    case 'age':
      return {...state, age: action.value}  
  }
}

// 子组件1
function Child1(props) {
  const context = useContext(Context)
  const state = context.state
  console.log(state)

  return(
    <div className={'c1'}>
      <h3>子组件1</h3>
      <span>name: {state.name} age: {state.age}</span>
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

  return(
    <div className={'c2'}>
      <h3>子组件2</h3>
      <button onClick={handleName}>name</button>
      <button onClick={handleAge}>age</button>
    </div>
  )
}

const Context = React.createContext()

export default function Redux(props) {

  const [state, dispatch] = useReducer(user, userState)

  return (
    <Context.Provider value = {{state, dispatch}}>
      <h1>使用useContext/useReducer代替reducer</h1>
      <Child1 />
      <Child2 />
    </Context.Provider>
  )
}