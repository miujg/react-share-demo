import React, {useContext, useState} from 'react'
import {AppContext} from './ContentHook'

export default function Display(props) {

  const user = useContext(AppContext)
  const handleClickButton = e => {
    user.setName('xxxx')
  }

  return (
    <div>
      {console.log('render')}
      <h1>Display</h1>
      <span>{user.name}</span>
      <button onClick={handleClickButton}>change name</button>
    </div>
  )
}