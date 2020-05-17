import * as React from 'react'
import { Row, Container, Col } from 'react-bootstrap'
import { FriendCard } from './friend-card'
import { friendList } from '../data/friends'

export const FriendList: React.FC = () => (
  <Container className='section-a' fluid>
    <h1 id='friends'>Friends of Bugslayer Games</h1>
    <Row>
      <Col xl={2} lg={1} md={1} />
      <Col>
        <Row>
          {friendList.map((f) => (
            <Col sm={4} key={f.title}>
              <FriendCard friendData={f} />
            </Col>
          ))}
        </Row>
      </Col>
      <Col xl={2} lg={1} md={1} />
    </Row>
  </Container>
)
