import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import './style.css';

const App = () => {
    useEffect(() => {
        tg.ready();
    }, []);

    return (
        <div className="App">
            <Header />
        </div>
    );
}
export default App;