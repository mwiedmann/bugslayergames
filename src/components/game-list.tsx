import * as React from 'react'
import { Row, Container, Col } from 'react-bootstrap'
import { GameCard } from './game-card'
import { gameList } from '../data/games'

export const GameList: React.FC = () => (
  <Container className='section-b' fluid>
    <h1 id='projects'>Projects</h1>
    <Row>
      <Col xl={2} lg={1} md={1} />
      <Col>
        <Row>
          {gameList.map((g) => (
            <Col sm={4} key={g.title}>
              <GameCard gameData={g} />
            </Col>
          ))}
        </Row>
      </Col>
      <Col xl={2} lg={1} md={1} />
    </Row>
  </Container>
)
