import * as React from 'react'
import { Row } from 'react-bootstrap'
import { GameCard } from './game-card'
import { gameList } from '../data/games'

interface IComponentProps {}

export const GameList: React.FC<IComponentProps> = props => (
  <Row>
    {gameList.map(g => (
      <GameCard key={g.title} gameData={g} />
    ))}
  </Row>
)
