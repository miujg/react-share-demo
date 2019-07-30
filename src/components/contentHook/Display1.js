import React, {useContext, useState} from 'react'
import {AppContext} from './ContentHook'

export default function Display1(props) {

  const user = useContext(AppContext)

  return (
    <div>
      <h1>Display1</h1>
      <span>{user.name}</span>
    </div>
  )
}