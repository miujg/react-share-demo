/**
 * useContext的使用
 */

import React, {useState, useContext, useEffect} from 'react'

export const Context = React.createContext()

// 子组件1
function Child1(props) {
  const user = useContext(Context)
  console.log(user)
  return(
    <div className={'c1'}>
      <h3>子组件1</h3>
      <span>name:{user.name} age:{user.age} </span>
    </div>
  )
}

// 子组件2
function Child2(props) {
  const user = useContext(Context)

  const handleName = e =>{
    user.setName('缪佳耕')
  }

  const handleAge = e => {
    user.setAge(30)
  }

  return(
    <div className={'c2'}>
      <h3>子组件2</h3>
      <button onClick={handleName}>name</button>
      <button onClick={handleAge}>age</button>
    </div>
  )
}

export function ContentHook(props) {

  const [name, setName] = useState('jgmiu')
  const [age, setAge] = useState('24')

  return (
    <Context.Provider value = {{name, setName, age, setAge}}>
      <h3>useContent</h3>
      <Child1 />
      <Child2 />
    </Context.Provider>
  )
}