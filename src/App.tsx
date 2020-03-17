import * as React from 'react'
import { Container, Row } from 'react-bootstrap'
import { GameList } from './components/game-list'

const App = () => {
  const [count, setCount] = React.useState(0)
  return (
    <Container>
      <GameList />
    </Container>
  )
}

export default App
