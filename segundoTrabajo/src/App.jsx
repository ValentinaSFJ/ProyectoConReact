import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import NavBar from './pages/NavBar';
import Home from './pages/Home';
import { AuthProvider } from './AuthContext';
import RegistrerPage from './pages/RegistrerPage';
import LoginPagee from './pages/LoginPagee';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <AuthProvider>
      <div>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Registro" element={<RegistrerPage />} />
            <Route path="/Login" element={<LoginPagee />} />
            <Route path="/producto/:id" element={<ProductPage />} />
          </Routes>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;


