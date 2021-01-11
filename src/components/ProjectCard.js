import React from 'react';
import {Card, Col} from 'react-bootstrap';
import {IoLogoGithub} from 'react-icons/all';

export default function ProjectCard(props) {
  return (
      <Col lg={3}>
        <Card style={{background: 'var(--tertiary)', height: '100%'}}>
          <Card.Img variant="top" src={props.image}/>
          <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>{props.description}</Card.Text>
            <Card.Footer>
              <a href={props.link}>
                <IoLogoGithub/>
              </a>
            </Card.Footer>
          </Card.Body>
        </Card>
      </Col>
  )
}
