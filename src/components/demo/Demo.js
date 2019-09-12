import React, {useState, useEffect} from 'react'

export default function Demo(props) {
  
  const [text, setText] = useState('')

  const getxx = text => {
    console.log(text)
    setText(text)
  }

  return (
    <div className={'demo'}>
      <h1>demo</h1>
      <Child/>
    </div>
  )
}

function Child(props) {
  console.log('child')

  return (
    <div className={'child'}>
      <h1>child</h1>
    </div>
  )
}