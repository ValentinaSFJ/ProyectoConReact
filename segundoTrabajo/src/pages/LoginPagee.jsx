import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const LoginPagee = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Autenticación con Firebase
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      console.log('Inicio de sesión exitoso:', userCredential.user);
    } catch (error) {
      setError(error.message);
      console.error('Error durante el inicio de sesión:', error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
      </label>
      <label>
        Contraseña:
        <input type="password" name="password" value={formData.password} onChange={handleInputChange} required />
      </label>
      <button type="submit">Iniciar Sesión</button>
      
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default LoginPagee;



