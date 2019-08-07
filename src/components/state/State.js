import React, {useState, useEffect} from 'react'

export default function State(props) {

  const [count, setCount] = useState(0)

  const handleAdd = e => {
    setCount(count + 1)
  }

  return (
    <div>
      count: {count}
      <button onClick={handleAdd}>add</button>
    </div>
  )
}


class State1 extends Component{

  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    this.handleAdd = this.handleAdd.bind(this)
  }

  handleAdd() {
    this.setState({count: this.state.count + 1})
  }

  render() {
    return(
      <div>
        count: {this.state.count}
        <button onClick={handleAdd}>add</button>
      </div>
    )
  }
}
