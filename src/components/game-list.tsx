import * as React from 'react'
import { Row } from 'react-bootstrap'
import { GameCard } from './game-card'
import { gameList } from '../data/games'

export const GameList: React.FC = () => (
  <Row>
    {gameList.map((g) => (
      <GameCard key={g.title} gameData={g} />
    ))}
  </Row>
)
