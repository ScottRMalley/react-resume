import React from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import '../styles/components/EducationCard.css';
import TimelineIcon from './TimelineIcon';
import {Col, Row} from 'react-bootstrap';

const colorVariants = {
    open: {
        color: 'var(--quaternary)',
    },
    closed: {
        color: 'var(--text-primary)',
    }
}

const svgVariants = {
    open: {
        color: 'var(--quaternary)',
        transform: 'rotate(90deg)',
    },
    closed: {
        color: 'var(--text-primary)',
    }
}

export default function EducationCard({i, expanded, setExpanded, name, startDate, endDate, degree, location, bullets}) {
    const isOpen = i === expanded;
    return (
        <Row
            onClick={() => setExpanded(isOpen ? false : i)}
            className="education-card-outer pb-1"
        >
            <Col lg={2}/>
            <Col lg={8}>
                <Row>
                    <Col lg={1} className="d-flex flex-column justify-content-center">
                        <motion.div
                            initial="closed"
                            animate={isOpen ? 'open' : 'closed'}
                            variants={svgVariants}
                        >
                            <TimelineIcon
                                weight="15"
                                width="3rem"
                            />
                        </motion.div>
                    </Col>
                    <Col lg={8}>
                        <motion.div
                            initial="closed"
                            animate={isOpen ? 'open' : 'closed'}
                            variants={colorVariants}
                            style={{
                                fontFamily: 'Signika-SemiBold',
                                fontSize: 'xx-large',
                            }} className="pl-1"
                        >
                            {name.toUpperCase()}
                        </motion.div>
                    </Col>
                    <Col lg={3}>
                        <motion.div
                            initial="closed"
                            animate={isOpen ? 'open' : 'closed'}
                            variants={colorVariants}
                        >
                            <Row className="d-flex flex-row justify-content-lg-end justify-content-sm-start">
                                {startDate} - {endDate}
                            </Row>
                        </motion.div>
                    </Col>
                </Row>
                <Row className="pb-3 pt-1">
                    <Col lg={1}/>
                    <Col lg={11}>
                        <AnimatePresence initial={false}>
                            {isOpen && (
                                <motion.section
                                    key="content"
                                    initial="collapsed"
                                    animate="open"
                                    exit="collapsed"
                                    variants={{
                                        open: {opacity: 1, height: 'auto'},
                                        collapsed: {opacity: 0, height: 0}
                                    }}
                                    transition={{duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98]}}
                                >
                                    <div>{location}</div>
                                    <div>{degree}</div>
                                    <div>{bullets && bullets.map(b => (<div>{'* ' + b + '\n'}</div>))}</div>
                                </motion.section>
                            )}
                        </AnimatePresence>
                    </Col>
                </Row>
            </Col>
            <Col lg={2}/>
        </Row>
    );
};

