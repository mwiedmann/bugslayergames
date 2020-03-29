import * as React from 'react'
import { useParams } from 'react-router-dom'
import { GameCard } from './components/game-card'
import { gameList } from './data/games'

interface IComponentRouteParams {
  name: string
}

interface IComponentOwnProps {} // extends RouteComponentProps<IComponentRouteParams> {}

export const GameDetails = () => {
  const { name } = useParams<IComponentRouteParams>()

  const gameData = gameList.find(g => g.link === name)

  return gameData ? <GameCard gameData={gameData} /> : <div>Not found</div>
}
