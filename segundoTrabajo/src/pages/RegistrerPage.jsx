import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/compat/auth';
import { auth } from '../firebase';
import CustomButton from './CustomButton';
import AlertMessage from './AlertMessage';

function RegistrerPage() {
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    email: '',
    phone: '',
    password: '',
    rpassword: '',
  });

  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({
    variant: '',
    text: '',
    duration: 0,
    link: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);

      
      if (formData.password !== formData.rpassword) {
        throw new Error('Las contraseñas no coinciden');
      }

      
      await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      setAlert({
        variant: 'success',
        text: 'Registro exitoso',
        duration: 2000,
        link: '/Login',
      });
    } catch (error) {
      console.error('Error durante el registro:', error.message);

      setAlert({
        variant: 'danger',
        text: error.message || 'Registro fallido',
        duration: 0,
        link: '',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Registro</h1>
      <form action="POST" onSubmit={handleSubmit}>
        
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="rpassword">Repetir Contraseña</label>
          <input
            type="password"
            id="rpassword"
            name="rpassword"
            value={formData.rpassword}
            onChange={handleChange}
          />
        </div>
        <CustomButton loading={loading} onClick={handleSubmit}>
          Registrarse
        </CustomButton>
        <AlertMessage
          variant={alert.variant}
          text={alert.text}
          duration={alert.duration}
          link={alert.link}
        />
      </form>
    </div>
  );
}

export default RegistrerPage;


