import React from 'react';
import {Card, Col} from 'react-bootstrap';
import {IoLogoGithub} from 'react-icons/all';

export default function ProjectCard(props) {
    return (
        <Col lg={4} id={props.id}>
            <Card style={{background: 'var(--tertiary)', height: '100%'}}>
                <Card.Img variant="top" src={props.image} style={{height: '10rem', objectFit: 'cover'}}/>
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>{props.description}</Card.Text>
                </Card.Body>
                <Card.Footer style={{ marginLeft: '0.3rem', marginRight: '0.3rem', marginBottom: '0.3rem'}}>
                    <a href={props.link}>
                        <IoLogoGithub size={20}/>
                    </a>
                </Card.Footer>
            </Card>
        </Col>
    )
}
