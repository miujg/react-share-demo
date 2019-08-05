import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function Effect(props) {

  const [articles, setArticles] = useState([])

  useEffect(() => {
    axios.get('http://139.129.102.157:3000/article')
      .then(result => {
        setArticles(result.data.result)
      })
  }, [])

  return (
    <div className={'effect'}>
      <h1>effect</h1>
      <div>
        {
          articles.map(article => {
            return <span>{article.content}</span>
          })
        }
      </div>
    </div>
  )
}