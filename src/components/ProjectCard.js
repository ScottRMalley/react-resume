import React from 'react';
import {Card, Col} from 'react-bootstrap';

export default function ProjectCard(props) {
    return (
        <Col lg={3}>
            <Card style={{background: 'var(--tertiary)', height: '100%'}}>
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Subtitle>{props.type}</Card.Subtitle>
                    <Card.Text>{props.description}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}
