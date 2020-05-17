import * as React from 'react'
import { Card } from 'react-bootstrap'
import { IFriendData } from '../types/friend-data'
import { Link } from 'react-router-dom'
import { friendViewLink, imageLink } from '../helpers/links'
import { findImageType } from '../helpers/images'

interface ComponentProps {
  friendData: IFriendData
}

const FriendCard: React.FC<ComponentProps> = (props) => {
  const { friendData } = props

  return (
    <Link to={friendViewLink(friendData.name)}>
      <Card className='text-center'>
        <Card.Title>{friendData.title}</Card.Title>
        <Card.Img variant='bottom' src={imageLink(findImageType(friendData.images, 'main'))} />
        {friendData.shortDescription && <Card.Text>{friendData.shortDescription}</Card.Text>}
      </Card>
    </Link>
  )
}

export { FriendCard }
