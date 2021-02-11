import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Produto from './pages'

function Rotas() {
  return(
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/produto/:id" exact component={Produto} />
    </Switch>
  )
}

export default Rotas