import React from 'react';
import {Row, Col} from 'react-bootstrap';
import {IoCaretForwardOutline} from 'react-icons/io5';
import {AnimatePresence, motion} from 'framer-motion';
import '../styles/components/ExperienceCard.css';

const colorVariants = {
    open: {
        color: 'var(--quaternary)',
    },
    closed: {
        color: 'var(--text-primary)',
    }
}

export default function ExperienceCard(props) {
    const {
        i,
        expanded,
        setExpanded,
        organization,
        location,
        position,
        startDate,
        endDate,
        bullets,
        key
    } = props;
    const isOpen = i === expanded;
    return (
        <Row
            onClick={() => setExpanded(isOpen ? false : i)}
            className="d-flex flex-row justify-content-between align-content-center w-100"
            key={key}
        >
            <Col lg={12} className="no-gutters pt-1 pb-3">
                <motion.div
                    animate={isOpen ? 'open' : 'closed'}
                    variants={colorVariants}
                    className="row"
                >
                    <Col lg={7} style={{fontFamily: 'Signika-SemiBold', fontSize: 'x-large'}}>
                        {organization.toUpperCase()}
                    </Col>
                    <Col lg={5} style={{fontFamily: 'Signika-Regular', fontSize: 'medium'}}
                         className="d-flex flex-row justify-content-end">
                        {startDate} - {endDate}
                    </Col>
                </motion.div>
                <Row>
                    <Col lg={12} style={{fontFamily: 'Signika-Light', fontSize: 'medium'}}>
                        {position}
                    </Col>
                </Row>
                <Row className="pt-1">
                    <Col lg={12}>
                        <AnimatePresence initial={false}>
                            {
                                isOpen && (
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
                                        {bullets && bullets.map((bullet, ind) => (
                                            <div key={`${organization}#${ind}`} className="pl-3">
                                                <IoCaretForwardOutline/>
                                                {bullet}
                                            </div>))}
                                    </motion.section>
                                )
                            }
                        </AnimatePresence>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}
