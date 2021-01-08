import React, {useEffect, useState} from 'react';
import AppRouter from './AppRouter';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import {BrowserRouter} from 'react-router-dom';

export default function App() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(async () => {
            setLoading(false);
        }, 2000);
    });
    return (
        <Container fluid className="App no-gutters d-flex flex-column justify-content-lg-between">
            <BrowserRouter>
                <AppRouter loading={loading}/>
            </BrowserRouter>
        </Container>
    );
}
