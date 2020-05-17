import * as React from 'react'
import { useParams } from 'react-router-dom'
import { NotFound } from '../components/not-found'
import { Button, Col, Jumbotron, Image, Row } from 'react-bootstrap'
import { imageLink } from '../helpers/links'
import { findImageType } from '../helpers/images'
import { IFriendData } from '../types/friend-data'
import { friendList } from '../data/friends'

interface IComponentRouteParams {
  name: string
}

interface IFriendDetailsProps {
  friendData: IFriendData
}

const FriendDetailsComponent: React.FC<IFriendDetailsProps> = (props) => {
  const { friendData } = props

  return (
    <Jumbotron style={{ textAlign: 'center' }}>
      <>
        <Row>
          <Col>
            <h1>{friendData.title}</h1>
          </Col>
        </Row>
        <Row>
          <Col xl={3} lg={2} md={1} sm={1} />
          <Col xl={6} lg={8} md={10} sm={10}>
            <p>{friendData.description}</p>
          </Col>
          <Col xl={3} lg={2} md={1} sm={1} />
        </Row>
        <Row>
          <Col>
            <a href={friendData.siteLink.link}>
              <Image src={imageLink(findImageType(friendData.images, 'main'))} fluid />
            </a>
          </Col>
        </Row>
        <Row className='m-1'>
          <Col>
            <Button href={friendData.siteLink.link} className='m-1'>
              Visit
            </Button>
          </Col>
        </Row>
      </>
    </Jumbotron>
  )
}

export const FriendDetails: React.FC = () => {
  const { name } = useParams<IComponentRouteParams>()

  const friendData = friendList.find((f) => f.name === name)

  return friendData ? <FriendDetailsComponent friendData={friendData} /> : <NotFound />
}
