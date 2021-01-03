import React, {useEffect, useState} from 'react';
import AppRouter from './AppRouter';
import Splash from './pages/Splash';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';

export default function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(async () => {
      setLoading(false);
    }, 2000);
  });
  return (
      <Container fluid className="App no-gutters">
        <AppRouter loading={loading}/>
        <Splash loading={loading}/>
      </Container>
  );
}
