/**
 Crate by jgmiu on 19/06/18.
*/
import './routers.scss'
import {Route, Switch, BrowserRouter as Router, HashRouter,Redirect} from 'react-router-dom'
import {User, Mouse, MouseHook, ContentHook, Reducer, App} from 'coms'

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
            <Route path={'/redux'} component={App} />
            <Route path={'/reducer'} component={Reducer} />
            <Route path={'/content'} component={ContentHook} />
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