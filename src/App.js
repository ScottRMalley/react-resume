import React, {useEffect} from 'react';
import AppRouter from './AppRouter';
import {useAnimation, motion} from 'framer-motion';
import Splash from './pages/Splash';
import './styles/App.css';

export default function App() {
    const splashControls = useAnimation();
    const routerControls = useAnimation();
    useEffect(() => {
        setTimeout(async () => {
            splashControls.start({
                height: '10%',
                paddingLeft: '5%',
                transition: {
                    duration: 1
                }
            });
            routerControls.start({
                height: '90%',
                transition: {
                    duration: 1
                }
            });
        }, 2000);
    });
    return (
        <div className="App">
            <AppRouter controls={routerControls}/>
            <motion.div animate={splashControls} initial={{height: '100vh', paddingLeft: '30%'}} className="loading">
                <Splash controls={splashControls}/>
            </motion.div>
        </div>
    );
}
