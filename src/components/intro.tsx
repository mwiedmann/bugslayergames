import * as React from 'react'
import { Container, Image } from 'react-bootstrap'

export const Intro: React.FC = () => (
  <Container className='section-a' fluid>
    <Image src='/images/profile.png' />
    <h1>Bugslayer Games</h1>
    <h3>
      <a className='section-links' href='#projects'>
        Projects
      </a>{' '}
      |{' '}
      <a className='section-links' href='#friends'>
        Friends
      </a>{' '}
      |{' '}
      <a className='section-links' href='#about'>
        About
      </a>
    </h3>
    <h2>Created by Mark Wiedmann</h2>
    <h2>Software Developer - Game Programmer</h2>
  </Container>
)
