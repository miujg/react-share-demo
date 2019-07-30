/**
 Crate by jgmiu on 19/07/29.
*/
import MouseTracker from './MouseTracker'
export default class Mouse extends Component{
  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  render() {
    return(
      <div className={'mouse'}>
        <MouseTracker 
          render = {
            data => (
              <p>{data.x}:{data.y}</p>
            )
          }
        />
      </div>
    )
  }
}

Mouse.propTypes = {}
Mouse.defaultProps = {}