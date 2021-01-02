import React from 'react';
import {FaGraduationCap} from 'react-icons/fa';
import {motion, AnimatePresence} from 'framer-motion';
import '../styles/components/EducationCard.css';
import Strings from '../Strings';
import TimelineIcon from './TimelineIcon';
import {Col, Row} from 'react-bootstrap';

export default function EducationCard({i, expanded, setExpanded, title}) {
    const isOpen = i === expanded;
    return (
        <Row>
            <Col lg={1} style={{height: '1vh'}}>
                <TimelineIcon
                    color="var(--background)"
                    weight="10"
                />
            </Col>
            <Col
                lg={10}
                onClick={() => setExpanded(isOpen ? false : i)}
                className="education-card-outer"
            >
                <Row>
                    <Col lg={2}>
                        <FaGraduationCap size="6rem"/>
                    </Col>
                    <Col lg={10}>
                        <Row style={{fontFamily: 'Signika-SemiBold'}}>{title}</Row>
                        <Row>year0 - year1</Row>
                        <Row>masters degree - physics</Row>
                    </Col>
                </Row>
                <Row>
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
                                <div>{Strings.About.tagline}</div>
                            </motion.section>
                        )}
                    </AnimatePresence>
                </Row>
            </Col>
        </Row>
    );
};

