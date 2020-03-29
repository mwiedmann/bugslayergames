import * as React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { Home } from './home'
import { GameDetails } from './game-details'

const App = () => {
  return (
    <Router>
      <Container>
        <Switch>
          <Route path='/games/:name'>
            <GameDetails />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Container>
    </Router>
  )
}

export default App
