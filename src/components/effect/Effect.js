import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function Effect(props) {

  const [articles, setArticles] = useState([])
  const [keyword, setKeyword] = useState('')

  useEffect(() => {
    getDatas()
    return () => {
      console.log('组件卸载~~~~')
    }  
  },[keyword])

  const getDatas = () => {
    axios.get('http://139.129.102.157:3000/article')
      .then(result => {
        setArticles(result.data.result)
      })
  }
  const handleChang = e => {setKeyword(e.target.value)}

  const handleSearch = () => {getDatas()}

  return (
    <div className={'effect'}>
      <h1>effect</h1>
      <input type={'text'} value={keyword} onChange={handleChang} />
      <button onClick={handleSearch}>search</button>
      <div>
        <Child articles={articles}/>
      </div>
    </div>
  )
}

function Child(props) {
  console.log(props)
  const articles = props.articles

  return (
    <div>
      {
        articles.map((article, i) => {
          return <span key={i}>{article.content}</span>
        })
      }
    </div>
  )
}

Child.propTypes = {
  articles: PropTypes.array,
}
Child.defaultProps = {
  articles: []
}
