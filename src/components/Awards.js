import React from 'react';
import {Row, Col, Card} from 'react-bootstrap';
import Strings from '../Strings';

export default function Awards() {
    return (
        <Row>
            {Strings.Education.awards.cards.map(card => (
                <Col lg={4} className="pb-2">
                    <Card style={{background: 'var(--tertiary)', height: '100%'}}>
                        <Card.Body>
                            <Card.Title>{card.name}</Card.Title>
                            <Card.Subtitle>{card.type}</Card.Subtitle>
                            <Card.Text>{card.organization}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}
