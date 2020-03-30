import * as React from 'react'
import { useParams } from 'react-router-dom'
import { gameList } from './data/games'
import { NotFound } from './components/not-found'
import { IGameData } from './types/game-data'
import { Jumbotron, Image } from 'react-bootstrap'
import { imageLink, playLink } from './helpers/links'
import { findImageType } from './helpers/images'

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
      <a href={playLink(gameData.playLink)}>
        <h1>{gameData.title}</h1>
        <p>{gameData.description}</p>
        <Image src={imageLink(findImageType(gameData.images, 'main'))} fluid />
      </a>
    </Jumbotron>
  )
}

export const GameDetails: React.FC = () => {
  const { name } = useParams<IComponentRouteParams>()

  const gameData = gameList.find((g) => g.name === name)

  return gameData ? <GameDetailsComponent gameData={gameData} /> : <NotFound />
}
