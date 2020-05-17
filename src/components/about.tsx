import * as React from 'react'
import { Container, Col, Row } from 'react-bootstrap'

export const About: React.FC = () => (
  <Container className='section-b' fluid>
    <Row>
      <Col>
        <h1 id='about'>About</h1>
      </Col>
    </Row>
    <Row>
      <Col xl={3} lg={2} md={1} sm={1} />
      <Col>
        <p className='lead'>
          Mark Wiedmann here. I&apos;m the Principal Software Developer at{' '}
          <a style={{ color: 'blue' }} href='https://www.inmotionnow.com/'>
            inMotionNow
          </a>
          . As a hobby, I enjoy creating games using Unity, Phaser, and a variety of other frameworks and languages.
          I&apos;m always looking to collaborate with other developers, so reach out if you have anything interesting to
          work on games related or otherwise.
        </p>
      </Col>
      <Col xl={3} lg={2} md={1} sm={1} />
    </Row>
    <Row>
      <Col>
        <a href='https://www.linkedin.com/in/mark-wiedmann'>Linked In</a>
        {' | '}
        <a href='https://github.com/mwiedmann'>Github</a>
        {' | '}
        <a href='mailto:bugslayergames@gmail.com'>Email</a>
      </Col>
    </Row>
  </Container>
)
