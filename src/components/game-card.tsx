import * as React from 'react'
import { Card } from 'react-bootstrap'
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
    <Link to={gameLink(gameData.name)}>
      <Card className='text-center'>
        <Card.Title>{gameData.title}</Card.Title>
        <Card.Img variant='bottom' src={imageLink(findImageType(gameData.images, 'main'))} />
        {gameData.shortDescription && <Card.Text>{gameData.shortDescription}</Card.Text>}
      </Card>
    </Link>
  )
}

export { GameCard }
