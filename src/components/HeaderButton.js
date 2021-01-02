import React from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import {motion} from 'framer-motion';
import '../styles/components/AppHeader.css';

const variants = {
    unselected: {
        borderColor: 'var(--text-dark)',
        paddingBottom: '0.5rem',
        paddingTop: '0.5rem',
        transition: {
            duration: 0.2
        }
    },
    selected: {
        borderColor: 'var(--quaternary)',
        paddingBottom: '1rem',
        paddingTop: '0rem',
        transition: {
            duration: 0.3
        }
    }
}
export default function HeaderButton({to, title, loading}) {
    const history = useHistory();
    const location = useLocation();
    const selected = loading ? false : location.pathname === to;
    return (
        <motion.div className='header-button'
                    onClick={() => history.push(to)}
                    animate={selected ? 'selected' : 'unselected'}
                    initial="unselected"
                    variants={variants}
        >
            {title.toUpperCase()}
        </motion.div>
    )
}
