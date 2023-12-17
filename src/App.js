import React, { useEffect } from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import { useTelegram } from './hooks/useTelegram';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import Button from './components/Button/Button';
import ProductList from './components/ProductList/ProductList';
import './style.css';

const App = () => {
    const { tg, onToggleButton } = useTelegram();

    useEffect(() => {
        tg.ready();
    }, []);

    return (
        <div className="App">
            <Header />
            <Routes>
                <Route index element={<ProductList />} />
                <Route path="form" element={<Form />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </div>
    );
}
export default App;