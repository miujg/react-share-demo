/**
 Crate by jgmiu on 19/07/29.
*/
import './mouseTracker.scss'
export default class MouseTracker extends Component{
  constructor(props) {
    super(props)
    this.state= {
      x: 0,
      y: 0
    }
  }

  componentDidMount() {
  }

  handleMouseMove = e => {
    this.setState({
      x: e.clientX,
      y:e.clientY
    })
  }

  render() {
    let {x, y} = this.state
    return(
      <div className={'mouse-box'} onMouseMove={this.handleMouseMove}>
        {this.props.render(this.state)}
      </div>
    )
  }
}

MouseTracker.propTypes = {}
MouseTracker.defaultProps = {}