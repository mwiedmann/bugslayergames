import * as React from 'react'
import { GameList } from '../components/game-list'
import { Intro } from '../components/intro'

export const Home: React.FC = () => (
  <div style={{ textAlign: 'center' }}>
    <Intro />
    <GameList />
  </div>
)
