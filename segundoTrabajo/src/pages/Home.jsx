import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../AuthContext'; 

const Home = () => {
  const { currentUser } = useAuth(); 

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=producto');
        if (response.ok) {
          const data = await response.json();
          
          const primerosDosProductos = data.results.slice(0, 2);
          setProductos(primerosDosProductos);
        } else {
          throw new Error('Error al obtener datos de la API de Mercado Libre');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {currentUser ? (
        // Si el usuario está autenticado, muestra los productos
        <div className="lista-productos">
          {productos.map((producto) => (
            <div key={producto.id} className="producto">
              <h3>{producto.title}</h3>
              <p>Precio: ${producto.price}</p>
              <img src={producto.thumbnail} alt={producto.title} />
              <Link to={`/producto/${producto.id}`}>
                <button>Ver Detalles</button>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        // Si el usuario no está autenticado, muestra un mensaje de inicio de sesión
        <div>
          <p>Para ver los productos, por favor inicia sesión o regístrate.</p>
          <Link to="/Login">
            <button>Iniciar Sesión</button>
          </Link>
          <Link to="/Registro">
            <button>Registrarse</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Home;
