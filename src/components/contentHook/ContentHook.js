/**
 * 描述useContext的使用方法
 */

import React, {useState, useContext, useEffect} from 'react'
import Display from './Display'
import Display1 from './Display1'

export const AppContext = React.createContext()

const store = {
  user: {name: 'jgmiu', age: 24}
}

export function ContentHook(props) {

  const [name, setName] = useState('jgmiu')

  return (
    <AppContext.Provider value = {{name, setName}}>
      <h1>useContent</h1>
      <Display />
      <Display1 />
    </AppContext.Provider>
  )
}