import * as React from 'react'
import { useParams } from 'react-router-dom'
import { gameList } from '../data/games'
import { NotFound } from '../components/not-found'
import { IGameData } from '../types/game-data'
import { Button, Col, Jumbotron, Image, Row } from 'react-bootstrap'
import { imageLink, playLink } from '../helpers/links'
import { findImageType } from '../helpers/images'

interface IComponentRouteParams {
  name: string
}

interface IGameDetailsProps {
  gameData: IGameData
}

const GameDetailsComponent: React.FC<IGameDetailsProps> = (props) => {
  const { gameData } = props

  return (
    <Jumbotron fluid style={{ textAlign: 'center' }}>
      <>
        <Row>
          <Col>
            <h1>{gameData.title}</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>{gameData.description}</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <a href={playLink(gameData.playLink)}>
              <Image src={imageLink(findImageType(gameData.images, 'main'))} fluid />
            </a>
          </Col>
        </Row>
        <Row className='m-1'>
          <Col>
            <Button href={playLink(gameData.playLink)} className='m-1'>
              Play
            </Button>
            {gameData.github && (
              <Button href={gameData.github} className='m-1'>
                View on Github
              </Button>
            )}
          </Col>
        </Row>
      </>
    </Jumbotron>
  )
}

export const GameDetails: React.FC = () => {
  const { name } = useParams<IComponentRouteParams>()

  const gameData = gameList.find((g) => g.name === name)

  return gameData ? <GameDetailsComponent gameData={gameData} /> : <NotFound />
}
