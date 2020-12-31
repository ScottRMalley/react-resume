import React, {useEffect, useState} from 'react';
import AppRouter from './AppRouter';
import Splash from './pages/Splash';
import './styles/App.css';

export default function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(async () => {
      setLoading(false);
    }, 2000);
  });
  return (
      <div className="App">
        <AppRouter loading={loading}/>
        <Splash loading={loading}/>
      </div>
  );
}
