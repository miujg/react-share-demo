/**
 Crate by jgmiu on 19/06/18.
*/
import './routers.scss'
import {Route, Switch, BrowserRouter as Router, HashRouter} from 'react-router-dom'
import {User, Mouse, MouseHook, ContentHook, Reducer, Redux, Redux2, Effect} from 'coms'

export default class Routers extends Component{
  constructor(props) {
    super(props)
  }

  componentDidMount() {}

  render() {
    return(
      <div className={'container'}>
        <HashRouter>
          <Switch>
            <Route path={'/effect'} component={Effect} />
            <Route path={'/redux'} component={Redux} />
            <Route path={'/redux2'} component={Redux2} />
            <Route path={'/reducer'} component={Reducer} />
            <Route path={'/context'} component={ContentHook} />
            <Route path={'/renderHook'} component={MouseHook} />
            <Route path={'/renderProps'} component={Mouse} />
            <Route path={'/'} component={User} />
          </Switch>
        </HashRouter>
      </div>
    )
  }
}

Router.propTypes = {}
Router.defaultProps = {}