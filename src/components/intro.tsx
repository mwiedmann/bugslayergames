import * as React from 'react'
import { Container, Image } from 'react-bootstrap'

export const Intro: React.FC = () => (
  <Container className='section-a' fluid>
    <Image src='/images/profile.png' />
    <h1>Bugslayer Games</h1>
    <h2>Created by Mark Wiedmann</h2>
    <h2>Software Developer - Game Programmer</h2>
  </Container>
)
