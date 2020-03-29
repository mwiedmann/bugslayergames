import * as React from 'react'
import { Jumbotron } from 'react-bootstrap'

const NotFound: React.FC = () => (
  <Jumbotron fluid>
    <h1>Not Found</h1>
    <p>
      Sorry, I could not find that content. Check your link again or let me know if there is a dead link on the site.
    </p>
  </Jumbotron>
)

export { NotFound }
