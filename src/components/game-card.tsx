import * as React from 'react'
import { Col, Image, Card } from 'react-bootstrap'
import { IGameData } from '../types/game-data'

interface IComponentProps {
  gameData: IGameData
}

export const GameCard: React.FC<IComponentProps> = props => (
  <Col sm={4}>
    <Card className='text-center'>
      <Card.Title>{props.gameData.title}</Card.Title>
      <Card.Img variant='bottom' src={props.gameData.imageSrc} />
    </Card>
  </Col>
)
