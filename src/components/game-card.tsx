import * as React from 'react'
import { Col, Card } from 'react-bootstrap'
import { IGameData } from '../types/game-data'
import { Link } from 'react-router-dom'
import { gameLink, imageLink } from '../helpers/links'
import { findImageType } from '../helpers/images'

interface ComponentProps {
  gameData: IGameData
}

const GameCard: React.FC<ComponentProps> = (props) => {
  const { gameData } = props

  return (
    <Col sm={4}>
      <Link to={gameLink(gameData.name)}>
        <Card className='text-center'>
          <Card.Title>{gameData.title}</Card.Title>
          <Card.Img variant='bottom' src={imageLink(findImageType(gameData.images, 'main'))} />
        </Card>
      </Link>
    </Col>
  )
}

export { GameCard }
