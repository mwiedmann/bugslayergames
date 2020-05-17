import * as React from 'react'
import { GameList } from '../components/game-list'
import { Intro } from '../components/intro'
import { FriendList } from '../components/friends-list'
import { About } from '../components/about'

export const Home: React.FC = () => (
  <div style={{ textAlign: 'center' }}>
    <Intro />
    <GameList />
    <FriendList />
    <About />
  </div>
)
