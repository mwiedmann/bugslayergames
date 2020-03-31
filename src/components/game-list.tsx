import * as React from 'react'
import { Row, Container } from 'react-bootstrap'
import { GameCard } from './game-card'
import { gameList } from '../data/games'

export const GameList: React.FC = () => (
  <Container className='section-b'>
    <h1>Projects</h1>
    <Row>
      {gameList.map((g) => (
        <GameCard key={g.title} gameData={g} />
      ))}
    </Row>
  </Container>
)
