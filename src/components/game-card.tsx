import * as React from 'react'
import { Col, Card } from 'react-bootstrap'
import { IGameData } from '../types/game-data'
import { Link } from 'react-router-dom'
import { gameLink, imageLink } from '../helpers/links'

interface ComponentProps {
  gameData: IGameData
}

const GameCard: React.FC<ComponentProps> = (props) => {
  const { gameData } = props

  return (
    <Col sm={4}>
      <Link to={gameLink(gameData.link)}>
        <Card className='text-center'>
          <Card.Title>{gameData.title}</Card.Title>
          <Card.Img variant='bottom' src={imageLink(gameData.image)} />
        </Card>
      </Link>
    </Col>
  )
}

export { GameCard }
