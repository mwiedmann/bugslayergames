import * as React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from './routes/home'
import { GameDetails } from './routes/game-details'

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path='/games/:name'>
          <GameDetails />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
