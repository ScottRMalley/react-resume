import React from 'react';
import Fade from 'react-reveal/Fade';
import {motion} from 'framer-motion';
import '../styles/pages/Splash.css';
import Strings from '../Strings';
import {Row} from 'react-bootstrap';

const containerVariants = {
    loading: {
        height: '100vh',
    },
    done: {
        height: '7%',
        minHeight: '5rem',
        transition: {
            duration: 1,
        }
    }
};

const innerVariants = {
    loading: {
        paddingLeft: '30%',
    },
    done: {
        paddingLeft: '5%',
        transition: {
            duration: 1,
        }
    }
}

const textVariants = {
    loading: {
        fontSize: '3rem',
    },
    done: {
        fontSize: '2rem',
        transition: {
            duration: 1,
        },
    }
}

export default function Splash({loading}) {
    return (
        <Row>
            <motion.div
                animate={loading ? 'loading' : 'done'}
                initial="loading"
                variants={containerVariants}
                className="loading">
                <motion.div variants={innerVariants} className="innerContainer">
                    <Fade left>
                        <motion.div variants={textVariants} className="text-container">
                            <div className="text">RESUME</div>
                            <div className="text separator">|</div>
                            <div className="text text-light"> {Strings.name.toUpperCase()}</div>
                        </motion.div>
                    </Fade>
                </motion.div>
            </motion.div>
        </Row>
    )
}
