import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/login/Login';
import ShopCar from './pages/shop-car/ShopCar';
import NoFound from './pages/no-found/NotFound';
import axios from 'axios';

const App = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [isAuthChecked, setIsAuthChecked] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem('token');

        if (token) {
          const response = await axios.get('http://localhost:3000/ruta-protegida', {
            headers: {
              Authorization: `${token}`,
            },
          });

          if (response.status === 200) {
            setIsLogged(true);
          } else {
            localStorage.removeItem('token');
          }
        }
        setIsAuthChecked(true);
      } catch (err) {
        console.error(err);
        localStorage.removeItem('token');
        setIsAuthChecked(true);
      }
    };

    checkAuth();
  }, []);

  if (!isAuthChecked) {
    return null; // Muestra un spinner de carga u otra interfaz de carga mientras se verifica la autenticación.
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isLogged ? <Navigate to="/shop" /> : <Login setIsLogged={setIsLogged} />} />
        <Route path="/shop" element={isLogged ? <ShopCar /> : <Navigate to="/" />} />
        <Route path="/*" element={isLogged ? <NoFound /> : <Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
