import React, { useReducer } from 'react'

const initUser = {
  name: 'jgmiu',
  age: 24,
  friends: ['xx', 'yy']
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'name':
      return {...state, name: action.value}
    case 'age':
      return {...state, age: action.value}  
  }
}


export default function Reducer(props) {

  const [state, dispatch] = useReducer(reducer, initUser)

  const handleClickName = e => {
    dispatch({type: 'name', value: 'xxx'})
  }

  const handleClickAge = e => {
    dispatch({type: 'age', value: 30})
  }

  return(
    <div className={'reducer'}>
      <h1>Reducer</h1>
      <span>name: {state.name} age: {state.age}</span>
      <button onClick={handleClickName}>name</button>
      <button onClick={handleClickAge}>age</button>
    </div>
  )
}